import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";
import { History, Home, Detailed } from './index';

export default class NavLinks extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const weatherData = this.props.weatherData;
    return (
      <div >
        <div className="bigScreen" id="links">

            <Link className="yellowLink" to="/" title="Weather By Week">This Week</Link>
            <Link className="yellowLink" to="/history" title="Weather By Day">Select By Day</Link>
  
        </div>

        <Route
          exact path='/'
          render={(props) => <Home {...props} weatherData={weatherData} />}
        />
        <Route
          exact path='/detailed/:id'
          render={(props) => <Detailed {...props} weatherData={weatherData} />}
        />
        <Route exact path="/history" 
        render={(props) => <History {...props} weatherData={weatherData}/>} />
      </div>
    )
  }
}
