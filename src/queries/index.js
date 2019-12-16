import gql from 'graphql-tag';

const GET_POKEMONS = gql`
  {
    Pokemons(first: 151) {
      id
      name
    }
  }
`;

const GET_POKEMON_BY_NAME = gql`
  query GetPokemonByName($name: String!) {
    Pokemon(name: $name) {
      name
      image
      types(first: 1) {
        name
      }
      stats {
        name
        value
      }
      moves {
        name
        learnMethod
      }
    }
  }
`;

export default {
  GET_POKEMONS,
  GET_POKEMON_BY_NAME,
};
