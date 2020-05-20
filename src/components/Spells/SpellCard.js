import React from 'react'

const SpellCard = ({ spell, type, effect }) => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">
            <span>{spell}</span>
          </h4>
        </div>
        <div className="card-content">
          <h5 className="subtitle">
            <span>Type: </span>{type}
          </h5>
          <h5 className="subtitle">
            <span>Effect: </span>{effect}
          </h5>
        </div>
      </div>
    </div>
  )
}

export default SpellCard