import express from 'express';
import { Application } from 'express';
import path from 'path';

class App {
  public app: Application;
  public port: number;

  constructor(appInit: { port: number; middlewares: any; controllers: any }) {
    this.app = express();
    this.port = appInit.port;

    this.middlewares(appInit.middlewares);
    this.routes(appInit.controllers);
    this.assets();
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
    this.app.use(express.static(path.join(__dirname, '../client/build')));
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the http://localhost:${this.port}`);
    });
  }
}

export default App;