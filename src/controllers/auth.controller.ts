import e, * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import IControllerBase from '../interfaces/IControllerBase.interface';
import jwt from 'jsonwebtoken';
import passport from 'passport';

class AuthController implements IControllerBase {
  public path = '/auth';
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.get('/login', this.login);
  }

  login = (req: Request, res: Response, next: NextFunction ) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          message: 'Something is not right',
          user   : user
        });
      }

      req.login(user, { session: false }, (err) => {
        if (err) {
          res.send(err);
        }

        const token = jwt.sign(user, 'your_jwt_secret');
        return res.json({ user, token });
      })
    })(req, res);
  }
}

export default AuthController;