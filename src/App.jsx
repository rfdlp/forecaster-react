import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import SearchBox from './SearchBox';

class App extends Component {
  
  render(){
    return(
      <div>
        <Navbar />
        <div className="container">
          <Row>
            <Col md={8} mdOffset={2} sm={12}>
              <SearchBox />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default App;
