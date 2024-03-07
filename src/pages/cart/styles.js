import styled from "styled-components";

export const Container = styled.div`
    flex-direction: column;
    margin-top: 50px;
    align-items: center;
    display: flex;
    height: auto;
    width: 100%;
`

export const Box = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    border-radius: 5px;
    padding: 20px 50px;
    margin: 10px 0;
    display: flex;
    height: auto;
    width: 70%;
    z-index: 5;
    @media (max-width: 767px) { 
        padding: 20px;
        width: 95%;
   }   
    
    &:hover{
        filter: brightness(1.035);
        transform: scale(1.01);
        transition: 0.5s;
    }
    `

export const TextContainer = styled.div`
    flex-direction: column;
    display: flex;
    height: 100%;
    width: 90%;
`

export const IconContainer = styled.div`
    color: ${({theme}) => theme.colors.text};
    justify-content: center;
    align-items: center;
    margin: 5px 0;
    display: flex;
    width: 10%;

    .icon-edit, .icon {
        margin: 10px 0;
    }

    .icon:hover{
        transition: 0.5s;
        color: red;
    }
    .icon-edit:hover{
        transition: 0.5s;
        color: blue;
    }
`

export const Label = styled.label`
    color: ${({theme}) => theme.colors.secondaryText};
    font-weight: 600;
    margin-bottom: 5px;
    margin-top: 10px;
    `

export const TextBox = styled.div`
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.secondaryText};
    border-radius: 5px;
    padding: 15px;
    margin: 5px 0;
    height: auto;
    width: 100%;
    z-index: 9;

    a {
        margin: 5px;
    }   
`

export const Image = styled.img`
  border-radius: 5px;
  object-fit: cover;
  height: 200px;
  margin: 0 5px;
  width: 200px;
  z-index: 10;
`;

export const ImageContainer = styled.div`
    justify-content: left;
    flex-direction: row;
    align-items: center;
    margin: 15px 0;
    display: flex;
`

export const FiltersContainer = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    margin-top: 50px;
    margin: 0 auto;
    display: flex;
    padding: 20px;
    height: auto;
    width: 60%;
    @media (max-width: 1050px) { 
        flex-wrap: wrap;
        padding: 10px;
   }   
`