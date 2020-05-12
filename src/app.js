const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'templates'));
app.use(express.static(path.join(__dirname, 'templates')));

app.use('/static', express.static(__dirname + '/public'));

const birds = require('./router/birds');
app.use('/birds', birds);

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: `a + b = ${parseInt(req.query.a) + parseInt(req.query.b)}` });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
