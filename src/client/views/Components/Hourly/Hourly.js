import React, { Component } from 'react'
import ReactAnimatedWeather from 'react-animated-weather';
import { getTime, convertIconName } from '../../Helpers/helper-functions';

export default class Hourly extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var weatherData = this.props.weatherData;
        return (
            <div>
                <h1>Hourly Forcast</h1>
                <table className="bigScreen">
                    <thead>
                        <tr>
                            <td>Date</td>
                            <td>Temp</td>
                            <td>Wind Speed</td>
                            <td>Precipitation %</td>
                            <td>Icon</td>
                        </tr>
                    </thead>
                    {weatherData ? <tbody>{hourRow(weatherData)}</tbody> : null}
                </table>
            </div>
        )
    }
}

const hourRow = (weatherData) => {
    var units = weatherData.flags.units;
    var hourLine = weatherData.hourly.data.map((val, i) => {
        let date = new Date(val.time * 1000).toDateString()
        date = date.substring(0, (date.length - 4))
        return (
            <tr key={val.time} className="weatherLine">
                <td>{getTime(val.time)} {date}</td>
                <td>{val.temperature}&#176;</td>
                <td>{val.windSpeed}{units === 'si' ? ' Km/h' : ' Mi/h'}</td>
                <td>{Math.round(val.precipProbability * 100)}%</td>
                <td>
                    <ReactAnimatedWeather
                        icon={convertIconName(val.icon)}
                        color={'#FEBF34'}
                        size={40}
                        animate={true}
                    />
                </td>
            </tr>
        )
    })
    return hourLine
}