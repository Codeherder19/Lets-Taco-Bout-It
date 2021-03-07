import React from 'react';
import './SavedTacos.css'
import { Link } from 'react-router-dom';

const SavedTacos = (props) => {
  console.log(props)
  return (
    <main className="saved-tacos">
      <h1>Saved Tacos</h1>
      <Link to="/RandomTaco">
        <button className="back-to-random">Back to Random Taco Generator</button>
      </Link>
    </main>
  )
}

export default SavedTacos;
