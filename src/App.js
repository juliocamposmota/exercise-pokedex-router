import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Pokedex from './components/Pokedex';
import PokemonDetails from './components/PokemonDetails';
import About from './components/About';
import NotFound from './components/NotFound';
import pokemons from './data';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h1>Pokedex</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </div>
        <Switch>
          <Route exact path="/about" render={ () => <About /> } />
          <Route exact path="/pokemons/:id" render={ (props) => <PokemonDetails { ...props } pokemons={ pokemons } /> } />
          <Route exact path="/" render={ () => <Pokedex pokemons={ pokemons } /> } />
          <Route component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

export default App;
