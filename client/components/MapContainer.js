import React, {Component} from 'react'
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'
import * as artData from '/Users/id/Desktop/stackathon/client/data/jersey-city-mural-map-list.json'
const key = process.env.REACT_APP_GOOGLE_KEY
const data = [artData]

export class MapContainer extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     selectedArt: useState(null)
  //   }
  // }

  // returns an error suggesting to define state property
  // getInitialState() {
  //   return {
  //     showingInfoWindow: false,
  //     activeMarker: {},
  //     selectedPlace: {}
  //   }
  // }

  displayMarkers = () => {
    const mapSpots = data[0].default
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
          onClick={() => {
            // setSelectedArt(spot)
          }}
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

const googleWrapper = GoogleApiWrapper({
  apiKey: 'AIzaSyA4BBHjmNNTbfJWTLeDqBBGAJ0ITQxU_Ko'
  // apiKey: key
})(MapContainer)

export default googleWrapper
