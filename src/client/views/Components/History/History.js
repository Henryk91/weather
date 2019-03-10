import React, { Component } from 'react';
import { Detailed } from '../index';
import { getWeatherByDate } from '../../Helpers/requests'

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      searching: false
    };
    this.getDateInfo = this.getDateInfo.bind(this)
  }
  getDateInfo(e) {
    e.preventDefault()
    const title = this.title.value

    if (title) {
      const weatherData = this.props.weatherData;

      if (weatherData) {
        this.setState({ search: true, weatherData: null })
        getWeatherByDate(weatherData, title, (data) => {

          if (data.latitude) {
            this.setState({ search: false, weatherData: data })
          } else {
            this.setState({ search: false })
            alert("Comunication error please try again in a few minutes.")
          }
        })
      } else {
        alert("Please add location then press search or press the geo location button.")
      }
    } else {
      alert("Please add a date.")
    }
  }

  render() {
    const weatherData = this.state.weatherData
    return (
      <form>
        <h2>Pick a Date</h2>
        <input
          id="datePick"
          ref={(c) => this.title = c}
          type="date"
          required="required">
        </input><br />
        <button id="dateSubmit" onClick={this.getDateInfo}>Submit</button>
        {weatherData ? <Detailed weatherData={weatherData} /> : null}
        {this.state.search ? <div className="loader"></div> : null}
      </form>
    );
  }
}
