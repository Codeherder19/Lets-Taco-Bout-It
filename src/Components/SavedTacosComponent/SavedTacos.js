import React from 'react';
import './SavedTacos.css'
import { Link } from 'react-router-dom';
import Taco from '../TacoComponent/Taco'
import PropTypes from 'prop-types';

const SavedTacos = ({savedTacos, deleteSaved}) => {

  const allTacos = () => {
    if (savedTacos.length) {
      return savedTacos.map(taco => {
        return (
        <div className="saved-taco">
        <Taco
          id={taco.id}
          key={Math.random() * 10000000}
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
        <button className="delete-taco" id={taco.id} key={Math.random() * 10000000} onClick={ (event) => {deleteSaved(event.target.id)}}>Delete Taco</button>
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

SavedTacos.propTypes = {
  savedTacos: PropTypes.array,
  deleteSaved: PropTypes.func
}

export default SavedTacos;
