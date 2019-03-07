import React, { Component } from 'react'
import ReactAnimatedWeather from 'react-animated-weather';

export default class Hourly extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: this.props.weatherData,

        };
        this.getTime = this.getTime.bind(this)
        this.convertIcon = this.convertIcon.bind(this)
    }

    convertIcon(icon) {
        return icon.toUpperCase().replace(/-/g, "_")
    }

    getTime(time) {
        var date = new Date(time * 1000)
        var dateTime = date.toTimeString()
        return dateTime.substring(0, dateTime.lastIndexOf(":"))
    }

    render() {
    let hourLine = null;
    if (this.state.weatherData) {
        hourLine = this.state.weatherData.hourly.data.map((val, i) => {
            let date = new Date(val.time * 1000).toDateString()
                date = date.substring(0, (date.length -4))
            return (
                <div key={val.time} className="weatherLine">
                    <p>{this.getTime(val.time)} {date}</p>
                    <p>{val.temperature}&#176;</p>
                    <p>Wind: {val.windSpeed}</p>
                    <p>Persip: {Math.round(val.precipProbability*100)}%</p>
                    <ReactAnimatedWeather
                        icon={this.convertIcon(val.icon)}
                        color={'#FEBF34'}
                        size={40}
                        animate={true}
                    />
                </div>
            )
        })
    }
    return (
      <div>
        <h1>Hourly Forcast</h1>
        {hourLine}
      </div>
    )
  }
}
