import React from 'react';
import PropTypes from 'prop-types';

import translations from '../../translations/translations';
import * as St from './PokemonSquad.styled';

const PokemonSquad = ({ squad, removeMember }) => {
  const emptyCount = 6 - squad.length;
  return (
    <St.Section>
      <h2>{translations.getLabel('SELECTED_SQUAD')}</h2>
      <St.SquadMembers>
        {squad.map((squadMember, i) => {
          if (!squadMember) return null;
          return (
            <St.SquadMember
              typeName={squadMember.type.name.toUpperCase()}
              key={`${squadMember.name}-${i}`}
              onClick={() => removeMember(i)}
            >
              <img src={squadMember.image} alt={translations.getLabel('IMAGE_ALT', { name: squadMember.name })} />
              <St.Name>{squadMember.name}</St.Name>
              {squadMember.moves.map(move => (
                <St.Move key={`${squadMember.name}-${move.name}`}>{move.name}</St.Move>
              ))}
            </St.SquadMember>
          );
        })}
        {new Array(emptyCount).fill().map((_, i) => (
          <St.EmptyMember key={`empty-${i}`}>{translations.getLabel('EMPTY')}</St.EmptyMember>
        ))}
      </St.SquadMembers>
    </St.Section>
  );
};

PokemonSquad.propTypes = {
  removeMember: PropTypes.func.isRequired,
  squad: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      type: PropTypes.object.isRequired,
      moves: PropTypes.arrayOf(PropTypes.object).isRequired,
    }),
  ),
};

PokemonSquad.defaultProps = {
  squad: [],
};

export default PokemonSquad;
