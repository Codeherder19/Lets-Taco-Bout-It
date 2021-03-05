import React from 'react';
import HomePage from './HomePage'
import { Link } from 'react-router-dom';
import { getRandomCuratedTaco, getRandomWackyTaco } from './fetchRequests';

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
      <div>
        <h1>{this.state.currentTaco.name}</h1>
      </div>
    )
  }
}
export default RandomTaco;
