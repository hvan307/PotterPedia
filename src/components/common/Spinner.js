import React from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const Spinner = () => {
  return (
    <div className="Circles">
      <Loader
        type="Audio"
        color="yellow"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  )
}



export default Spinner