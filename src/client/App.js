
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { History, Home, Detailed, SearchBar } from './views/Components/index';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: '',
    }
    this.setWeatherData = this.setWeatherData.bind(this)
  }

  setWeatherData(val) {
    this.setState({ weatherData: val.weatherData })
  }
  render() {
    const weatherData = this.state.weatherData;
    return (
      <Router>
        <div>
          <header>
            <SearchBar set={this.setWeatherData} />
            <nav className="bigScreen" id="links">
              <Link className="yellowLink" to="/" title="Weather By Week">This Week</Link>
              <Link className="yellowLink" to="/history" title="Weather By Day">Select By Day</Link>
            </nav>
          </header>
          <Route
            exact path='/'
            render={(props) => <Home {...props} weatherData={weatherData} />}
          />
          <Route
            exact path='/detailed/:id'
            render={(props) => <Detailed {...props} weatherData={weatherData} />}
          />
          <Route exact path="/history"
            render={(props) => <History {...props} weatherData={weatherData} />}
          />
          <Link to="https://darksky.net/poweredby/" target="_blank">
            <img id="darkSkyLogo" src="https://darksky.net/dev/img/attribution/poweredby-oneline-darkbackground.png"
              alt="powered by darksky" />
          </Link>
        </div>
      </Router>
    )
  }
}
