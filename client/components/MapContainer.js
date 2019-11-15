import React, {Component} from 'react'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react'
import * as artData from '/Users/id/Desktop/stackathon/client/data/jersey-city-mural-map-list.json'

export class MapContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      spots: [artData]
    }
  }

  displayMarkers = () => {
    const mapSpots = this.state.spots[0].default
    console.log(mapSpots[0].fields)
    return mapSpots.map((spot, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: spot.fields.latitude,
            lng: spot.fields.longitude
          }}
          onClick={() => console.log('You clicked me!')}
        />
      )
    })
  }

  render() {
    const mapStyles = {
      width: '100%',
      height: '100%'
    }
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{lat: 40.726691, lng: -74.059252}}
      >
        {this.displayMarkers()}
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA4BBHjmNNTbfJWTLeDqBBGAJ0ITQxU_Ko'
})(MapContainer)
