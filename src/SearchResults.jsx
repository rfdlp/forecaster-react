import React, { Component } from 'react';
import Today from './Today';

class SearchResults extends Component {
  render(){
    const { json } = this.props;
    return(
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-success">
            <div className="panel-body">
              <Today today={json.list.first}></Today>

              <div className="row">
                {/* <% @data["list"][1..@data["list"].length].each_slice(4) do |slice| %> */}

                  <div className="col-sm-12 col-md-3">
                    <div className="panel panel-success day-trigger" id="trigger_DT">
                      <div className="panel-body">
                        <h5 className="text-center text-success">
                          <a href="#go" className="text-success go-to-day" data-goto="DT">DATE></a>
                        </h5>
                        <p className="text-center">
                          <img src="ICON" alt="Icon" />
                        </p>
                        <h4>TEMP - MAIN</h4>
                        <span className="label label-primary">DESC</span>
                        <small>MIN min</small>
                      </div>
                    </div>
                  </div>

                {/* <% end %> */}
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchResults;
