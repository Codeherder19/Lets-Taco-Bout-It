import React from 'react';
import './SavedTacos.css'
import { Link } from 'react-router-dom';
import TinyTaco from './TinyTaco'

const SavedTacos = (props) => {
  const allTacos = props.savedTacos.map(taco => <TinyTaco
    key={taco.id}
    id={taco.id}
    name={taco.name || "Randomly Generated Taco"}
   />)
  return (
    <main className="saved-tacos">
      <div className="tiny-taco-container">{allTacos}</div>
      <Link to="/RandomTaco">
        <button className="back-to-random">Back to Random Taco Generator</button>
      </Link>
    </main>
  )
}

export default SavedTacos;
