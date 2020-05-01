import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from '../interfaces/IControllerBase.interface';
import path from 'path';

class FrontendController implements IControllerBase {
  public path = '/';
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get('*', this.index);
  }

  index = (req: Request, res: Response) => {  
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
  }
}

export default FrontendController;