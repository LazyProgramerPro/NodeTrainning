// server.js
import app from './src/app.js';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import morgan from 'morgan';
dotenv.config();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const port = process.env.PORT || 5100;

try {
  console.log("process.env.MONGO_URL:",process.env.MONGO_URL)
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}