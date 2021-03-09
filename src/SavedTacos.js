import React from 'react';
import './SavedTacos.css'
import { Link } from 'react-router-dom';
import Taco from './Taco'

const SavedTacos = ({savedTacos, deleteSaved}) => {

  const allTacos = () => {
    if (savedTacos.length) {
      return savedTacos.map(taco => {
        console.log(taco)
        return (
        <div>
        <Taco
          id={taco.id}
          key={taco.name}
          name={taco.name || `Taco #${taco.id}`}
          baseLayerName={taco.base_layer.name}
          baseLayerRecipe={taco.base_layer.recipe}
          shellName={taco.shell ? taco.shell.name : `Dealer's choice`}
          shellRecipe={taco.shell ? taco.shell.recipe : `Flour or Corn tortilla`}
          mixinName={taco.mixin ? taco.mixin.name : ""}
          mixinRecipe={taco.mixin ? taco.mixin.recipe : ""}
          condimentName={taco.condiment ? taco.condiment.name : ""}
          condimentRecipe={taco.condiment ? taco.condiment.recipe : ""}
          seasoningName={taco.seasoning ? taco.seasoning.name : ""}
          seasoningRecipe={taco.seasoning ? taco.seasoning.recipe : ""}
        />
        <button className="delete-taco" id={taco.id} onClick={ (event) => {deleteSaved(event.target.id)}}>Remove</button>
        </div>
      )
      })
    }
    }

  return (
    <main className="saved-tacos">
      <h2 className="section-title">Saved Tacos</h2>
      <section className="saved-tacos-container">{allTacos()}</section>
      <Link to="/RandomTaco">
        <button className="back-to-random">Back to Random Taco Generator</button>
      </Link>
    </main>
  )
}

export default SavedTacos;
