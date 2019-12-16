import styled from 'styled-components';

import Button from '../../styles/Button';

export const Section = styled.section`
  grid-area: pokemonsquad;

  h2 {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.colors.general.YELLOW};
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
  }
`;

export const SquadMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SquadMember = styled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30rem;
  width: 15rem;
  margin: 1rem 0.5rem;
  background-color: ${props =>
    props.typeName ? props.theme.colors.types[props.typeName] : props.theme.colors.general.GREY};
`;

export const EmptyMember = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
  width: 15rem;
  margin: 1rem 0.5rem;
  border-radius: 1rem;
  background-color: ${props => props.theme.colors.general.GREY};
`;

export const Name = styled.span`
  color: ${props => props.theme.colors.general.WHITE};
  font-size: 1.4rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Move = styled.span`
  display: block;
  width: 100%;
  padding: 0.5rem 0rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  margin: 0.2rem 0;
  background-color: ${props => props.theme.colors.general.WHITE};
  color: ${props => props.theme.colors.general.BLUE};
`;
