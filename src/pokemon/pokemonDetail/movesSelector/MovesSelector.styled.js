import styled from 'styled-components';

import Button from '../../../styles/Button';

export const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  margin: 1rem;
`;

export const LearnMethods = styled.div`
  display: flex;
`;

export const MoveOptions = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  max-height: 26rem;
  overflow-y: auto;
`;

export const MethodButton = styled(Button)`
  color: ${props => props.theme.colors.general.YELLOW};
  background-color: ${props => props.theme.colors.general.WHITE};
  font-size: 1.2rem;
  text-transform: uppercase;
  border-bottom: 1px solid ${props => (props.selected ? props.theme.colors.general.YELLOW : 'transparent')};
  border-radius: 0;
`;

export const MoveButton = styled(Button)`
  background-color: ${props => props.theme.colors.general.WHITE};
  min-height: 3rem;
`;
