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
    align-items: start;
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

export const QrcodeBox = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    flex-direction: column;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 50px;
    height: auto;
    width: auto;
    @media (max-width: 767px) { 
        width: 90%;
   }   
   .button{
    margin-top: 50px;
    width: 100%;
    height: auto;
   }
`

export const Label = styled.label`
    color: ${({theme}) => theme.colors.secondaryText};
    margin: 15px 0;
`

export const SliderContainer = styled.div`
    justify-content: center;
    align-items: center;
    margin: 5px 0;
    display: flex;
    width: 100%;
`