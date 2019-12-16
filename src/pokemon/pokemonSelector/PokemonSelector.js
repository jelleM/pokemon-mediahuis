import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';

import translations from '../../translations/translations';
import queries from '../../queries';
import * as St from './PokemonSelector.styled';

const PokemonSelector = ({ onSelect }) => {
  const [searchValue, setSearchValue] = useState('');
  const { loading, error, data } = useQuery(queries.GET_POKEMONS);
  return (
    <St.Section>
      <label htmlFor="pokemon-search">{translations.getLabel('SELECT_POKEMON')}</label>
      <input
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        id="pokemon-search"
        placeholder={translations.getLabel('SELECT_POKEMON_PLACEHOLDER')}
      />
      <St.PokemonOptions>
        {loading && <span>{translations.getLabel('LOADING')}</span>}
        {!loading && error && <span>{translations.getLabel('SELECT_POKEMON_ERROR')}</span>}
        {!loading &&
          data &&
          data.Pokemons &&
          data.Pokemons.filter(pokemon => !searchValue || pokemon.name.startsWith(searchValue)).map(pokemon => (
            <St.OptionButton key={pokemon.id} onClick={() => onSelect(pokemon.name)}>
              {pokemon.name}
            </St.OptionButton>
          ))}
      </St.PokemonOptions>
    </St.Section>
  );
};

PokemonSelector.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default PokemonSelector;
