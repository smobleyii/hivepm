var express = require('express');
var app = express();

// setup handlebars view engine
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next){
  res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1';
  next();
});

//Set application routes
app.get('/', function(req, res){
  res.render('home');
});

app.get('/about', function(req, res){
  res.render('about', {
    pageTestScript: '/qa/tests-about.js'
  });
});

app.get('/services/hivepm-services', function(req, res){
  res.render('services/hivepm-services');
});

app.get('/services/early-signup', function(req, res){
  res.render('services/early-signup');
});

//404 page
app.use(function(req, res){
  res.status(404);
  res.render('404');
});

//500 page
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' +
    app.get('port') + ';press Ctrl-C to terminate.');
});
