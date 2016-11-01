var React = require('react');
var $ = require('jquery');

var LoginContainer = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    var user = $('.userForm').val();
    localStorage.setItem('user', JSON.stringify(user));

    var router = this.props.router;
    router.navigate('catalog/', {trigger:true});
  },
  render: function(){
    return (
      <div className="container">
      <h1>Welcome to Classy Hounds T-Shirts!  Please Login to view merchandise</h1>
      <form onSubmit={this.handleSubmit} className="navbar-form navbar-left" role="search">
        <div className="form-group">
          <input type="text" className="form-control userForm" id="user" placeholder="Username" />
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
      </div>
    )
  }
});

module.exports = {
  LoginContainer: LoginContainer
}
