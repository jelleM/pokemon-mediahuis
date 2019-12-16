import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  h2 {
    color: ${props => props.theme.colors.general.BLUE};
    font-size: 1.2rem;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

export const StatsOverview = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 33% 33% 33%;
  grid-row-gap: 0.5rem;
  grid-column-gap: 0.5rem;
  width: 100%;
`;

export const Stat = styled.div`
  text-align: right;

  & > span:first-of-type {
    color: ${props => props.theme.colors.general.YELLOW};
    font-size: 1rem;
    text-transform: uppercase;
    margin-right: 0.5rem;
  }
  & > span:last-of-type {
    font-size: 2rem;
    color: ${props => props.theme.colors.general.BLUE};
  }
`;
