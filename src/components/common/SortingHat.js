import React from 'react'

import axios from 'axios'
import HousesGif from '/Users/hongvan/development/project-x/src/images/houses.gif'

class SortingHat extends React.Component {
  constructor() {
    super()
    this.state = {
      house: null
    }
  }

  handleClick() {
    axios.get('https://www.potterapi.com/v1/sortingHat')
      .then(resp => this.setState({ house: resp.data }))
  }

  render() {
    const { house } = this.state
    return < section className="section sorting-hat" >
      <div className="container">
        <h1>Welcome to PotterPedia!</h1>
        <h2>All muggles, witches and wizards are welcome.</h2>
        <figure className="house-gif">
          <img src={HousesGif} alt="houses-gif"/>
        </figure>
        <div className="sorting-button">
          <h2>But first, find out which house you belong to!</h2>
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