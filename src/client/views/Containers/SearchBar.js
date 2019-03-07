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

        if (this.title.value) {
            var title = this.title.value;
            this.setState({search: true})

        // fetch('/api/geocode/?query=' + title)
        fetch('https://nominatim.openstreetmap.org/search/' + title + '?format=json&limit=1')
            .then(res => res.json())
            .then(data => {
                this.setState({ locationData: data }),
                this.getData(data[0].lat, data[0].lon)
            })
        } else {
            alert("Please Enter A Location")
        }
    }

    useGeoloc(){
        this.setState({search: true})
        fetch('https://ipapi.co/json')
            .then(res => res.json())
            .then(data => {
                this.setState({ locationData: data }),
                this.title.value = data.city;
                this.getData(data.latitude, data.longitude)
            })
            
        
    }

    render() {
        
        return (
            <div>
                <br />
                <button className="blueHover" onClick={this.useGeoloc} title="Geo Locate"> <i className="fas fa-map-marker-alt"></i> </button>
                <input id="locationBox" type="text" ref={(c) => this.title = c} required="required" placeholder="Type Location Here..." ></input>
                <button className="blueHover" onClick={this.getCoordinates} title="Search"><i className="fas fa-search"></i></button>
                {this.state.search ? <div className="loader"></div> : null }
            </div>
        )
    }
}
