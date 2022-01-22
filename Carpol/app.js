var express = require('express');
var path = require('path');
const cookieParser = require("cookie-parser");
var sessions = require('cookie-session');
var logger = require('morgan');
var cors = require('cors');
const PORT = 4000;
const oneDay = 1000 * 60 * 60 * 24;
const app = express();
var loginRouter = require('./routes/login');
var indexRouter = require('./routes/index');
var productoRouter = require('./routes/producto');
app.listen(PORT, () => console.log(`Server Running at port ${PORT}`));
app.use(sessions({
  secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
  saveUninitialized:true,
  cookie: { maxAge: oneDay },
  resave: false
}));
app.use(express.json());
app.use(cors({credentials: true, origin: 'http://localhost:4200'}));
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//serving public file
app.use(express.static(__dirname));
app.use('/login', loginRouter);
app.use('/index', indexRouter);
app.use('/producto', productoRouter);
module.exports = app;
