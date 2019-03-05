import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactAnimatedWeather from 'react-animated-weather';

export default class Detailed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: this.props.weatherData,
            id: this.props.match.params.id,
            dayData: null,
        };
        this.getTime = this.getTime.bind(this)
        this.convertIcon = this.convertIcon.bind(this)
    }
    componentDidMount() {
        let dayData = this.state.weatherData.daily.data.filter((val) => val.time == this.state.id)[0];
        this.setState({ dayData })
    }
    convertIcon(icon) {
        return icon.toUpperCase().replace(/-/g, "_")
    }

    getTime(time){
        var date = new Date(time * 1000)
        var dateTime = date.toTimeString()
        return dateTime.substring(0,dateTime.lastIndexOf(":"))
    }

    render() {
        const dayInfo = this.state.weatherData.daily.data.filter((val) => val.time == this.state.id)[0];
        // const time = Number(dayInfo.time + "000")
        let date = new Date(dayInfo.time * 1000).toDateString()
        return (
            <Link style={{ textDecoration: 'none' }} to="/">
                <h1>{date}</h1>
                <ReactAnimatedWeather
                            icon={this.convertIcon(dayInfo.icon)}
                            color={'#FEBF34'}
                            size={60}
                            animate={true}
                        />
                        <p className="yellowP">{dayInfo.summary}</p>
                <p>(click anywhere to go back)</p>
                <div className="bigScreen detailed">
                    
                    
                    <div>
                        <p className="leadP">Wind</p>
                        <p>Wind Bearing: {dayInfo.windBearing}</p>
                        <p>Wind Gust: {dayInfo.windGust}</p>
                        <p>Wind Gust Time: {this.getTime(dayInfo.windGustTime)}</p>
                        <p>Wind Speed: {dayInfo.windSpeed}</p>
                        <hr/>
                    </div>

                    <div>
                        <p className="leadP">Temp</p>
                        <p>Temperature High: {dayInfo.temperatureHigh}</p>
                        <p>Temperature High Time: {this.getTime(dayInfo.temperatureHighTime)}</p>
                        <p>Temperature Low: {dayInfo.temperatureLow}</p>
                        <p>Temperature Low Time: {this.getTime(dayInfo.temperatureLowTime)}</p>
                        <p>Temperature Max: {dayInfo.temperatureMax}</p>
                        <p>Temperature Max Time: {this.getTime(dayInfo.temperatureMaxTime)}</p>
                        <p>Temperature Min: {dayInfo.temperatureMin}</p>
                        <p>Temperature Min Time: {this.getTime(dayInfo.temperatureMinTime)}</p>
                        <hr/>
                    </div>
                    <div>
                        <p className="leadP">Sky</p>
                        <p>Sunrise: {this.getTime(dayInfo.sunriseTime)} </p>
                        <p>Sunset: {this.getTime(dayInfo.sunsetTime)}</p>
                        <p>UV Index: {dayInfo.uvIndex}</p>
                        <p>UV Index Time: {this.getTime(dayInfo.uvIndexTime)}</p>
                        <p>Visibility: {dayInfo.visibility}</p>
                        <p>Ozone: {dayInfo.ozone}</p>
                        <hr/>
                    </div>
                    <div>
                        <p className="leadP">Precipitation</p>
                        <p>Cloud Cover: {dayInfo.cloudCover * 100}</p>
                        <p>Humidity: {dayInfo.humidity}</p>
                        <p>DewPoint: {dayInfo.dewPoint}</p>
                        <p>Precip Intensity: {dayInfo.precipIntensity}</p>
                        <p>Precip Probability: {dayInfo.precipProbability * 100}</p>
                        <p>Precip Intensity: {dayInfo.precipIntensity}</p>
                        <p>Precip Intensity Max: {dayInfo.precipIntensityMax}</p>
                        <p>Precip Intensity Max time: {this.getTime(dayInfo.precipIntensityMaxtime)}</p>
                        <p>Pressure: {dayInfo.pressure}</p>
                        <hr/>
                    </div>
                </div>
            </Link>
        );
    }
}
