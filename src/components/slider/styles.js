import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  margin-top: 25px;
  position: relative;

  .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background-color: #4158d0;
    background-image: ${({ theme }) => theme.gradient.primary};
    outline: none;
    transition: opacity 0.2s;
  }

  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #4c00ff;
    background-color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
  }

  .slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #0093e9;
    background-image: ${({ theme }) => theme.gradient.primary};
    cursor: pointer;
  }
`;

export const ValueContainer = styled.input`
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  transform: translateX(-50%);
  text-align: center;
  position: absolute;
  font-weight: bold;
  border: none;
  width: 100px;
  top: -30px;

`;
