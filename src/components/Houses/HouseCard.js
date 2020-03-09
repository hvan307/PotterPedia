import React from 'react'

const HouseCard = ({ name, mascot, headOfHouse, houseGhost, founder, values, colors }) => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">
            <span>{name}</span>
          </h4>
        </div>
        <div className="card-content">
          <h5 className="subtitle">
            <span>Mascot: </span>{mascot}
          </h5>
          <h5 className="subtitle">
            <span>Head of House: </span>{headOfHouse}
          </h5>
          <h5 className="subtitle">
            <span>House Ghost: </span>{houseGhost}
          </h5>
          <h5 className="subtitle">
            <span>Founder: </span>{founder}
          </h5>
          <h5 className="subtitle">
            <span>Values: </span>{values}
          </h5>
          <h5 className="subtitle">
            <span>Colours: </span>{colors}
          </h5>
        </div>
      </div>
    </div>
  )
}


export default HouseCard