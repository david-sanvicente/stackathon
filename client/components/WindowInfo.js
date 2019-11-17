import React from 'react'

const WindowInfo = props => {
  // console.log(props.props.activeMarker.spot.fields)
  const {
    artist,
    name,
    instagram,
    location_with_city
  } = props.props.activeMarker.spot.fields
  return (
    <div>
      <h5>{`${name} by ${artist}`}</h5>
      <a href={`${instagram}`} target="_blank">
        {instagram}
      </a>
      <h5>{`Found at ${location_with_city}`}</h5>
    </div>
  )
}

export default WindowInfo
