import React, {Component} from 'react'
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react'
import WindowInfo from './WindowInfo'

// This is the JSON used to create points on the map.
import * as artData from '/Users/id/Desktop/stackathon/client/data/jersey-city-mural-map-list.json'

export class MapContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showingInfoWindow: false,
      activeMarker: {}
    }
  }

  // Sets state to the selected Marker when clicked
  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      showingInfoWindow: true
    })

  // Maps through the data to make markers from of all 138 object
  displayMarkers = () => {
    const mapSpots = [artData][0].default
    return mapSpots.map((spot, index) => {
      return (
        <Marker
          spot={spot}
          key={index}
          id={index}
          position={{
            lat: spot.fields.latitude,
            lng: spot.fields.longitude
          }}
          onClick={this.onMarkerClick}
        />
      )
    })
  }

  render() {
    // Shapes the map. This is necessary as the map
    // will not render without specified dimensions
    const mapStyles = {
      width: '100%',
      height: '100%'
    }
    return (
      // <Map> is a built-in Google component
      // renders map at the desired location and zoom
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{lat: 40.726691, lng: -74.059252}}
      >
        {/* plots markers from data onto map */}
        {this.displayMarkers()}

        {/* Another built-in Google Component */}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          {/* <WindowInfo /> Not a Google Component. 
            Passes state (the clicked Marker)
            to the componen which uses the props to 
            structure the JSX */}
          <WindowInfo props={this.state} />
        </InfoWindow>
      </Map>
    )
  }
}

const googleWrapper = GoogleApiWrapper({
  apiKey: 'AIzaSyA4BBHjmNNTbfJWTLeDqBBGAJ0ITQxU_Ko'
})(MapContainer)

export default googleWrapper
