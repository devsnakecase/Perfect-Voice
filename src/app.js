const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const routes = require('./routes');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'pages'));
app.use(express.static(path.join(__dirname, 'pages')));

app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'styles')));
app.use('/static', express.static(path.join(__dirname + '/../public')));

app.get('/', function (req, res) {
  res.render('index');
});

Object.keys(routes).forEach((routeName) => {
  app.use(`/${routeName}`, routes[routeName]);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
