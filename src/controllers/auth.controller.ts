import e, * as express from 'express';
import { Request, Response, NextFunction } from 'express';
import IControllerBase from '../interfaces/IControllerBase.interface';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { User } from '../models/user.model';

class AuthController implements IControllerBase {
  public path = '/api/auth';
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.post('/login', this.login);
    this.router.post('/addUser', this.addUser);
  }

  login = (req: Request, res: Response, next: NextFunction ) => {
    passport.authenticate('local', { session: false }, (err, user, info) => {
      if (err || !user) {
        return res.status(400).json({
          error: err,
          user: user
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

  addUser = async (req: Request, res: Response, next: NextFunction ) => {
    try {
      await User.create(req.body);
      res.status(201).end();
    } catch (error) {
      res.status(422).json({ error: error.toString() });
    }
  }
}

export default AuthController;