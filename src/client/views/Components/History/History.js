import React, { Component } from 'react';
import { Detailed } from '../index';
// import './style.css';

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
    
    if (this.title.value) {
      const weatherData = this.props.weatherData;

      if(weatherData){
      this.setState({ search: true, weatherData: null })
      fetch(`/api/weather?coordinates=${weatherData.latitude},${weatherData.longitude},${this.title.value}T12:00:00`)
        .then(res => res.json())
        .then(data => {
 
          this.setState({ search: false, weatherData: data })
        });
      } else {
        alert("Please add location then press search or press the geo location button")
      }
    } else {
      alert("Please Add A Date")
    }

  }
  render() {

    return (
      <div >
        <h2>Pick a Date</h2>
        <form>
          <input id="datePick" ref={(c) => this.title = c} type="date" required="required"></input><br />
          <button id="dateSubmit" onClick={this.getDateInfo}>Submit</button>
          {this.state.search ? <div className="loader"></div> : null}
          {this.state.weatherData ? <Detailed weatherData={this.state.weatherData} /> : null}
        </form>
      </div>
    );
  }
}
