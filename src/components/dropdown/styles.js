
import styled from 'styled-components'

export const Container = styled.div`

  width: 100%;
  height: 40px;
  margin: 0 5px;

    .menu{
      background-color: ${({theme}) => theme.colors.background};
      border: 1px solid transparent;
      border-top-color: rgba(238, 238, 238, 0.1);

      .is-selected{
        background: ${({theme}) => theme.gradient.primary};
      }
      .Dropdown-option{
        background-color: ${({theme}) => theme.colors.background};
        color: ${({theme}) => theme.colors.text};

        &:hover{
          filter: brightness(1.35);
        }
      }
    }
    
    .control{
      background-color: ${({theme}) => theme.colors.background};
      border: none;
      
    }
    
    .placeholder{
      color: ${({theme}) => theme.colors.text}

    }
`;
