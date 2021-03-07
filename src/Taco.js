import React from 'react'
import './Taco.css'

const Taco = ({name, baseLayerName, baseLayerRecipe, shellName, shellRecipe, mixinName, mixinRecipe, condimentName, condimentRecipe, seasoningName, seasoningRecipe}) => {
  return (
    <div className="total-recipe-container">
      {name &&
      <div className="title-and-recipe-container">
        <h2 className="curated-title">{name}</h2>
      </div>}
      {baseLayerName &&
      <div className="ingredient-container">
        <h3 className="ingredient-name">{baseLayerName}:</h3>
        <p className="ingredient-recipe">{baseLayerRecipe.replace(`${baseLayerName.replace(/[^.,\sa-zA-Z]/g, '')}`, "")}</p>
      </div>}
      {shellName &&
      <div className="ingredient-container">
        <h3 className="ingredient-name">{shellName}:</h3>
        <p className="ingredient-recipe">{shellRecipe.replace(`${shellName.replace(/[^.,\sa-zA-Z]/g, '')}`, "")}</p>
      </div>}
      {mixinName &&
      <div className="ingredient-container">
        <h3 className="ingredient-name">{mixinName}:</h3>
        <p className="ingredient-recipe">{mixinRecipe.replace(`${mixinName.replace(/[^.,\sa-zA-Z]/g, '')}`, "")}</p>
      </div>}
      {condimentName &&
      <div className="ingredient-container">
        <h3 className="ingredient-name">{condimentName}:</h3>
        <p className="ingredient-recipe">{condimentRecipe.replace(`${condimentName.replace(/[^.,\sa-zA-Z]/g, '')}`, "")}</p>
      </div>}
      {seasoningName &&
      <div className="ingredient-container">
        <h3 className="ingredient-name">{seasoningName}:</h3>
        <p className="ingredient-recipe">{seasoningRecipe.replace(`${seasoningName.replace(/[^.,\sa-zA-Z]/g, '')}`, "")}</p>
      </div>}
    </div>
  )
}



export default Taco
