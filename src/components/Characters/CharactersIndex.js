import React from 'react'
import axios from 'axios'

import CharacterCard from './CharacterCard'
import Spinner from '../common/Spinner'
import SearchForm from '../common/SearchForm'

class CharactersIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      filteredCharacters: [],
      query: ''
    }
  }

  componentDidMount() {
    setTimeout(() => {
      axios.get('https://www.potterapi.com/v1/characters/?key=$2a$10$KlXbSlQJ6SoRxqxZoBgA1OEZqZ.OleSixEvf5uDMYgxO9ydsmjehm')
        .then(response => {
          this.setState({
            characters: response.data,
            filteredCharacters: response.data
          })
        })
        .catch(error => console.log(error))
    }, 3000)
  }

  filterCharacters(event) {

    console.log(event.target.value)
    console.log(this.state.characters)
    const searchQuery = event.target.value
    const { characters } = this.state
    const filteredCharacters = characters.filter(character => {
      const regex = new RegExp(searchQuery, 'i')
      return character.name.match(regex)
    })
    this.setState({
      query: searchQuery,
      filteredCharacters: filteredCharacters
    })
  }

  render() {
    console.log(this.state.filteredCharacters)
    if (!this.state.characters) {
      return <Spinner />
    }
    return (
      <section className="charactersIndex" id="characters">
        <SearchForm query={this.state.query} onChange={(event) => this.filterCharacters(event)} />
        <div className="section">
          <div className="container">
            <div className="columns is-multiline is-mobile">
              {this.state.filteredCharacters.map(character => {
                return <CharacterCard key={character._id} {...character} />
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }
}



export default CharactersIndex

// 