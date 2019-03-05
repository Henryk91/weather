import React, { Component } from 'react'

export default class SearchBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            locationData: null,
            weatherData: null,
            latitude: null,
            longitude: null,
            locationName: "",
            search: false,
        };
        this.getData = this.getData.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
        this.useGeoloc = this.useGeoloc.bind(this)

    }
    getData(latitude, longitude) {

        fetch(`/api/weather?coordinates=${latitude},${longitude}`)
            .then(res => res.json())
            .then(data => {
                this.props.set({ weatherData: data })
                this.setState({search: false})
            });
        console.log("Data Recieved")
    }

    getCoordinates() {
        this.setState({search: true})
        var title = "Glasgow";

        if (this.title.value) {
            title = this.title.value;
        } else {
            this.title.value = title;
        }

        fetch('/api/geocode/?query=' + title)
            .then(res => res.json())
            .then(data => {
                this.setState({ locationData: data }),
                this.getData(data.latitude, data.longitude)
            })
    }

    useGeoloc(){
        this.setState({search: true})
        fetch('http://ip-api.com/json')
            .then(res => res.json())
            .then(data => {
                this.setState({ locationData: data }),
                this.title.value = data.city;
                this.getData(data.lat, data.lon)
            })
            
        
    }

    render() {
        
        return (
            <div>
                <br />
                <button className="blueHover" onClick={this.useGeoloc}> Geo </button>
                <input id="locationBox" type="text" ref={(c) => this.title = c} placeholder="Type Location Here..." ></input>
                <button className="blueHover" onClick={this.getCoordinates}> GO </button>
                {this.state.search ? <div className="loader"></div> : null }
            </div>
        )
    }
}
