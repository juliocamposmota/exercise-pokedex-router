import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PokemonDetails extends Component {
  constructor() {
    super()

    this.findPokemonById = this.findPokemonById.bind(this);
  }

  findPokemonById(pokemonId) {
    const { pokemons } = this.props;

    return pokemons.find(({ id }) => id === pokemonId);
  }

  render() {
    const { match: { params: { id } } } = this.props;
    const pokemon = this.findPokemonById(parseInt(id));

    return (
      <div>
        <h2>{ pokemon.name } Details!</h2>

        <img src={ pokemon.image } alt={ `The classic ${ pokemon.name }` } />
        <p>Id: { pokemon.id }</p>
        <p>Type: { pokemon.type }</p>
        <p>Sumary: { pokemon.summary }</p>
        <p>{ pokemon.foundAt.map(({ location, map}) => (
          <div>
            <p>{ location }</p>
            <img src={ map } alt={ `The map of ${ location }` } />
          </div>
        )) }</p>
      </div>
    );
  }
}

export default PokemonDetails;
