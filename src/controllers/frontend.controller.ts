import * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import IControllerBase from '../interfaces/IControllerBase.interface';
import { parse } from 'url';
import nextApp from '../nextapp';

class FrontendController implements IControllerBase {
  public path = '/';
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get('*', this.index);
  }

  index = (req: Request, res: Response, next: NextFunction ) => {
    const { query } = parse(req.url, true);
    try {
      (req as any).locals = { context: {} };
      nextApp.render(req, res, '/', query);
    } catch (error) {
      next(error);
    }
  }
}

export default FrontendController;