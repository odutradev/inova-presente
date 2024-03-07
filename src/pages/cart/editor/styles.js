import styled from "styled-components";

export const Container = styled.div`
    flex-direction: column;
    align-items: center;
    padding: 2.5%;
    display: flex;
    height: auto;
    width: 100%;
`

export const Box = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
    align-items: center;
    padding: 20px 50px;
    display: flex;
    height: auto;
    width: 75%;
    @media (max-width: 767px) { 
        width: 90%;
   }  
`
export const ButtonsContainer = styled.div`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    margin: 15px 0;
    display: flex;
    width: 80%;
`

export const Label = styled.label`
    color: ${({theme}) => theme.colors.secondaryText};
    margin-bottom: 5px;
    margin-top: 10px;
`

export const LabelContainer = styled.div`
    justify-content: left;
    display: flex;
    width: 100%;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    align-items: center;
`

export const IconContainer = styled.div`
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.text};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-left: 10px;
    margin: 0 10px;
    display: flex;
    padding: 7px;
    height: 100%;
    width: auto;

    .icon:hover{
        transition: 0.5s;
        color: red;
    }
    .icon-add:hover{
        transition: 0.5s;
        color: #02f479;
    }
`