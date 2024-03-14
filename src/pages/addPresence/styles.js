import styled from "styled-components";

export const Container = styled.div`
    justify-content: center;

    align-items: center;
    display: flex;
    height: 100%;
    width: 100%;
`

export const Box = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    flex-direction: column;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 50px;
    height: auto;
    width: 40%;
    @media (max-width: 767px) { 
        width: 90%;
   }   
   .button{
    margin-top: 50px;
    width: 100%;
    height: auto;
   }
`

export const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
`