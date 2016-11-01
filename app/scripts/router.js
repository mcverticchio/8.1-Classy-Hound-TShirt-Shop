var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var $ = require('jquery');

var LoginContainer = require('./components/login.jsx').LoginContainer;
var CatalogContainer = require('./components/catalog.jsx').CatalogContainer;
var CartContainer = require('./components/cart.jsx').CartContainer;

var AppRouter = Backbone.Router.extend({
  routes : {
    '': 'index',
    'catalog/': 'catalog',
    'cart/' : 'cart'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(LoginContainer, {router:this}),
      document.getElementById('app')
    );
  },
  catalog: function(){
    ReactDOM.render(
      React.createElement(CatalogContainer, {router:this}),
      document.getElementById('app')
    );
  },
  cart: function(){
    ReactDOM.render(
      React.createElement(CartContainer, {router:this}),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
