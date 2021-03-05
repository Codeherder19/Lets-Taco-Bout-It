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
      savedTacos: [],
      errorMessage: ""
    };
  }

  componentDidMount = () => {
  fetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
  .then(response => response.json())
  .then(data => this.setState({
    currentTaco: data,
  }))
.catch(error => {
      this.setState({errorMessage: error})
    })
}

  render() {
    return (
      <main className="random-taco-main">
        <div className="recipe-container">
          <h2>{this.state.currentTaco.name}</h2>
          <p>{this.state.}</p>
          <p></p>
          <p></p>
          <p></p>
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
