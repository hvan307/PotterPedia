import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Hero from './components/common/Hero'
import CharactersIndex from './components/Characters/CharactersIndex'
import HousesIndex from './components/Houses/HousesIndex'
import SortingHat from './components/common/SortingHat'


const App = () => (
  <BrowserRouter>
    <Hero />
    <Switch>
      <Route exact path="/characters" component={CharactersIndex} />
      <Route exact path="/houses" component={HousesIndex} />
      <Route path="/" component={SortingHat} />
    </Switch>
  </BrowserRouter>
)




export default App
