var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var logger = require('morgan');
var cors = require("cors");

var catsAPIRouter = require("./routes/catsAPI");
var catsDBRouter = require("./routes/catsDB")
var indexRouter = require("./routes/index")

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/catsAPI", catsAPIRouter);
app.use("/catsDB", catsDBRouter);
app.use("/", indexRouter);

mongoose.connect("mongodb://mongodb:27017/test");
mongoose.connection.on("error", error => {
    console.log("Database connection error:", error);
});
mongoose.connection.once("open", () => {
    console.log("Connected to Database!");
});

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err.message);
});

app.listen(9000, function () {
  console.log('Listening to Port 9000');
});
