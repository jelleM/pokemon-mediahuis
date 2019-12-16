import React from 'react';
import PropTypes from 'prop-types';

import translations from '../../../translations/translations';
import * as St from './SelectedMoves.styled';

const SelectedMoves = ({ moves, removeMove }) => {
  return (
    <St.Wrapper>
      <h2>{translations.getLabel('SELECTED_MOVES')}</h2>
      <St.Moves>
        {moves &&
          moves.map((move, i) => (
            <St.MoveButton key={`${move.name}-${i}`} onClick={() => removeMove(move.name)}>
              <span>{move.learnMethod}</span>
              <span>{move.name}</span>
            </St.MoveButton>
          ))}
      </St.Moves>
    </St.Wrapper>
  );
};

SelectedMoves.propTypes = {
  removeMove: PropTypes.func.isRequired,
  moves: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      learnMethod: PropTypes.string.isRequired,
    }),
  ),
};

export default SelectedMoves;
