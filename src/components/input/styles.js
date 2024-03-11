
import styled from 'styled-components'

export const Container = styled.input`
  all: unset;
  inset: unset;
  color: ${({ theme }) => theme.colors.secondaryText} !important;
  background-color: ${({ theme }) => theme.colors.background} !important;
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  letter-spacing: 1.5px;
  border-radius: 5px;
  margin: 5px 0;
  outline: none;
  border: none;

  &:hover {
    transform: scale(1.015);
    transition: 0.5s;
    cursor: pointer;
  }

  &:-webkit-autofill {
    background-color: ${({ theme }) => theme.colors.background} !important;
    box-shadow: 0 0 0 1px transparent inset;
  }

  &:focus, &:not(:placeholder-shown) {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
