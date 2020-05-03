import { Schema, Model, model, Document } from 'mongoose';

export interface IBook extends Document {
  title: String;
  author: String;
}

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true
  }
});

const Book: Model<IBook> = model<IBook>('Book', BookSchema);

export default Book;
