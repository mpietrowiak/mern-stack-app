import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from '../interfaces/IControllerBase.interface';

class ApiController implements IControllerBase {
  public path = '/api';
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get('/', this.index);
  }

  index = (req: Request, res: Response) => {  
    res.status(200).json({ world: 'Welcome :) This text is from the API - new version - TypeScript.' });
  }
}

export default ApiController;