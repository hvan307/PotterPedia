import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Hero from './components/common/Hero'
import CharactersIndex from './components/Characters/CharactersIndex'
import HousesIndex from './components/Houses/HousesIndex'
import SortingHat from './components/common/SortingHat'
import SpellsIndex from './components/Spells/SpellsIndex'


const App = () => (
  <BrowserRouter>
    <Hero />
    <Switch>
      <Route path="/characters" component={CharactersIndex} />
      <Route path="/houses" component={HousesIndex} />
      <Route path="/spells" component={SpellsIndex} />
      <Route path="/" component={SortingHat} />
    </Switch>
  </BrowserRouter>
)

export default App
