import App from './app';
import bodyParser from 'body-parser';
import FrontendController from './controllers/frontend.controller';
import ApiController from './controllers/api.controller';
import BooksController from './controllers/books.controller';
import nextApp from './nextapp';

(async () => {
  await nextApp.prepare();

  const app = new App({
    port: Number(process.env.PORT || 5000),
    controllers: [
      new ApiController(),
      new BooksController(),
      new FrontendController() // it must be last to catch all the remaining possible routes
    ],
    middlewares: [
      bodyParser.json()
    ]
  });
  
  app.listen();
})();