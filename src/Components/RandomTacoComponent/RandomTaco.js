import React from 'react';
// import HomePage from './HomePage'
import './RandomTaco.css'
import { Link } from 'react-router-dom';
import Taco from '../TacoComponent/Taco'
// import { getRandomCuratedTaco, getRandomWackyTaco } from './fetchRequests';

class RandomTaco extends React.Component {
  constructor({updateSavedTacos}) {
    super()
    this.state = {
      updateSavedTacos: updateSavedTacos,
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
      errorMessage: null,
      savedTaco: false
    };
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  addTacoToSavedTacos = () => {
    const tacoToBeSaved = this.state.currentTaco;
    tacoToBeSaved.id = this.state.savedTacos.length + 1;
    this.state.updateSavedTacos(tacoToBeSaved);
    this.setState({savedTaco: true})
  }

  fetchCuratedTaco = () => {fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
  .then(response => response.json())
  .then(data => this.setState({
    savedTaco: false,
    currentTaco: data,
    currentTacoName: data.name,
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
    savedTaco: false,
    currentTaco: data,
    currentTacoName: "Randomly Generated Taco",
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

  componentDidMount = () => {this.fetchCuratedTaco()}



  render() {
    return (
      <main className="random-taco-main">
        <h2 className="section-title">Random Taco Generator</h2>
        {this.state.savedTaco &&
        <h2 className="successful-save">YOU SAVED A RECIPE!</h2>}
        {this.state.currentTaco &&
        <Taco
        id={this.state.savedTacos.length + 1}
        key={Math.random() * 10000000}
        name={this.state.currentTacoName}
        baseLayerName={this.state.currentBaseLayerName}
        baseLayerRecipe={this.state.currentBaseLayerRecipe}
        shellName={this.state.currentShellName}
        shellRecipe={this.state.currentShellRecipe}
        mixinName={this.state.currentMixinName}
        mixinRecipe={this.state.currentMixinRecipe}
        condimentName={this.state.currentCondimentName}
        condimentRecipe={this.state.currentCondimentRecipe}
        seasoningName={this.state.currentSeasoningName}
        seasoningRecipe={this.state.currentSeasoningRecipe}
         />
          }
        <div className="button-container">
          <Link to="/">
            <button className="back-to-home">Back to Home</button>
          </Link>
          <button className="random-curated-taco" onClick={this.fetchCuratedTaco}>Curated Taco</button>
          <button className="random-wacky-taco" onClick={this.fetchWackyTaco}>WACKY TACO!!!</button>
          <button className="save-taco" onClick={this.addTacoToSavedTacos}>Save Taco</button>
          <Link to="/SavedTacos">
            <button className="view-saved-tacos">View Saved</button>
          </Link>
        </div>
      </main>
    )
  }
}
export default RandomTaco;
