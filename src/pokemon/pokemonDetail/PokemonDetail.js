import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';

import translations from '../../translations/translations';
import queries from '../../queries';
import Stats from './stats/Stats';
import SelectedMoves from './selectedMoves/SelectedMoves';
import MovesSelector from './movesSelector/MovesSelector';
import * as St from './PokemonDetail.styled';

const PokemonDetail = ({ selectedPokemon, savePokemon }) => {
  const { loading, error, data } = useQuery(queries.GET_POKEMON_BY_NAME, {
    variables: { name: selectedPokemon },
  });
  const [selectedMoves, setSelectedMoves] = useState([]);
  useEffect(() => {
    setSelectedMoves([]);
  }, [selectedPokemon]);

  const save = () => {
    const newMember = {
      name: selectedPokemon,
      image: data.Pokemon.image,
      moves: selectedMoves,
      type: data.Pokemon.types[0],
    };
    savePokemon(newMember);
  };

  const addMove = move => {
    if (selectedMoves.length < 4 && !selectedMoves.find(selectedMove => selectedMove.name === move.name)) {
      setSelectedMoves([...selectedMoves, move]);
    }
  };

  const removeMove = moveName => {
    setSelectedMoves(selectedMoves.filter(selectedMove => selectedMove.name !== moveName) || []);
  };

  return (
    <St.Section>
      {loading && <span>{translations.getLabel('LOADING')}</span>}
      {!loading && error && <span>{translations.getLabel('NO_POKEMON_FOUND')}</span>}
      {!loading && data && data.Pokemon && (
        <>
          <St.Summary>
            <img src={data.Pokemon.image} alt={translations.getLabel('IMAGE_ALT', { name: selectedPokemon })} />
            <h1>{selectedPokemon}</h1>
            <St.SaveButton onClick={save}>{translations.getLabel('SAVE_POKEMON')}</St.SaveButton>
          </St.Summary>
          <St.Details>
            <Stats stats={data.Pokemon.stats} />
            <SelectedMoves moves={selectedMoves} removeMove={removeMove} />
          </St.Details>
          <MovesSelector moves={data.Pokemon.moves} onSelect={addMove} />
          <div></div>
        </>
      )}
    </St.Section>
  );
};

PokemonDetail.propTypes = {
  savePokemon: PropTypes.func.isRequired,
  selectedPokemon: PropTypes.string,
};

PokemonDetail.defaultProps = {
  selectedPokemon: '',
};

export default PokemonDetail;
