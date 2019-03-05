import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { History, SearchBar, NavLinks } from './views/Containers/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: '',
    }
    this.setWeatherData = this.setWeatherData.bind(this)
  }

  
  setWeatherData(val){
    
    this.setState({weatherData: val.weatherData})
    
    console.log(this.state.weatherData.daily.data)
  }
  render() {
    return (
      <Router>
        <nav>
          <SearchBar set={this.setWeatherData} />
          <NavLinks weatherData={this.state.weatherData} />

        </nav>
      </Router>
    );
  }
}


export default App;