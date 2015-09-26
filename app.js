var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var hbs = require('express-hbs');
var compress = require('compression');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/partials',
    defaultLayout: __dirname + '/views/layout'
}));
app.use(compress());
app.set('view engine', 'hbs');


app.use(favicon(__dirname + '/public/favicon.ico'));

var cacheTime = 60*60*24;
var staticOptions = {maxAge: cacheTime};
app.use(express.static(path.join(__dirname, 'public'), staticOptions));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components'), staticOptions));

//routes
require('./routes/index')(app);
require('./routes/projects')(app);
require('./routes/contact')(app);
require('./routes/resume')(app);
require('./routes/blog')(app);
require('./routes/api')(app);

//helpers
hbs.registerAsyncHelper('years', function (from, cb) {
    var year = new Date().getFullYear();
    cb(year - from);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
//if (app.get('env') === 'development') {
//    app.use(function(err, req, res, next) {
//        res.status(err.status || 500);
//        res.render('error', {
//            message: err.message,
//            error: err
//        });
//    });
//}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
