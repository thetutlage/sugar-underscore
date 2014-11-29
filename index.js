var app = require('sugar-angularjs').module('underscore',[]);
var underscore = require('./src/underscore.min.js');
window._ = underscore;
app.service('_',function() {
  return window._;
});
