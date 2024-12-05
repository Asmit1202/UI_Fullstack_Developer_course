var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var validateRouter = require("./routes/validateUserCredentials");
var ProductRouter = require("./routes/getProductDetails");
var signupRouter = require('./routes/singupUserdetails');
var mensProductRouter = require('./routes/mensProductDetails');
var womensProductRouter = require('./routes/womensProductDetails');
var addNewProductRouter = require('./routes/addNewProduct');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/validate/userCredentials", validateRouter);
app.use("/load/productDetails", ProductRouter);
app.use('/new/user/signup', signupRouter);
app.use('/load/mensProductDetails', mensProductRouter);
app.use('/load/womensProductDetails', womensProductRouter);
app.use('/add/newProductDetails', addNewProductRouter)

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
