import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from '../interfaces/IControllerBase.interface';
import mongoose from 'mongoose';

import Book from '../models/book.model';

class BooksController implements IControllerBase {
  public path = '/api/books';
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router
      .get('/', this.listItems)
      .post('/', this.addItem)
      .get('/:id', this.getItem)
      .put('/:id', this.editItem)
      .delete('/:id', this.deleteItem);
  }

  listItems = async (req: Request, res: Response) => {
    const books = await Book.find({});
    res.status(200).json(books);
  }

  getItem = async (req: Request, res: Response) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(422).json({ error: 'Please provide a proper ID.' });
      return;
    }
    const book = await Book.findById(req.params.id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).end();
    }
  }

  addItem = async (req: Request, res: Response) => {
    const { title, author } = req.body;
    try {
      await Book.create({
        title,
        author
      });
      res.status(201).end();
    } catch (error) {
      res.status(422).json({ error: error.toString() });
    }
  }

  editItem = async (req: Request, res: Response) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(422).json({ error: 'Please provide a proper ID.' });
      return;
    }
    const editedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (editedBook) {
      res.status(204).end();
    } else {
      res.status(404).end();
    }
  }

  deleteItem = async (req: Request, res: Response) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(422).json({ error: 'Please provide a proper ID.' });
      return;
    }
    const deletedBook = await Book.findByIdAndRemove(req.params.id, req.body);
    if (deletedBook) {
      res.status(204).end();
    } else {
      res.status(404).end();
    } 
  }  
}

export default BooksController;