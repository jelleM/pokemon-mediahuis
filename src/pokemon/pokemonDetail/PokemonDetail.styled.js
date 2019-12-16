import styled from 'styled-components';
import Button from '../../styles/Button';

export const Section = styled.section`
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  padding-left: 2rem;
  grid-area: pokemondetail;
`;

export const Summary = styled.div`
  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 700;
    color: ${props => props.theme.colors.general.BLUE};
  }
`;

export const SaveButton = styled(Button)`
  padding: 0.5rem 1rem;
  font-size: 1.4rem;
  background-color: ${props => props.theme.colors.general.BLUE};
  color: ${props => props.theme.colors.general.WHITE};
`;

export const Details = styled.div`
  flex: 2;
  margin: 0 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
