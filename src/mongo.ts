import mongoose from 'mongoose';

export default function connectMongo() {
  const db = mongoose.connection;

  try {
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      console.log('connected to DB!');
    });
    mongoose.connect(`${process.env.MONGODB_URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (error) {
    console.log('Cannot connect to MongoDB. Error: ');
  }
}