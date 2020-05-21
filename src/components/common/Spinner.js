import React from 'react'
import Loader from 'react-loader-spinner'

const Spinner = () => {
  return (
    <div className="Loading">
      <Loader
        type="TailSpin"
        color="yellow"
        height={100}
        width={100}
        timeout={1500} 
      />
    </div>
  )
}

export default Spinner