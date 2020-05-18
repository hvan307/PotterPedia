import React from 'react'
import houses from '/Users/hongvan/development/project-x/src/images/houses.gif'

const Spinner = () => {
  return (
    <div className="Loading">
      <img src={houses} alt="houses-loading" />
    </div>
  )
}

export default Spinner