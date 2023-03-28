import React from 'react'


const CharacterCard = ({ image, name, actor, house, dateOfBirth, ancestry, patronus, species }) => {
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
            <img src={image} alt={name} style={{ height: 150 + 'px' }}></img>
          </h5>
          <h5 className="subtitle">
            <span>Played by: </span>{actor}
          </h5>
          <h5 className="subtitle">
            <span>House: </span>{house}
          </h5>
          <h5 className="subtitle">
            <span>Date of birth: </span>{dateOfBirth}
          </h5>
          <h5 className="subtitle">
            <span>Blood Status: </span>{ancestry}
          </h5>
          <h5 className="subtitle">
            <span>Patronus: </span>{patronus}
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
