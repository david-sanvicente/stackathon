import React from 'react'

// stateless component for structuring InfoWindow
const WindowInfo = props => {
  const {
    artist,
    name,
    instagram,
    location_with_city
  } = props.props.activeMarker.spot.fields
  return (
    <div>
      <h4>{`${name} by ${artist}`}</h4>
      <h4>
        <a href={`${instagram}`} target="_blank">
          {instagram}
        </a>
      </h4>
      <h4>{`Found at ${location_with_city}`}</h4>
      <iframe src={instagram} />
    </div>
  )
}

export default WindowInfo
