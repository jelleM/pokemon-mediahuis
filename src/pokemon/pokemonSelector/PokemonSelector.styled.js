import styled from 'styled-components';

import Button from '../../styles/Button';

export const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  grid-area: pokemonselector;

  label {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.general.YELLOW};
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
  }

  input {
    padding: 1rem 0.5rem;
    font-size: 1.4rem;
  }
`;
export const PokemonOptions = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 1rem;
  max-height: 25rem;
  overflow-y: auto;
`;

export const OptionButton = styled(Button)`
  margin: 0.2rem;
  font-size: 1.6rem;
  background-color: ${props => props.theme.colors.general.BLUE};
  color: ${props => props.theme.colors.general.YELLOW};
  min-height: 3.6rem;
`;
