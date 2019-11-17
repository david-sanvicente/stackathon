import React from 'react'

const WindowInfo = props => {
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
      <iframe src={instagram} />
    </div>
  )
}

export default WindowInfo
