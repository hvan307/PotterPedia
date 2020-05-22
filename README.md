# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) GA London React Template

`yarn start` to run the development server

`yarn build` to create a build directory


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# PotterPedia

## Overview
A personal bonus project at General Assembly London.
This was a front-end project that utilised a [Harry Potter API](https://www.potterapi.com/) and `React.js`. I used CSS framework `Bulma` to aid in building this web app. This apps allow Potterheads to search for their favourite characters and learn more about each and every one of them. You can also learn more about the magic spells, as well as check for details about the Hogwarts houses. 

## Brief
- Consume a public API 
- Have several components - At least one classical and one functional.
- The app should include a router - with several "pages".
- Be deployed online and accessible to the public.

## Technologies Used
- JavaScript (ES6)
- React.js
- HTML, JSX
- Harry Potter API
- Axios
- Webpack
- Git and GitHub
- Bulma, SCSS
- GitHub Pages

////////////////////////////////////
# Approach


# App structure
## App.js 
```js
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
```
In the app.js you can see the fundamental app structure, starting with the BrowserRouter. Switch component with multiple Route components within, and a Hero component placed outside so it's accessible on all endpoints. 

## Components

### NavBar and Search

The NavBar and the Search components were no doubt the most challenging elements due to the complexity of having a functional search bar being called and changing state from multiple endpoints. 
Although it would have been easier to have a separate endpoint with a simple standalone search bar, we felt having search function in the NavBar would ease user experience and provide site continuity.

Initially, we attempted to carry out the search function within the NavBar component. However, due to the asychronous nature of multiple setState and the complexity of the component as it constisted of a form, burger and both post and get requests, it wasn't performing well. As a result, axios was fetching data using an outdated state that was set by the previous user query. 

To address this issue, we decided to simplify our class component Navbar. We kept the basic navbar elements, as well as the submission form and its handler functions. 
```js
class NavBar extends React.Component {

  constructor() {
    super()
    this.state = {
      search: '',
      navMobileOpen: false
    }
  }

  handleChange(event) {
    this.setState({ search: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.history.push('/search', this.state.search)
    location.reload()
  }
```
We then created a simple class component Search where we would be able to pass the state that was set in the Navbar component using props.location in the axios get request url. This is where the query results are actually being handled, sending a get request to the API endpoint. 
```js
class Search extends React.Component {

  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get(`https://cors-anywhere.herokuapp.com/api.deezer.com/search?q=${this.props.location.state}`)
      .then(res => {
        this.setState({ data: res.data.data })
      })
      .catch(err => console.log(err))
  }
  ```
We added location.reload() to handleSubmit() in order to refresh the page content upon query submission, so that the new state is rendered without having to manually refresh the page. 


### Top Charts and Artist Pages

Our Charts and SingleArtist features were class components in which we set the state via an axios requests, fetching data from Deezer chart and artist endpoints. 

While using axios, some of our API endpoints became inaccessible due to some configuration problems resulting in incorrect behavior in regards to cross-origin resource sharing policy. The cors-anywhere link allowed us to bypass this issue.

``` js
class Charts extends React.Component {

  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart')
      .then(res => {
        this.setState({ data: res.data.tracks.data })
      })
  }
```
Returning an array of 10 track objects, we were able to map over each element and extract the required data for each display card. 

``` js
class SingleArtist extends React.Component {

  constructor() {
    super()
    this.state = {
      data: {},
      trackList: []
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`)
      .then(res => {
        this.setState({ data: res.data })
      })
    axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/top?limit=50`)
      .then(res => {
        this.setState({ trackList: res.data.data })
      })
  }
```
Similar to the chart request, for the single artist component, we mapped over the returned data to display the desired content, including further artist info and a discography of song titles.

In order for the user to play the song previews, we obtained the preview recording from the returned data and placed it in an audio tag.

## Screenshots
![DevTruDesktop](src/styles/images/devtru-desktop.png)
![DevTruMobile](src/styles/images/devtru-mobile.png)
![Charts](src/styles/images/topcharts.png)
![Search](src/styles/images/searchresults.png)
![SingleArtist](src/styles/images/single-artist.png)

## Potential Future Features

- Genre-specific top charts
- Favourite song/artist section

## Wins
- Having just learnt React, creating a functional search bar in the navbar that is displayed and accessible on all endpoints was more complex than what I had done in class up to that point in time. Being able to eventually accomplish that was a big win.
- Another win was our app's bonus feature which allows the user to sample a song preview for 15seconds. Given the amount of time allowed for this project, it was our stretch goal at the start of the project.
- Creating a responsive design for the app and the burger navbar. 

## Lessons Learned

- Deployment
This was a main learning experience, as our project's navbar search engine is not functional after deploying it to GitHub pages. Even though we were warned of deployment challenges, as often with each project and its eccentricities, some functionalities are compromised, we did not anticipate our main feature to be affected. This goes to show that for projects with time constraints like this, sometimes it's better to focus on creating simple features that will be robust, rather than doing to many things at once. 

## Other challenges
We used a Bulma CSS framework for the styling, which proved to be a quick and efficient solution to styling the project, but found it to be fairy restrictive when trying to implement more creative elements.



