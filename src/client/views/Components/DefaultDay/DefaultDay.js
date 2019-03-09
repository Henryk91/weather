import React, { Component } from 'react'
import { Link } from "react-router-dom";
import ReactAnimatedWeather from 'react-animated-weather';
import { convertIconName } from '../../Helpers/helper-functions';

export default class DefaultDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            currently: this.props.currently
        }
    }
    render() {
        const data = this.state.data
        const currently = this.state.currently
        let date = new Date(data.sunriseTime * 1000).toDateString()
        date = date.substring(0, (date.length - 4))
        return (
            <Link style={{ textDecoration: 'none' }} to={`/detailed/${data.time}`}>
                <section key={data.time} className="dayBox blueHover">
                    {this.props.id === 0 ?
                        <p className="leadP">Today</p> :
                        <p className="leadP">{date}</p>
                    }
                    <ReactAnimatedWeather
                        icon={convertIconName(data.icon)}
                        color={'#FEBF34'}
                        size={40}
                        animate={true}
                    />
                    {this.props.id === 0 ?
                        <p>Current Temp: {currently.temperature}&#176;</p> :
                        null
                    }
                    <p>{Math.round(data.temperatureMin)}&#176;/{Math.round(data.temperatureMax)}&#176;</p>
                    <p>Rain: {Math.round(data.precipProbability * 100)}%</p>
                </section>
            </Link >
        )
    }
}