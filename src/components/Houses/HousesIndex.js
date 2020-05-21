import React from 'react'
import axios from 'axios'

import HouseCard from './HouseCard'

class HousesIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      houses: []
    }
  }

  componentDidMount() {
    axios.get('https://www.potterapi.com/v1/houses/?key=$2a$10$KlXbSlQJ6SoRxqxZoBgA1OEZqZ.OleSixEvf5uDMYgxO9ydsmjehm')
      .then(response => {
        this.setState({
          houses: response.data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <section className="HousesIndex" id="houses">
        <div className="section">
          <div className="container">
            <div className="columns is-multiline is-mobile">
              {this.state.houses.map(house => {
                return <HouseCard key={house._id} {...house} />
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default HousesIndex

