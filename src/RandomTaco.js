import React from 'react';
// import HomePage from './HomePage'
import './RandomTaco.css'
import { Link } from 'react-router-dom';
// import { getRandomCuratedTaco, getRandomWackyTaco } from './fetchRequests';

class RandomTaco extends React.Component {
  constructor() {
    super()
    this.state = {
      currentTaco: {},
      currentBaseLayerName: "",
      currentBaseLayerRecipe: "",
      currentShellName: "",
      currentShellRecipe: "",
      currentMixinName: "",
      currentMixinRecipe: "",
      currentCondimentName: "",
      currentCondimentRecipe: "",
      currentSeasoningName: "",
      currentSeasoningRecipe: "",
      savedTacos: [],
      errorMessage: ""
    };
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  componentDidMount = () => {fetch('http://taco-randomizer.herokuapp.com/random/')
  .then(response => response.json())
  .then(data => this.setState({
    currentTaco: data,
    currentBaseLayerName: this.capitalizeFirstLetter(data.base_layer.name),
    currentBaseLayerRecipe: data.base_layer.recipe.replace(/[^.,\sa-zA-Z]/g, ''),
    currentShellName: this.capitalizeFirstLetter(data.shell.name),
    currentShellRecipe: data.shell.recipe.replace(/[^.,\sa-zA-Z]/g, ''),
    currentMixinName: data.mixin.name,
    currentMixinRecipe: data.mixin.recipe.replace(/[^.,\sa-zA-Z]/g, ''),
    currentCondimentName: data.condiment.name,
    currentCondimentRecipe: data.condiment.recipe.replace(/[^.,\sa-zA-Z]/g, ''),
    currentSeasoningName: data.seasoning.name,
    currentSeasoningRecipe: data.seasoning.recipe.replace(/[^.,\sa-zA-Z]/g, '')
  }))
  .catch(error => {
      this.setState({errorMessage: error})
      .then(console.log(this.state.errorMessage))
    })
}

  render() {

    return (
      <main className="random-taco-main">
        <div className="recipe-container">
          <div className="ingredient-container">
            <h2 className="ingredient-name">{this.state.currentBaseLayerName}:</h2>
            <p className="ingredient-recipe">{this.state.currentBaseLayerRecipe.replace(`${this.state.currentBaseLayerName.replace(/[^.,\sa-zA-Z]/g, '')}`, "")}`, "")}</p>
          </div>
          <div className="ingredient-container">
            <h2 className="ingredient-name">{this.state.currentShellName}:</h2>
            <p className="ingredient-recipe">{this.state.currentShellRecipe.replace(`${this.state.currentShellName.replace(/[^.,\sa-zA-Z]/g, '')}`, "")}</p>
          </div>
          <div className="ingredient-container">
            <h2 className="ingredient-name">{this.state.currentMixinName}:</h2>
            <p className="ingredient-recipe">{this.state.currentMixinRecipe.replace(`${this.state.currentMixinName.replace(/[^.,\sa-zA-Z]/g, '')}`, "")}</p>
          </div>
          <div className="ingredient-container">
            <h2 className="ingredient-name">{this.state.currentCondimentName}:</h2>
            <p className="ingredient-recipe">{this.state.currentCondimentRecipe.replace(`${this.state.currentCondimentName.replace(/[^.,\sa-zA-Z]/g, '')}`, "")}</p>
          </div>
          <div className="ingredient-container">
            <h2 className="ingredient-name">{this.state.currentSeasoningName}:</h2>
            <p className="ingredient-recipe">{this.state.currentSeasoningRecipe.replace(`${this.state.currentSeasoningName.replace(/[^.,\sa-zA-Z]/g, '')}`, "")}</p>
          </div>
        </div>
        <div className="button-container">
          <Link to="/">
            <button className="back-to-home">Back to Home</button>
          </Link>
          <button className="random-taco">Curated Taco</button>
          <button className="random-taco">WACKY TACO!!!</button>
        </div>
      </main>
    )
  }
}
export default RandomTaco;
