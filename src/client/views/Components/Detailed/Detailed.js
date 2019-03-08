import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactAnimatedWeather from 'react-animated-weather';
import { Hourly } from '../index';
// import './style.css';
import { getTime, convertIconName } from '../../Helpers/helper-functions';


export default class Detailed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dayData: null,
        };
    }

    render() {
        const weatherData = this.props.weatherData
        // console.log(weatherData)
        let dayInfo = this.state.dayData;
        if (this.props.match) {
            dayInfo = weatherData.daily.data.filter((val) => val.time == this.props.match.params.id)[0];
        } else {
            dayInfo = weatherData.daily.data[0]
        }
        let date = new Date(dayInfo.time * 1000)

        return (
            <Link style={{ textDecoration: 'none' }} to="/">
                <h1>{date.toDateString()}</h1>
                <ReactAnimatedWeather 
                    className="detailsIcons"
                    icon={convertIconName(weatherData.currently.icon)}
                    color={'#FEBF34'}
                    size={60}
                    animate={true}
                />

                {this.props.match ? <p className="yellowP">Current Temp: {Math.round(weatherData.currently.temperature)}&#176;</p> : null}
                <p className="yellowP">{dayInfo.summary}</p>
                {this.props.match ? <iframe src={`https://maps.darksky.net/@temperature,${date.toISOString().slice(0,10)},22,${weatherData.latitude},${weatherData.longitude},7?defaultUnits=_c`}></iframe> : null }
                
                <p>(click anywhere to go back)</p>
                <div className="bigScreen detailed">
                    <div>
                        <p className="leadP">Wind</p>
                        <p>Bearing: {dayInfo.windBearing}</p>
                        <p>Gust: {dayInfo.windGust}</p>
                        <p>Gust Time: {getTime(dayInfo.windGustTime)}</p>
                        <p>Speed: {dayInfo.windSpeed}</p>
                    </div>
                    <div>
                        <p className="leadP">Sky</p>
                        <p>Sunrise: {getTime(dayInfo.sunriseTime)} </p>
                        <p>Sunset: {getTime(dayInfo.sunsetTime)}</p>
                        <p>UV Index: {dayInfo.uvIndex}</p>
                        <p>UV Index Time: {getTime(dayInfo.uvIndexTime)}</p>
                        <p>Visibility: {dayInfo.visibility}</p>
                        <p>Ozone: {dayInfo.ozone}</p>
                    </div>
                    <div>
                        <hr />
                        <p className="leadP">Temp</p>
                        <p>High: {dayInfo.temperatureHigh}</p>
                        <p>High Time: {getTime(dayInfo.temperatureHighTime)}</p>
                        <p>Low: {dayInfo.temperatureLow}</p>
                        <p>Low Time: {getTime(dayInfo.temperatureLowTime)}</p>
                        <p>Max: {dayInfo.temperatureMax}</p>
                        <p>Max Time: {getTime(dayInfo.temperatureMaxTime)}</p>
                        <p>Min: {dayInfo.temperatureMin}</p>
                        <p>Min Time: {getTime(dayInfo.temperatureMinTime)}</p>
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
                        <p>Intensity Max time: {getTime(dayInfo.precipIntensityMaxtime)}</p>
                        <p>Pressure: {dayInfo.pressure}</p>
                    </div>
                </div>
                {weatherData ? <div><Hourly weatherData={weatherData}/></div> : null}
            </Link>
        );
    }
}
