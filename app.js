const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const odaIslemleriRouter = require('./routes/odaIslemleri');
const musteriIslemleriRouter = require('./routes/musteriIslemleri');
const deneme = require('./routes/deneme');

// Müşteri İşlemleri 
const musteriEkle = require('./routes/musteriIslemleri');
//Oda İşlemleri
const odaEkle = require('./routes/odaIslemleri');

const app = express();

// DB Connection
const db=require('./helper/db.js')();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/oda', odaIslemleriRouter);
app.use('/musteri', musteriIslemleriRouter);
app.use('/deneme', deneme);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
