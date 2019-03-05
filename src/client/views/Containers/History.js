import React, { Component } from 'react';
import DefaultDay from './DefaultDay'

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
    e.preventDefault()
    alert("hello" + this.title.value)
  }
  render() {

    return (
      <div >
        <h2>Pick a Date</h2>
        <form>
          <input id="datePick" ref={(c) => this.title = c} type="date"></input><br />
          <button onClick={this.getDateInfo}>Submit</button>
        </form>
      </div>
    );
  }
}
