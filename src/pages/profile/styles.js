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
    padding: 5vw 5vh;
    height: auto;
    width: 40%;
    @media (max-width: 767px) { 
        width: 90%;
   }   
`

export const Label = styled.label`
    color: ${({theme}) => theme.colors.secondaryText};
    margin: 5px 0;
`

export const SliderContainer = styled.div`
    justify-content: center;
    align-items: center;
    margin: 25px 0;
    display: flex;
    width: 100%;
`