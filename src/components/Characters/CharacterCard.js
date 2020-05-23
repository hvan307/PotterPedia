import React from 'react'


const CharacterCard = ({ name, role, house, school, ministryOfMagic, orderOfThePhoenix, dumbledoresArmy, deathEater, bloodStatus, species }) => {
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
            <span>School: </span>{school}
          </h5>
          <h5 className="subtitle">
            <span>Ministry of Magic: </span>{ministryOfMagic}
          </h5>
          <h5 className="subtitle">
            <span>Member of the Order of the Phoenix: </span>{orderOfThePhoenix}
          </h5>
          <h5 className="subtitle">
            <span>Member of Dumbledore&apos;s Army: </span>{dumbledoresArmy}
          </h5>
          <h5 className="subtitle">
            <span>Death Eater: </span>{deathEater}
          </h5>
          <h5 className="subtitle">
            <span>Blood Status: </span>{bloodStatus}
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