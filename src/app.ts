import express from 'express';
import { Application } from 'express';
import path from 'path';
import mongoose from 'mongoose';

class App {
  public app: Application;
  public port: number;

  constructor(appInit: { port: number; middlewares: any; controllers: any }) {
    this.app = express();
    this.port = appInit.port;

    this.connectMongo();
    this.assets();
    this.middlewares(appInit.middlewares);
    this.routes(appInit.controllers);
  }

  private connectMongo() {
    // const db = mongoose.connection;

    // try {
    //   db.on('error', console.error.bind(console, 'connection error:'));
    //   db.once('open', function() {
    //     console.log('connected to DB!');
    //   });

    //   mongoose.connect("mongodb://mongo:27017/testDb", { // Todoo env variable
    //     useNewUrlParser: true
    //   });
    // } catch (error) {
    //   console.log('Cannot connect to MongoDB. Error: ');
    // }
  }

  private middlewares(middlewares: { forEach: (arg0: (middleware: any) => void) => void; }) {
    middlewares.forEach(middleware => {
      this.app.use(middleware);
    });
  }

  private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
    controllers.forEach(controller => {
      this.app.use(controller.path, controller.router);
    });
  }

  private assets() {
    this.app.use(express.static(path.resolve(__dirname, '../client/build')));
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`);
    });
  }
}

export default App;