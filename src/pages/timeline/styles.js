import styled from "styled-components";

export const Container = styled.div`
    justify-content: center;
    flex-direction: column;
    align-items: center;
    display: flex;
    height: auto;
    width: 100%;
`

export const Box = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    border-radius: 5px;
    padding: 20px 50px;
    margin: 5px 0;
    display: flex;
    height: auto;
    min-height: 10vh;
    width: 70%;
    
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

        h3{
            margin-bottom: 15px;
        }

        p {
            color: ${({theme}) => theme.colors.secondaryText};
        }
`

export const IconContainer = styled.div`
    color: ${({theme}) => theme.colors.text};
    justify-content: center;
    align-items: center;
    margin: auto 0;
    display: flex;
    width: 10%;

    .icon:hover{
        transition: 0.5s;
        color: red;
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
export const Icon = styled.div`
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    margin: 10px 0;

`

export const Label = styled.label`
    color: ${({theme}) => theme.colors.secondaryText};
    margin: 5px 0;
`

