import styled from "styled-components";

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    height: 100vh;
    display: flex;
    width: 100%;
`

export const Box = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    border: 0.1px solid rgba(254,32,32, 0.4);
    border-radius: 5px;
    padding: 5% 10%;
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
export const BoxDataContainer = styled.div`
    background-color: ${({theme}) => theme.colors.secondaryBackground};
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    border-radius: 2px;
    margin: 5vh 10px;
    text-align: center;
    display: flex;
    height: 15vh;
    width: 25vw;
    padding: 1%;

    width: 20%;

    p:nth-child(1){
        background: ${({theme}) => theme.gradient.text};
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        filter: brightness(1.5);
        letter-spacing: 1.6px;
        font-weight: 700;
        font-size: clamp(1.125rem, 0.6667rem + 1.4667vw, 2.5rem);
    }
    p:nth-child(2){
        color: ${({theme}) => theme.gradient.secondaryText};
        letter-spacing: 1.6px;
        font-weight: 400;
        font-size: 15px;

    }

    @media (max-width: 800px) { 
        margin: 25px 10px;
        width: 30%;
    }  

    `
export const DataContainer = styled.div`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    height: auto;
    width: auto;
    @media (max-width: 800px) { 
        flex-wrap: wrap;
    }  
`

export const Row = styled.div`
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    margin: 2.5vh 0;
    display: flex;
    @media (max-width: 800px) { 
       flex-direction: column;
    }  
`