import React, { Component } from 'react'
import { getCoordinatesFromName, getGeoloc, getWeather } from '../../Helpers/requests'
export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: false,
        };
        this.getCoordinates = this.getCoordinates.bind(this);
        this.useGeoloc = this.useGeoloc.bind(this)
    }
    setRecData(data) {
        this.setState({ search: false })
        if (data.currently) {
            this.props.set({ weatherData: data })
        } else {
            alert("Comunication error please try again in a few minutes.")
        }
    }
    getCoordinates() {
        var title = this.title.value;
        if (title) {
            this.setState({ search: true })
            getCoordinatesFromName(title, (data) => {

                if (data !== "Error") {
                    this.setRecData(data)
                } else {
                    this.setState({ search: false })
                    alert(title + " could not be found.")
                    this.title.value = ""
                }
            })
        } else {
            alert("Please Enter A Location")
        }
    }
    useGeoloc() {
        if (confirm('Allow location usage?')) {
            this.setState({ search: true })
            getGeoloc((data) => {

                if (data !== "Error") {
                    getWeather(data.latitude, data.longitude, (data2) => {
                        this.setRecData(data2)
                    });
                    this.title.value = data.city;
                } else {
                    alert("Location could not be found. Please use search mode.")
                    this.setState({ search: false })
                    this.title.value = '';
                }
            })
        }
    }
    render() {
        return (
            <header>
                <button
                    id="geoButton"
                    className="searchButton blueHover"
                    onClick={this.useGeoloc}
                    title="Geo Locate">
                    <i className="fas fa-map-marker-alt"></i>
                </button>
                <input
                    id="locationBox"
                    type="text" ref={(c) => this.title = c}
                    required="required"
                    aria-label="Type Location Here"
                    placeholder="Type Location..." ></input>
                <button
                    id="goButton"
                    className="searchButton blueHover"
                    onClick={this.getCoordinates}
                    title="Search">
                    <i className="fas fa-search"></i>
                </button>
                {this.state.search ? <div className="loader"></div> : null}
            </header>
        )
    }
}
