import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import passportJWT from 'passport-jwt';
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function (email, password, cb) {
  const user = {
    email: 'matas8@protonmail.com'
  }
  // TODO get from DB.
  return cb(null, user, { message: 'Logged in successfully.'});
}));

passport.use(
  new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey   : 'your_jwt_secret'
  },
  function (jwtPayload, cb) {
    const fakeUser = {}
    return cb(null, fakeUser);
  })
);