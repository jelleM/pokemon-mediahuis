import styled from 'styled-components';

const Button = styled.button`
  padding: 1rem;
  border-radius: 1rem;
  border: none;

  &:hover,
  &:focus {
    cursor: pointer;
    outline: transparent;
    filter: brightness(0.9);
  }
`;

export default Button;
