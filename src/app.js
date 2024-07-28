import express from 'express';
import errorHandlerMiddleware from './middlewares/errors.middleware.js';
import router from './routers/index.js';

const app = express();

// MIDDLEWARE
app.use(express.json());

// Init Rourte

app.use('', router)

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});


app.use(errorHandlerMiddleware);


export default app;

