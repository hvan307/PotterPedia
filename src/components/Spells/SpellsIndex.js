import React from 'react'

import axios from 'axios'
import SpellCard from './SpellCard'
import SearchForm from '../common/SearchForm'

class SpellsIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      spells: [],
      filteredSpells: [],
      query: ''
    }
  }

  componentDidMount() {
    axios.get('https://hp-api.onrender.com/api/spells')
      .then(resp => {
        this.setState({
          spells: resp.data,
          filteredSpells: resp.data
        })
      })
      .catch(err => console.log(err))
  }

  filterSpells(event) {
    const searchQuery = event.target.value
    const { spells } = this.state
    const filteredSpells = spells.filter(spell => {
      const regex = new RegExp(searchQuery, 'i')
      return spell.name.match(regex)
    })
    this.setState({
      query: searchQuery,
      filteredSpells: filteredSpells
    })
  }

  render() {
    return <section className="section spells-index">
      <SearchForm
        query={this.state.query}
        onChange={(event) => this.filterSpells(event)}
      />
      <section className="section">
        <div className="container">
          <div className="columns is-multiline is-mobile">
            {this.state.filteredSpells.map(spell => {
              return <SpellCard key={spell._id} {...spell} />
            })
            }
          </div>
        </div>
      </section>
    </section>
  }
}

export default SpellsIndex
