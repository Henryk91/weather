import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactAnimatedWeather from 'react-animated-weather';
import { Hourly } from './index';

export default class Detailed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: this.props.weatherData,
            // id: this.props.match.params.id,
            dayData: null,
        };
        this.getTime = this.getTime.bind(this)
        this.convertIcon = this.convertIcon.bind(this)
    }
    componentDidMount() {

        let dayData;
        if (this.props.match !== undefined) {
            dayData = this.state.weatherData.daily.data.filter((val) => val.time == this.props.match.params.id)[0];
        } else {
            dayData = this.state.weatherData.daily.data[0]
        }
        this.setState({ dayData })
        console.log(this.state.weatherData)
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


        const data = this.state.weatherData
        
        
        let dayInfo;
        if (this.props.match) {
            dayInfo = this.state.weatherData.daily.data.filter((val) => val.time == this.props.match.params.id)[0];
        } else {
            dayInfo = this.state.weatherData.daily.data[0]
        }
        let date = new Date(dayInfo.time * 1000)
        console.log(date)
        return (
            <Link style={{ textDecoration: 'none' }} to="/">
                <h1>{date.toDateString()}</h1>
                <ReactAnimatedWeather 
                    className="detailsIcons"
                    icon={this.convertIcon(data.currently.icon)}
                    color={'#FEBF34'}
                    size={60}
                    animate={true}
                />
                {/* https://maps.darksky.net/@temperature,2019-3-15,22,-25.428,30.100,8 */}
                {this.props.match ? <p className="yellowP">Current Temp: {Math.round(data.currently.temperature)}&#176;</p> : null}
                <p className="yellowP">{dayInfo.summary}</p>
                {this.props.match ? <iframe src={`https://maps.darksky.net/@temperature,${date.toISOString().slice(0,10)},22,${data.latitude},${data.longitude},7?defaultUnits=auto`}></iframe> : null }
                <p>(click anywhere to go back)</p>
                {/* <div id="quickDay">
                    <div>
                        <p>Morning</p>
                    </div>
                    <div>
                        <p>Noon</p>
                    </div>
                    <div>
                        <p>Night</p>
                    </div>
                </div> */}
                <div className="bigScreen detailed">
                    <div>
                        <p className="leadP">Wind</p>
                        <p>Bearing: {dayInfo.windBearing}</p>
                        <p>Gust: {dayInfo.windGust}</p>
                        <p>Gust Time: {this.getTime(dayInfo.windGustTime)}</p>
                        <p>Speed: {dayInfo.windSpeed}</p>
                    </div>
                    <div>
                        <p className="leadP">Sky</p>
                        <p>Sunrise: {this.getTime(dayInfo.sunriseTime)} </p>
                        <p>Sunset: {this.getTime(dayInfo.sunsetTime)}</p>
                        <p>UV Index: {dayInfo.uvIndex}</p>
                        <p>UV Index Time: {this.getTime(dayInfo.uvIndexTime)}</p>
                        <p>Visibility: {dayInfo.visibility}</p>
                        <p>Ozone: {dayInfo.ozone}</p>
                    </div>

                    <div>
                        <hr />
                        <p className="leadP">Temp</p>
                        <p>High: {dayInfo.temperatureHigh}</p>
                        <p>High Time: {this.getTime(dayInfo.temperatureHighTime)}</p>
                        <p>Low: {dayInfo.temperatureLow}</p>
                        <p>Low Time: {this.getTime(dayInfo.temperatureLowTime)}</p>
                        <p>Max: {dayInfo.temperatureMax}</p>
                        <p>Max Time: {this.getTime(dayInfo.temperatureMaxTime)}</p>
                        <p>Min: {dayInfo.temperatureMin}</p>
                        <p>Min Time: {this.getTime(dayInfo.temperatureMinTime)}</p>
                    </div>

                    <div>
                        <hr />
                        <p className="leadP">Precipitation</p>
                        <p>Cloud Cover: {dayInfo.cloudCover * 100}</p>
                        <p>Humidity: {dayInfo.humidity}</p>
                        <p>DewPoint: {dayInfo.dewPoint}</p>
                        <p>Intensity: {dayInfo.precipIntensity}</p>
                        <p>Probability: {Math.round(dayInfo.precipProbability * 100)}%</p>
                        <p>Intensity Max: {dayInfo.precipIntensityMax}</p>
                        <p>Intensity Max time: {this.getTime(dayInfo.precipIntensityMaxtime)}</p>
                        <p>Pressure: {dayInfo.pressure}</p>
                    </div>
                </div>

                {data ? <div><Hourly weatherData={this.state.weatherData}/></div> : null}
            </Link>
        );
    }
}
