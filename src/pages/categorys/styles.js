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
    margin: 5px 0;
    display: flex;
    height: auto;
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