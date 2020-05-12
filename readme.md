# Project TimeLine

## 2020/05/09(Sat)

### Setting Up Development Environment

- install node, git, ide(vsc)
- initialize project

```sh
npm init -y
```

- install node modules for development

```sh
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-config-airbnb
```

- create config files

> .eslintrc.json

```json
{
  "extends": ["airbnb", "plugin:prettier/recommended"],
  "env": {
    "browser": true
  },
  "rules": {}
}
```

> .prettierrc

```json
{
  "printWidth": 120,
  "tabWidth": 2,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "semi": true,
  "useTabs": false,
  "endOfLine": "lf"
}
```

## 2020/05/10(Sun)

### Begin collaboration with the GitHub

- install express

```bash
npm i express --save
```

- create app.js

- invite a collaborator at GitHub

- install git-gui program(GitKraken)

- pull request test at GitHub

## 2020/05/11(Mon)

### Learn about express and template engine(pug)

- express static-file

```js
app.use('/static', express.static(__dirname + '/public'));
```

- install pug

```bash
npm i pug --save
```

```js
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'templates'));
app.use(express.static(path.join(__dirname, 'templates')));
```

- install nodemon for hot-reloading

> package.json

```json
  "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js"
  },
```

```bash
$ npm i -D nodemon
$ npm run dev

> perfect-voice@1.0.0 dev D:\Project
> nodemon src/app.js

[nodemon] 2.0.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/app.js`
```

## 2020/05/12(Tue)

### Still learn about express and template engine(pug)

- express router

```js
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function (req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds');
});

module.exports = router;
```

```js
var birds = require('./birds');
...
app.use('/birds', birds);
```

- install postman on chrome extension
- project idea test(https://teachablemachine.withgoogle.com/)
