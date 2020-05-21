import React from 'react'
import axios from 'axios'

import HouseCard from './HouseCard'
import Gryffindor from '/Users/hongvan/development/project-x/src/images/gryffindor.gif'
import Ravenclaw from '/Users/hongvan/development/project-x/src/images/ravenclaw.gif'
import Slytherin from '/Users/hongvan/development/project-x/src/images/slytherin.gif'
import Hufflepuff from '/Users/hongvan/development/project-x/src/images/hufflepuff.gif'

class HousesIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      houses: null
    }
  }

  componentDidMount() {
    setTimeout(() => {
      axios.get('https://www.potterapi.com/v1/houses/?key=$2a$10$KlXbSlQJ6SoRxqxZoBgA1OEZqZ.OleSixEvf5uDMYgxO9ydsmjehm')
        .then(response => {
          this.setState({
            houses: response.data
          })
        })
        .catch(error => console.log(error))
    }, 3000)
  }

  render() {
    if (!this.state.houses) {
      return <div className="columns is-multiline is-mobile is-centered">
        <figure className="image">
          <img src={Gryffindor} alt="Gryffindor" />
        </figure>
        <figure className="image">
          <img src={Ravenclaw} alt="Ravenclaw" />
        </figure>
        <figure className="image">
          <img src={Slytherin} alt="Slytherin" />
        </figure>
        <figure className="image">
          <img src={Hufflepuff} alt="Hufflepuff" />
        </figure>
      </div>
    } else {
      return <section className="section HousesIndex" id="houses">
        <div className="container"><div className="columns is-multiline is-mobile">
          {this.state.houses.map(house => {
            return <HouseCard key={house._id} {...house} />
          })}
        </div>
        </div>
      </section>
    }

  }
}

export default HousesIndex

