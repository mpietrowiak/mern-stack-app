import { Schema, model } from 'mongoose';

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

export default model('Book', BookSchema);
