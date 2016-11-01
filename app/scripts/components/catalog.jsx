var React = require('react');
var Well = require('react-bootstrap').Well;
var Backbone = require('backbone');
var shirtCollection = require('../data/data.js').shirtCollection;


var HeaderContainer = React.createClass({
  handleTShirtClick: function(e){
    e.preventDefault();
    var router = this.props.router;

    router.navigate('#catalog/', {trigger:true});
  },
  handleCartClick: function(e){
    e.preventDefault();
    var router = this.props.router;
    console.log(router);

    router.navigate('#cart/', {trigger:true});
  },
  render:function(){
    return (
      <Well>
        <h6 className="companyTitle">Classy Hound</h6>
        <img className="logo" src="http://rlv.zcache.com/black_forest_hound_dog_cartoon_classic_round_sticker-r909e69a2605a43a1998dc471ab4d4177_v9waf_8byvr_324.jpg" />
        <span onClick={this.handleTShirtClick} className="tShirts">T-shirts</span>
        <span onClick={this.handleCartClick} className="cart">Cart</span>
      </Well>
    )
  }
});


var CatalogListing = React.createClass({
  render: function(){
    var self = this;
    var shirts = shirtCollection.map(function(shirt){
    return(
      <div key={shirt.id} className="thumbnail">
        <img src={shirt.image} alt="..." />
          <div className="caption">
            <h3>{shirt.title}</h3>
            <p>...</p>
            <a onClick={function(){self.props.addShirt(shirt)}} className="btn btn-primary" role="button">Add to Cart</a>
          </div>
      </div>
    );
});
    return (
      <div className="row">
        <div className="col-sm-6 col-md-4 itemSquare">
          {shirts}
        </div>
      </div>
    );
  }
});

var CatalogContainer = React.createClass({
  getInitialState: function(){
    var cart = [];
    return{
      cart: cart
    }
  },

  addShirt: function(shirt){
    this.state.cart.push(shirt);
    localStorage.setItem('order', JSON.stringify(this.state.cart));

  },

  render: function(){
    console.log(localStorage.getItem('user'));
    var user = localStorage.getItem('user');
    return (
      <div className="container">
        <HeaderContainer router={this.props.router}/>
        <h1>Hello, {user}!</h1>
        <CatalogListing addShirt={this.addShirt}/>
      </div>
    )
  }
})


module.exports = {
  CatalogContainer: CatalogContainer
}
