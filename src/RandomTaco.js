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
    currentBaseLayerName: data.base_layer.name,
    currentBaseLayerRecipe: data.base_layer.recipe.replace(/[^.,\sa-zA-Z]/g, ''),
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
          <div className="ingredient-container">
            <p className="ingredient">{this.state.currentBaseLayerName}</p>
            <p className="ingredient">{this.state.currentBaseLayerRecipe}</p>
          </div>
          <div className="ingredient-container">
            <p className="ingredient">{this.state.currentShell.name}</p>
            <p className="ingredient">{this.state.currentShell.recipe}</p>
          </div>
          <div className="ingredient-container">
            <p className="ingredient">{this.state.currentMixin.name}</p>
            <p className="ingredient">{this.state.currentMixin.recipe}</p>
          </div>
          <div className="ingredient-container">
            <p className="ingredient">{this.state.currentCondiment.name}</p>
            <p className="ingredient">{this.state.currentCondiment.recipe}</p>
          </div>
          <div className="ingredient-container">
            <p className="ingredient">{this.state.currentSeasoning.name}</p>
            <p className="ingredient">{this.state.currentSeasoning.recipe}</p>
          </div>
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
