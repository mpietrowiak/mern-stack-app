import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import App from './app';
import nextApp from './nextapp';
import connectMongo from './mongo';
import './passport';

import FrontendController from './controllers/frontend.controller';
import ApiController from './controllers/api.controller';
import BooksController from './controllers/books.controller';
import AuthController from './controllers/auth.controller';

dotenv.config();
connectMongo();

(async () => {
  await nextApp.prepare();

  const app = new App({
    port: Number(process.env.PORT || 5000),
    controllers: [
      new AuthController(),
      new ApiController(),
      new BooksController(),
      new FrontendController()
    ],
    middlewares: [
      bodyParser.json()
    ]
  });
  
  app.listen();
})();