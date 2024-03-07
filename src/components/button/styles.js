
import styled from 'styled-components'

export const Container = styled.button`
  background: ${({ theme, color}) => theme.gradient[color]};
  color: ${({ theme, text}) => theme.colors[text]};
  padding: ${({ padding }) => padding};
  width: ${({width}) => width};
  letter-spacing: 1.5px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 12px;
  margin: 5px;
  border: none;
  inset: unset;

  &:hover {
      color: ${({ theme }) => theme.colors.text};
      filter: brightness(1.5);
      transform: scale(1.05);
      transition: 0.5s;
      cursor: pointer;
  }
`;
