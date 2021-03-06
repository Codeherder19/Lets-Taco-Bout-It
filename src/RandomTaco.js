import React from 'react';
// import HomePage from './HomePage'
import './RandomTaco.css'
import { Link } from 'react-router-dom';
// import { getRandomCuratedTaco, getRandomWackyTaco } from './fetchRequests';

class RandomTaco extends React.Component {
  constructor() {
    super()
    this.state = {
      currentBaseLayer: {},
      currentShell: {},
      currentMixin: {},
      currentCondiment: {},
      currentSeasoning: {},
      savedTacos: [],
      errorMessage: ""
    };
  }

  componentDidMount = () => {fetch('http://taco-randomizer.herokuapp.com/random/')
  .then(response => response.json())
  .then(data => this.setState({
    currentBaseLayer: data.base_layer,
    currentShell: data.shell,
    currentMixin: data.mixin,
    currentCondiment: data.condiment,
    currentSeasoning: data.seasoning
  }))
  .catch(error => {
      this.setState({errorMessage: error})
    })
}

  render() {
    return (
      <main className="random-taco-main">
        <div className="recipe-container">
          <p>{this.state.currentBaseLayer.name}</p>
          <p>{this.state.currentShell.name}</p>
          <p>{this.state.currentMixin.name}</p>
          <p>{this.state.currentCondiment.name}</p>
          <p>{this.state.currentSeasoning.name}</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className="button-container">
          <button className="random-taco">Curated Taco</button>
          <button className="random-taco">WACKY TACO!!!</button>
        </div>
      </main>
    )
  }
}
export default RandomTaco;
