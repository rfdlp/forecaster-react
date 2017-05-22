import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: ""
    }
  }

  render(){
    return(
      <div className="navbar navbar-default navbar-static-top">
        <div className="container">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">The Forecaster</a>
          <div className="navbar-collapse collapse navbar-responsive-collapse">
            <ul className="nav navbar-nav">
              <li><a href="#">Home</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
