import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function (email, password, cb) {
  const user = {
    email: 'matas8@protonmail.com'
  }
  return cb(null, user, { message: 'Logged in successfully.'});
}));

passport.use(
  new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey   : 'your_jwt_secret'
  },
  function (jwtPayload, cb) {
    const fakeUser = {}
    return cb(null, fakeUser);
  })
);