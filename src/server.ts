import 'dotenv/config';
import App from './app';
import { IndexRoute } from './routes/';
import validateEnv from './utils/validateEnv';

validateEnv();

const app = new App([
  new IndexRoute(),
]);

app.listen();
