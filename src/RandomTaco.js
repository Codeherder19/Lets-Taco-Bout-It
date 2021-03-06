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
      currentTacoName: null,
      currentTacoRecipe: null,
      currentBaseLayerName: null,
      currentBaseLayerRecipe: null,
      currentShellName: null,
      currentShellRecipe: null,
      currentMixinName: null,
      currentMixinRecipe: null,
      currentCondimentName: null,
      currentCondimentRecipe: null,
      currentSeasoningName: null,
      currentSeasoningRecipe: null,
      savedTacos: [],
      errorMessage: null
    };
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  fetchCuratedTaco = () => {fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
  .then(response => response.json())
  .then(data => this.setState({
    currentTaco: data,
    currentTacoName: data.name ? data.name : null,
    currentTacoRecipe: data.recipe ? data.recipe.replace(/[^.,\sa-zA-Z]/g, '') : null,
    currentBaseLayerName: data.base_layer.name ? this.capitalizeFirstLetter(data.base_layer.name) : null,
    currentBaseLayerRecipe: data.base_layer.recipe ? data.base_layer.recipe.replace(/[^.,\sa-zA-Z]/g, '') : null,
    currentShellName: data.shell ? this.capitalizeFirstLetter(data.shell.name) : null,
    currentShellRecipe: data.shell ? data.shell.recipe.replace(/[^.,\sa-zA-Z]/g, '') : null,
    currentMixinName: data.mixin ? data.mixin.name : null,
    currentMixinRecipe: data.mixin ? data.mixin.recipe.replace(/[^.,\sa-zA-Z]/g, '') : null,
    currentCondimentName: data.condiment ? data.condiment.name : null,
    currentCondimentRecipe: data.condiment ? data.condiment.recipe.replace(/[^.,\sa-zA-Z]/g, '') : null,
    currentSeasoningName: data.seasoning ? data.seasoning.name : null,
    currentSeasoningRecipe: data.seasoning ? data.seasoning.recipe.replace(/[^.,\sa-zA-Z]/g, '') : null
  }))
  }

  fetchWackyTaco = () => {fetch('http://taco-randomizer.herokuapp.com/random/')
  .then(response => response.json())
  .then(data => this.setState({
    currentTaco: data,
    currentTacoName: null,
    currentTacoRecipe: null,
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
    })}

  componentDidMount = () => {this.fetchWackyTaco()}



  render() {
    return (
      <main className="random-taco-main">
        <div className="total-recipe-container">
          {this.state.currentTacoName &&
          <div className="title-and-recipe-container">
            <h2 className="curated-title">{this.state.currentTacoName}</h2>
            <p className="curated-recipe">{this.state.currentTacoRecipe.replace(this.state.currentTacoName, "")}</p>
          </div>}
          {this.state.currentBaseLayerName &&
          <div className="ingredient-container">
            <h3 className="ingredient-name">{this.state.currentBaseLayerName}:</h3>
            <p className="ingredient-recipe">{this.state.currentBaseLayerRecipe.replace(`${this.state.currentBaseLayerName.replace(/[^.,\sa-zA-Z]/g, '')}`, "")}`, "")}</p>
          </div>}
          {this.state.currentShellName &&
          <div className="ingredient-container">
            <h3 className="ingredient-name">{this.state.currentShellName}:</h3>
            <p className="ingredient-recipe">{this.state.currentShellRecipe.replace(`${this.state.currentShellName.replace(/[^.,\sa-zA-Z]/g, '')}`, "")}</p>
          </div>}
          {this.state.currentMixinName &&
          <div className="ingredient-container">
            <h3 className="ingredient-name">{this.state.currentMixinName}:</h3>
            <p className="ingredient-recipe">{this.state.currentMixinRecipe.replace(`${this.state.currentMixinName.replace(/[^.,\sa-zA-Z]/g, '')}`, "")}</p>
          </div>}
          {this.state.currentCondimentName &&
          <div className="ingredient-container">
            <h3 className="ingredient-name">{this.state.currentCondimentName}:</h3>
            <p className="ingredient-recipe">{this.state.currentCondimentRecipe.replace(`${this.state.currentCondimentName.replace(/[^.,\sa-zA-Z]/g, '')}`, "")}</p>
          </div>}
          {this.state.currentSeasoningName &&
          <div className="ingredient-container">
            <h3 className="ingredient-name">{this.state.currentSeasoningName}:</h3>
            <p className="ingredient-recipe">{this.state.currentSeasoningRecipe.replace(`${this.state.currentSeasoningName.replace(/[^.,\sa-zA-Z]/g, '')}`, "")}</p>
          </div>}
        </div>
        <div className="button-container">
          <Link to="/">
            <button className="back-to-home">Back to Home</button>
          </Link>
          <button className="random-taco" onClick={this.fetchCuratedTaco}>Curated Taco</button>
          <button className="random-taco" onClick={this.fetchWackyTaco}>WACKY TACO!!!</button>
        </div>
      </main>
    )
  }
}
export default RandomTaco;
