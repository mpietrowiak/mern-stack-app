import * as express from 'express';
import { Request, Response } from 'express';
import IControllerBase from '../interfaces/IControllerBase.interface';
import path from 'path';
import { parse } from 'url';
import nextApp from '../nextapp';

class FrontendController implements IControllerBase {
  public path = '/';
  public router = express.Router();
  private nextHandler: any;

  constructor() {
    this.initRoutes();
    this.nextHandler = nextApp.getRequestHandler();
  }

  public initRoutes() {
    this.router.get('*', this.index);
  }

  index = (req: Request, res: Response) => {
    const { pathname, query } = parse(req.url, true);
    this.nextHandler(req, res, pathname, query);
  }
}

export default FrontendController;