import React, { Component } from 'react';
import { DefaultDay } from '../index'
// import './style.css';

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
                    <div key={val.time} >
                        <DefaultDay currently={weatherData.currently} data={val} id={i} />
                    </div>
                )
            })
        }

        return (
            <div className="bigScreen" id="home">
                {weatherData ? <div><p>{weatherData.daily.summary}</p>
                    <p>(click day for details)</p> </div> : <h3>Please enter a location</h3>}
                <div className="weekDays"> {dayBlock ? dayBlock : null} </div>
            </div>
        );
    }
}
