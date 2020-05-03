import CRUDController from "./crud.controller";
import Book from "../models/book.model";

class BooksController extends CRUDController {
  constructor() {
    super('/api/books', Book);
  }
}

export default BooksController;