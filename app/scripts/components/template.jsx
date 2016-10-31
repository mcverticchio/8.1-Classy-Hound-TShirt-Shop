var React = require('react');
var Well = require('react-bootstrap').Well;

var TemplateContainer = React.createClass({
  render: function(){
    return (
      <div className="container">
        <Well>
          <h6>Classy Hound</h6>
          <img src="#" />
          <button className="tShirts">T-shirts</button>
          <button className="Cart">Cart</button>
        </Well>
      </div>
    )
  }
})

module.exports = {
  TemplateContainer: TemplateContainer
};
