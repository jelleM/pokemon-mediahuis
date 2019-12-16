import styled from 'styled-components';

import Button from '../../../styles/Button';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 1rem;

  h2 {
    color: ${props => props.theme.colors.general.BLUE};
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const Moves = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto;
  grid-column-gap: 0.4rem;
  grid-row-gap: 0.4rem;
`;

export const MoveButton = styled(Button)`
  border: 1px solid ${props => props.theme.colors.general.BLUE};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.general.WHITE};

  & > span:first-of-type {
    color: ${props => props.theme.colors.general.YELLOW};
    text-transform: uppercase;
    font-size: 1.2rem;
  }

  & > span:last-of-type {
    font-size: 1.6rem;
    margin-top: 0.5rem;
    text-transform: capitalize;
    color: ${props => props.theme.colors.general.BLUE};
  }
`;
