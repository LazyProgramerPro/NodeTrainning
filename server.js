// server.js
import app from './src/app.js';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
dotenv.config();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});