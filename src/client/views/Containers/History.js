import React, { Component } from 'react';
import DefaultDay from './DefaultDay'
import { Detailed } from './index';

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      searching: false
    };
    this.getDateInfo = this.getDateInfo.bind(this)
    // this.getData = this.getData.bind(this);
  }
  getDateInfo(e) {
    const weatherData = this.props.weatherData;
    e.preventDefault()
    this.setState({ search: true, weatherData: null })
    fetch(`/api/weather?coordinates=${weatherData.latitude},${weatherData.longitude},${this.title.value}T12:00:00`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ search: false, weatherData: data })
      });
    console.log("hello" + this.title.value + " " + weatherData.latitude + " " + weatherData.longitude)
  }
  render() {

    return (
      <div >
        <h2>Pick a Date</h2>
        <form>
          <input id="datePick" ref={(c) => this.title = c} type="date" required="required"></input><br />
          <button onClick={this.getDateInfo}>Submit</button>
          {this.state.search ? <div className="loader"></div> : null}
          {/* <Link style={{ textDecoration: 'none' }} to={`/detailed/${data.time}`}></Link> */}
          {this.state.weatherData ? <Detailed weatherData={this.state.weatherData} /> : null}
        </form>
      </div>
    );
  }
}
