import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import SearchResults from './SearchResults'

class SearchBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
      json: null
    }
  }

  async search(event){
    event.preventDefault();
    const BASE_URL = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
    const FETCH_URL = BASE_URL + this.state.query + "&units=metric&cnt=16&appid=ba68e2c43979c6eabbd33ff8e32c0611"

    const response = await fetch(FETCH_URL);
    const json = await response.json();
    
    this.setState({ json });
  }

  render(){
    return(
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">Search</div>
          <div className="panel-body">
            <form action="#" onSubmit={event => this.search(event)}>
              <Row>
                <Col sm={12} md={9}>
                  <input  type="text"
                          className="form-control"
                          placeholder="Dublin"
                          onChange={event => this.setState({ query: event.target.value }) }
                          onKeyPress={event => event.key === "Enter" ? this.search(event) : false}
                          name="query" />
                </Col>
                <Col sm={12} md={3}>
                  <button type="submit" className="form-control">Search</button>
                </Col>
              </Row>
            </form>
          </div>
        </div>
        {
          this.state.json !== null
          ?
            <SearchResults json={this.state.json}></SearchResults>
          :
            <div></div>
        }
      </div>
    )
  }
}

export default SearchBox;
