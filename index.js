import express from 'express';
import { PORT } from '../Backend/config.js';

const app = express();

app.get('/', (req, res) => {
  return res.status(234).send('Inventory Management System');
});

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});
