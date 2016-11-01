var React = require ('react');
var Well = require('react-bootstrap').Well;
var Backbone = require('backbone');


var HeaderContainer = React.createClass({
  handleTShirtClick: function(e){
    e.preventDefault();
    var router = this.props.router;

    router.navigate('catalog/', {trigger:true});
  },

  handleCartClick: function(e){
    e.preventDefault();
    var router = this.props.router;

    router.navigate('cart/', {trigger:true});
  },
  render:function(){
    var self = this;
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


var OrderedShirts = React.createClass({
  render:function(){
    // var orderData = JSON.parse(localStorage.getItem('order'));
    var cartItems = this.props.cart.map(function(shirt){
      return (
        <tr>
          <th scope="row">1</th>
          <td>{shirt.title}</td>
          <td>{shirt.image}</td>
          <td>@mdo</td>
          <td><button className="btn btn-success">Remove</button></td>
        </tr>
      )
    })
    return(
      <table className="table">
        <thead>
          <tr>
            <th>Shirt</th>
            <th>Size</th>
            <th>QTY</th>
            <th>Deal Expires</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems}
        </tbody>
      </table>
    )
  }
});

var CartContainer = React.createClass({
  getInitialState: function(){
    var cart = JSON.parse(localStorage.getItem('order'));
    return{
      cart: cart
    }
  },
  render: function(){

    return(
      <div className="container">
        <HeaderContainer router={this.props.router}/>
        <OrderedShirts cart={this.state.cart}/>
      </div>

    )
  }
});

module.exports = {
  CartContainer: CartContainer
}
