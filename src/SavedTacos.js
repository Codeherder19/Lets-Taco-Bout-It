import React from 'react';
import './SavedTacos.css'
import { Link } from 'react-router-dom';
import TinyTaco from './TinyTaco'

const SavedTacos = (props) => {
  console.log(props.savedTacos)
  const allTacos = props.savedTacos.map((taco, index) => <TinyTaco
    key={index + 1}
    id={index + 1}
    name={taco.name || `Taco #${taco.id}`}
   />)
  return (
    <main className="saved-tacos">
      <h2 className="section-title">Saved Tacos</h2>
      <section className="tiny-taco-container">{allTacos}</section>
      <Link to="/RandomTaco">
        <button className="back-to-random">Back to Random Taco Generator</button>
      </Link>
    </main>
  )
}

export default SavedTacos;
