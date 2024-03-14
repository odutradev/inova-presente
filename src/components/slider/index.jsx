import React from 'react';
import { Container, ValueContainer } from './styles';

const Slider = ({ value, setValue }) => {
  const handleSliderChange = (event) => {
    setValue(parseInt(event.target.value, 10));
  };

  return (
    <Container>
      <input
        id="myRange"
        className="slider"
        max="10"
        step={1}
        min="0"
        type="range"
        value={value}
        onChange={handleSliderChange}
      />
      <ValueContainer style={{ left: `calc(${(value / 10) * 100}% )` }} value={value} onChange={(e) => setValue(e.target.value)}/>
    </Container>
  );
};

export default Slider;
