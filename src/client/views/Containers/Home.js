import React, { Component } from 'react';
import DefaultDay from './DefaultDay'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: null,
            searching: false
        };
    }

    render() {
        let dayBlock = null;
        if (this.props.weatherData) {
            dayBlock = this.props.weatherData.daily.data.map((val) => {
                return (
                    <div key={val.time} >
                        <DefaultDay data={val} />
                    </div>
                )
            })
        }

        return (
            <div className="bigScreen" id="home">
            
                {this.props.weatherData ? <div><p>{this.props.weatherData.daily.summary}</p>
                 <p>(click day for details)</p></div> : <h3>Please enter a location</h3>}
                <div className="weekDays">{dayBlock ? dayBlock : null}</div>
            </div>
        );
    }
}
