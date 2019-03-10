import React, { Component } from 'react'
import { Link } from "react-router-dom";
import ReactAnimatedWeather from 'react-animated-weather';
import { convertIconName } from '../../Helpers/helper-functions';

export default class DefaultDay extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const dailyWeather = this.props.dailyWeather
        const currentWeather = this.props.currentWeather
        let date = new Date(dailyWeather.sunriseTime * 1000).toDateString()
        date = date.substring(0, (date.length - 4))
        return (
            <Link style={{ textDecoration: 'none' }} to={`/detailed/${dailyWeather.time}`}>
                <section key={dailyWeather.time} className="dayBox blueHover">
                    {this.props.id === 0 ?
                        <p className="leadP">Today</p> :
                        <p className="leadP">{date}</p>
                    }
                    <ReactAnimatedWeather
                        icon={convertIconName(dailyWeather.icon)}
                        color={'#FEBF34'}
                        size={40}
                        animate={true}
                    />
                    {this.props.id === 0 ?
                        <p>Current Temp: {currentWeather.temperature}&#176;</p> :
                        null
                    }
                    <p>
                        {Math.round(dailyWeather.temperatureMin)}&#176;/
                        {Math.round(dailyWeather.temperatureMax)}&#176;
                    </p>
                    <p>Rain: {Math.round(dailyWeather.precipProbability * 100)}%</p>
                </section>
            </Link >
        )
    }
}