import React from 'react';
import PropTypes from 'prop-types';

import translations from '../../../translations/translations';
import * as St from './Stats.styled';

const Stats = ({ stats }) => {
  return (
    <St.Wrapper>
      <h2>{translations.getLabel('STATS')}</h2>
      <St.StatsOverview>
        {stats.map(stat => (
          <St.Stat key={stat.name}>
            <span>{stat.name}</span>
            <span>{stat.value}</span>
          </St.Stat>
        ))}
      </St.StatsOverview>
    </St.Wrapper>
  );
};

Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }),
  ),
};

export default Stats;
