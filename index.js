import express from 'express';
import { PORT, MongoDBURL } from '../Backend/config.js';
import mongoose from 'mongoose';

const app = express();

app.get('/', (req, res) => {
  return res.status(234).send('Inventory Management System');
});

mongoose
  .connect(MongoDBURL)
  .then(() => {
    console.log('App connected to Database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((err) => {});
