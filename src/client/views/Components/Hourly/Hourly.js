import React, { Component } from 'react'
import ReactAnimatedWeather from 'react-animated-weather';
import { getTime, convertIconName } from '../../Helpers/helper-functions';
// import './style.css';

export default class Hourly extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    let hourLine = null;
    var weatherData = this.props.weatherData;
    if (weatherData) {
        hourLine = weatherData.hourly.data.map((val, i) => {
            let date = new Date(val.time * 1000).toDateString()
                date = date.substring(0, (date.length -4))
            return (
                <div key={val.time} className="weatherLine">
                    <p>{getTime(val.time)} {date}</p>
                    <p>{val.temperature}&#176;</p>
                    <p>Wind: {val.windSpeed}</p>
                    <p>Persip: {Math.round(val.precipProbability*100)}%</p>
                    <ReactAnimatedWeather
                        icon={convertIconName(val.icon)}
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
