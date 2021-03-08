import './App.css';
import React from 'react';
import HomePage from './HomePage'
import Header from './Header';
import { Route } from 'react-router-dom'
import RandomTaco from './RandomTaco'
import SavedTacos from './SavedTacos'



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      savedTacos: []
    }
    this.updateSavedTacos = this.updateSavedTacos.bind(this)
  }

  updateSavedTacos = (savedTaco) => {
    savedTaco.id = this.state.savedTacos.length + 1
    this.setState({savedTacos: [...this.state.savedTacos, savedTaco]})
  }

  render() {
  return (
    <>
      <Header />
      <Route exact path="/" render={ () => {
        return (
          <>
            <HomePage />
          </>
        )
      }} />
      <Route path="/RandomTaco" render={ () => <RandomTaco updateSavedTacos={this.updateSavedTacos} /> } />
      <Route path="/SavedTacos" render={ () => <SavedTacos savedTacos={this.state.savedTacos}/> } />
    </>
  );
}
}

export default App;
