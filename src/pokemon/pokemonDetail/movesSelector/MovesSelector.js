import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import * as St from './MovesSelector.styled';

const MovesSelector = ({ moves, onSelect }) => {
  const [selectedLearnMethod, setSelectedLearnMethod] = useState('');
  const learnMethods = useMemo(
    () => moves.reduce((acc, move) => (!acc.includes(move.learnMethod) ? [...acc, move.learnMethod] : acc), []),
    [moves],
  );
  useEffect(() => setSelectedLearnMethod(learnMethods[0]), [learnMethods]);

  return (
    <St.Wrapper>
      <St.LearnMethods>
        {learnMethods.map(method => (
          <St.MethodButton
            selected={method === selectedLearnMethod}
            key={method}
            onClick={() => setSelectedLearnMethod(method)}
          >
            {method}
          </St.MethodButton>
        ))}
      </St.LearnMethods>
      <St.MoveOptions>
        {moves
          .filter(move => move.learnMethod === selectedLearnMethod)
          .map(move => (
            <St.MoveButton key={move.name} onClick={() => onSelect(move)}>
              {move.name}
            </St.MoveButton>
          ))}
      </St.MoveOptions>
    </St.Wrapper>
  );
};

MovesSelector.propTypes = {
  onSelect: PropTypes.func.isRequired,
  moves: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      learnMethod: PropTypes.string.isRequired,
    }),
  ),
};

export default MovesSelector;
