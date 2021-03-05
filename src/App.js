import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomePage from './HomePage'
import Header from './Header';
import { Route } from 'react-router-dom'
import RandomTaco from './RandomTaco'


function App() {
  return (
    <>
      <Header />
      <Route exact path="/" render={ () => {
        return (
          <>
            <HomePage />
          </>
        )
      }} />
      <Route path="/RandomTaco" render={ () => <RandomTaco /> } />
    </>
  );
}

export default App;
