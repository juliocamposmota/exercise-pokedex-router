import React, { Component } from 'react';

class PokemonDetails extends Component {
  render() {
    const { match: { params: { id } } } = this.props;

    return (
      <div>
        <h1>Here you can read more details about this Pokemon.</h1>
        <p>{ id }</p>
        {/* <p>{ type }</p>
        <p>{ sumary }</p>
        <p>{ foundAt }</p> */}
      </div>
    );
  }
}

export default PokemonDetails;
