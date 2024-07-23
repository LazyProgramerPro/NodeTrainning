import express from 'express';
import router from './routers/index.js';

const app = express();

app.use(express.json());

//Init Rourte

app.use('', router)

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'not found' });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: 'something went wrong' });
});

export default app;

