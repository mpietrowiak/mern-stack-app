import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from '../interfaces/IControllerBase.interface';

import Book from '../models/book.model';

class BooksController implements IControllerBase {
  public path = '/api/books';
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.route('/:id?')
      .get(this.handleGet)
      .post(this.handlePost);
  }

  handleGet = (req: Request, res: Response) => {  
    console.log(req.params);
    // if (req.params.id) { }
    res.status(200).json({ world: 'books' });
  }

  handlePost = async (req: Request, res: Response) => {
    const { title, author } = req.body;
    try {
      const newBook = new Book({ title, author });
      await newBook.save();
      res.status(200).json(newBook);
    } catch (error) {
      res.status(400).json({
        error
      });
    }
  }
}

export default BooksController;