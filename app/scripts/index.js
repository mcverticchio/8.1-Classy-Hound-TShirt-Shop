// console.log("Hello World!");
var $ = require('jquery');
var Backbone = require('backbone');
require('./router');

$(function(){
  Backbone.history.start();
});
