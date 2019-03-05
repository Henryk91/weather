import React, { Component } from 'react'
import { Link } from "react-router-dom";
import ReactAnimatedWeather from 'react-animated-weather';



export default class DefaultDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
        this.convertIcon = this.convertIcon.bind(this)
    }

    convertIcon(icon) {
        return icon.toUpperCase().replace(/-/g, "_")
    }
    render() {
        const data = this.state.data
        const time = Number(this.state.data.sunriseTime + "000")
        let date = new Date(time).toDateString()
        date = date.substring(0, date.indexOf(201))
        return (
            <div>
                <Link style={{ textDecoration: 'none' }} to={`/detailed/${data.time}`}>
                    <div key={data.time} className="dayBox blueHover" >
                        <p className="leadP">{date}</p>
                        <ReactAnimatedWeather
                            icon={this.convertIcon(data.icon)}
                            color={'#FEBF34'}
                            size={40}
                            animate={true}
                        />
                        <p>{Math.round(data.temperatureMin)}&#176;/{Math.round(data.temperatureMax)}&#176;</p>
                        <p>Rain: {Math.round(data.precipProbability*100)}%</p>
                    </div>
                </Link>
            </div>
        )
    }
}