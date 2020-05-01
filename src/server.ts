import App from './app';
import bodyParser from 'body-parser';
import FrontendController from './controllers/frontend.controller';
import ApiController from './controllers/api.controller';

const app = new App({
  port: Number(process.env.PORT || 5000),
  controllers: [
    new FrontendController(),
    new ApiController()
  ],
  middlewares: [
    bodyParser.json()
  ]
});

app.listen()