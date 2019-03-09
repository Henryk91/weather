import React, { Component } from 'react';
import { DefaultDay } from '../index'

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let dayBlock = null;
        const weatherData = this.props.weatherData;
        if (weatherData) {
            dayBlock = weatherData.daily.data.map((val, i) => {
                return (
                    <DefaultDay
                        key={val.time}
                        currently={weatherData.currently}
                        data={val} id={i}
                    />
                )
            })
        }
        return (
            <div className="bigScreen" id="home">
                {weatherData ?
                    <section>
                        <p>{weatherData.daily.summary}</p>
                        <p>(click day for details)</p>
                    </section> :
                    <h3>Please enter a location</h3>
                }
                <main className="weekDays"> {dayBlock ? dayBlock : null} </main>
            </div>
        );
    }
}
