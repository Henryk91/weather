import React, { Component } from 'react';
import { DefaultDay } from '../index'

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const weatherData = this.props.weatherData;
        const dayBlocks = createDayBlocks(weatherData);
        return (
            <div className="bigScreen" id="home">
                {weatherData ?
                    <section>
                        <p>{weatherData.daily.summary}</p>
                        <p>(click day for details)</p>
                    </section> :
                    <h3>Please enter a location and press the <br /> search button or use the location button at the top left.</h3>
                }
                <main className="weekDays"> {dayBlocks ? dayBlocks : null} </main>
            </div>
        );
    }
}
const createDayBlocks = (weatherData) => {
    let dayBlock = null;
        if (weatherData) {
            dayBlock = weatherData.daily.data.map((val, i) => {
                return (
                    <DefaultDay
                        key={val.time}
                        currentWeather={weatherData.currently}
                        dailyWeather={val} 
                        id={i}
                    />
                )
            })
        }
    return dayBlock;
}