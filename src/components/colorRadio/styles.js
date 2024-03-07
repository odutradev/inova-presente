
import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({theme}) => theme.colors.background};
  padding: ${({ padding }) => padding};
  width: ${({width}) => width};
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  display: flex;
  margin: 5px 0;
  height: 40px;
  `;

export const Color = styled.div`
  background: ${({theme, value, color}) => value ? theme.gradient[color] : '#101010'};
  opacity: ${({value}) => value ? 1 : 0.5};
  border-radius: 2.5px;
  margin: 0 2.5px;
  display: flex;
  height: 100%;
  width: 100%;
  &:hover {
    background: ${({theme, color}) => theme.gradient[color]};
    opacity: ${({value}) => value ? 1 : 0.5};
    cursor: pointer;
    transition: 0.5s;
  }

`