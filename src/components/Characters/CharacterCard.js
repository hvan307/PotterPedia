import React from 'react'


const CharacterCard = ({ name, role, house, species }) => {
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
            <span>Role: </span>{role}
          </h5>
          <h5 className="subtitle">
            <span>House: </span>{house}
          </h5>
          <h5 className="subtitle">
            <span>Species: </span>{species}
          </h5>
        </div>
      </div>
    </div>
  )
}


export default CharacterCard