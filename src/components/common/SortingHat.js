import React from 'react'

import axios from 'axios'
import Spinner from '../common/Spinner'

class SortingHat extends React.Component {
  constructor() {
    super()
    this.state = {
      house: null
    }
  }

  handleClick() {
    setTimeout(() => {
      axios.get('https://www.potterapi.com/v1/sortingHat')
        .then(resp => this.setState({ house: resp.data }))
    }, 1000)
  }

  render() {
    const { house } = this.state
    return < section className="section" >
      <div className="container">
        <div className="sorting-button">
          <h2>Find out which house you belong to!</h2>
          <button
            onClick={() => this.handleClick()}
          >
            Click Me!
          </button>
        </div>
        <div className="assorted-house">
          <h3>{house}</h3>
        </div>
      </div>
    </section >
  }
}



export default SortingHat