import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Pokedex from './Pokedex';
import pokemons from './data';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" render={ () => (
          <Pokedex pokemons={pokemons} />
        ) } />
      </Switch>
    );
  }
}

export default App;
