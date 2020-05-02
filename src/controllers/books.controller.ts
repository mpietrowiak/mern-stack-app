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
    this.router
      .get('/', this.listItems)
      .post('/', this.addItem)

      .get('/:id', this.getItem)
      .put('/:id', this.editItem)
      .delete('/:id', this.deleteItem);
  }

  listItems = async (req: Request, res: Response) => {
    res.status(200).json({
      msg: 'listItems'
    });
  }

  addItem = async (req: Request, res: Response) => {
    res.status(200).json({
      msg: 'addItem'
    });
  }

  getItem = async (req: Request, res: Response) => {
    res.status(200).json({
      msg: 'getItem'
    });
  }

  editItem = async (req: Request, res: Response) => {
    res.status(200).json({
      msg: 'listItems'
    });
  }

  deleteItem = async (req: Request, res: Response) => {
    res.status(200).json({
      msg: 'editItem'
    });
  }  

  // handleGet = async (req: Request, res: Response) => {
  //   console.log(req.params.id);
  //   try {
  //     if (req.params.id) {
  //       const result = await Book.findById(req.params.id);
  //       res.status(200).json(result);
  //     } else {
  //       const result = await Book.find({});
  //       console.log(result);
  //       res.status(200).json(result);
  //     }
  //   } catch (error) {
  //     res.status(400).json({
  //       error
  //     });
  //   }
  // }

  // handlePost = async (req: Request, res: Response) => {
  //   const { title, author } = req.body;
  //   try {
  //     const newBook = new Book({ title, author });
  //     await newBook.save();
  //     res.status(200).json(newBook);
  //   } catch (error) {
  //     res.status(400).json({
  //       error
  //     });
  //   }
  // }
}

export default BooksController;