var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var TemplateContainer = require('./components/template.jsx').TemplateContainer;


var AppRouter = Backbone.Router.extend({
  routes : {
    '': 'index',
    'cart/' : 'cart'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(TemplateContainer ,{router:this}),
      document.getElementById('app')
    );
  },
});


var router = new AppRouter();

module.exports = router;
