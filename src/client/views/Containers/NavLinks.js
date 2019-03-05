import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";
import { History, Home, Detailed } from './index';

export default class NavLinks extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div >
        <div className="bigScreen" id="links">

            <Link className="yellowLink" to="/">Week</Link>
            <Link className="yellowLink" to="/history">History</Link>
  
        </div>

        <Route
          exact path='/'
          render={(props) => <Home {...props} weatherData={this.props.weatherData} />}
        />
        <Route
          exact path='/detailed/:id'
          render={(props) => <Detailed {...props} weatherData={this.props.weatherData} />}
        />
        <Route exact path="/history" render={(props) => <History />} />
      </div>
    )
  }
}
