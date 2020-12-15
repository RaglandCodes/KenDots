const path = require('path');
import express from 'express';
const pug = require('pug');

import homeView from './admin/home';
import dotPageView from './dots/dotPage';

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../client/templates'));

const PORT = 2021;

app.get('/', homeView);
app.get('/dot/:id', dotPageView);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
