# LET'S TACO 'BOUT IT

## Overview
Let's Taco 'Bout It makes fetch calls tp the Taco Fancy api which has two end points. One generates a curated taco from a contributor, and the other randomly combines a base layer, mixin, condiment, seasoning, and shell. A user can save recipes and then click a button to view these saved recipes, with the option to delete them with a button click as well.

## Screenshot
![Desktop View](https://i.imgur.com/vT7tXT7.png)</br>
![Desktop View](https://i.imgur.com/wnJ6Mbv.png)</br>
![Desktop View](https://i.imgur.com/v077IQX.png)</br>




## Technologies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Tests were done using Cypress.io.

## Architecture

Let's taco 'Bout It' is built with React and is controlled by seven main JavaScript files:
  - ```App.js``` contains all other elements, and is the home of our ```BrowserRouter```
  - ```HomePage.js``` displays the ```Header.js``` element and a description of how to use the application, as well as a button to navigate to the RandomTaco component.
  - ```Header.js``` holds the application name.
  - ```RandomTaco.js``` loads with a curated taco which was made by contributors to the taco fancy api. There are buttons to randomly generate a curated taco or a wacky taco as well as save, view, and delete these saved recipes.
  - ```Taco.js``` is a reusable component which displays the randomly generated taco in the RandomTaco component. It is reused in the SavedTacos component.
  - ```SavedTacos.js``` displays all saved taco recipes.

## Getting Started
### Clone this repo
run ```git clone git@github.com:Codeherder19/Lets-Taco-Bout-It.git```
### Install dependencies
run ```npm install```
### Start your application
run ``` npm start```
### Open application
Navigate to ```localHost:3000```

## Contributors
[Brian Forbes](https://github.com/Codeherder19)

## Wins/Challenges

### Wins
  - Implementing Cypress.io for testing.
  - Using React Router for conditional rendering.
  - Achieving 100 on Lighthouse audit for Accessibility.
  - Completing the project even though I got hung up and wasted a bunch of time on components I couldn't use.

### Challenges
  - Processing the data coming in from the API. All of the text was wonky so I had to read up on some RegEx code to eliminate a bunch of random punctuation. For some reason the SavedTacos were still rendering with random punctuation which I would like to clean up during intermission.
  - For some reason I wasn't able to just access nested data in an entire object by setting the object to my state of currentTaco. I had to instead dismantle it and expand state to have tons of properties for the taco component to properly render.
  - I set up my architecture incorrectly and ended up burning/wasting time by creating and testing for components I didn't end up using and had to refactor. I should have had all of my state live in App.js where my BrowserRouter lived. I learned my lesson.

## Future Iterations
  - Apply more CSS styling/color so the site doesn't look like garbage.
  - Make a different component to render the saved recipes instead of re-using the taco component so I could make them separately responsive via media queries.
  - Allow a user to rename the generic taco with a name of their own.
  - Allow a user to add a comment or review on a taco recipe once it has been saved.
  - Use local storage so saved tacos would persist on reload.
  - Add background images, and possibly find taco images online to insert into the taco component since there were none available in the API.
  - Improve the UI/UX in general, because I am not proud of this application at all.
