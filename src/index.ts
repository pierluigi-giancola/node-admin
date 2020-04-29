import path from 'path';
import dotenv from 'dotenv-safe';
import express from 'express';
const app = express();

dotenv.config({
  path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`),
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
