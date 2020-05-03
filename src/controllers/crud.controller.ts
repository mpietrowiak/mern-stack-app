import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import IControllerBase from '../interfaces/IControllerBase.interface';
import mongoose, { Model } from 'mongoose';
import passport from 'passport';

function validateId(req: Request, res: Response, next: NextFunction) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res
      .status(422)
      .json({ error: 'Please provide a proper ID.' });
  } else {
    next();
  }
}

class CRUDController implements IControllerBase {
  public path: string;
  public model: Model<any>;
  public router = express.Router();

  constructor(path: string, model: Model<any>) {
    this.path = path;
    this.model = model;
    this.initRoutes();
  }

  public initRoutes() {
    this.router
      .get('/', this.listItems)
      .get('/:id', validateId, this.getItem)
      .post('/',      passport.authenticate('jwt', {session: false}), this.addItem)
      .put('/:id',    passport.authenticate('jwt', {session: false}), validateId, this.editItem)
      .delete('/:id', passport.authenticate('jwt', {session: false}), validateId, this.deleteItem);
  }

  listItems = async (req: Request, res: Response) => {
    const books = await this.model.find({});
    res.status(200).json(books);
  }

  getItem = async (req: Request, res: Response) => {
    const book = await this.model.findById(req.params.id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).end();
    }
  }

  addItem = async (req: Request, res: Response) => {
    try {
      await this.model.create(req.body);
      res.status(201).end();
    } catch (error) {
      res.status(422).json({ error: error.toString() });
    }
  }

  editItem = async (req: Request, res: Response) => {
    const editedItem = await this.model.findByIdAndUpdate(req.params.id, req.body);
    res.status(editedItem ? 204 : 404).end();
  }

  deleteItem = async (req: Request, res: Response) => {
    const deletedItem = await this.model.findByIdAndRemove(req.params.id, req.body);
    res.status(deletedItem ? 204 : 404).end();
  }  
}

export default CRUDController;