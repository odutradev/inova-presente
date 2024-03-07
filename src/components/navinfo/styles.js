
import styled from 'styled-components'

export const Container = styled.div`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    min-height: 50px;
    display: flex;
    height: auto;
    width: 100%;
`

export const Box = styled.div`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    display: flex;
    h3{
        color: ${({theme}) => theme.colors.text};
        letter-spacing: 1.5px;
        font-size: clamp(0.75rem, 0.4792rem + 0.8667vw, 1.5625rem);
    }
    `
export const Size = styled.div`
    color: ${({theme}) => theme.colors.secondaryText};
    font-size: clamp(0.625rem, 0.5208rem + 0.3333vw, 0.9375rem);
    border: 0.1px solid rgba(238, 238, 238, 0.35);
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    border-radius: 2px;
    padding: 5px 10px;
    margin: 0 20px;
    display: flex;
`

export const Button = styled.button`
    justify-content: center;
    align-items: center;
    display: flex;
`