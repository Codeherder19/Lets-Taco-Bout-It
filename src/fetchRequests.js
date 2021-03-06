const getRandomCuratedTaco = () => {
  return fetch("http://taco-randomizer.herokuapp.com/random/?full-taco=true")
.then(response => {
  return response.json();
})
.then(data => data)
}

const getRandomWackyTaco = () => {
  return fetch("http://taco-randomizer.herokuapp.com/random")
.then(response => {
  return response.json();
})
.then(data => data)
}

export { getRandomCuratedTaco, getRandomWackyTaco }
