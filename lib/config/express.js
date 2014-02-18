'use strict';

var express = require('express'),
path = require('path');

module.exports = function(app) {
  var rootPath = path.normalize(__dirname + '/../..');


  app.configure('development', function(){
    app.use(require('connect-livereload')());


    app.use(express.errorHandler());
    app.set('views', rootPath + '/app/views');
  });

  app.configure(function(){
    app.use('/docs', express.static(path.join(rootPath, 'docs')));
    // app.engine('ejs', engine);
    // app.set('view engine', 'ejs');
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());

    // Router needs to be last
    app.use(app.router);
  });
};