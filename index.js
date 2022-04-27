var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { route } = require('express/lib/application');
const app = express()
const port = 3000
var router = express.Router();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var indexRouter = require('./routes/index');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.get('/home', (req, res) => {
    //   res.send('Hello World!')
    res.render('home');
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})