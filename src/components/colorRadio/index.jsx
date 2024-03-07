import React from 'react';

import { Container, Color } from './styles';

const ColorRadio = ({value, setValue, padding="7px 2.5px", width="100%"}) => {
return (
			<Container padding={padding} width={width}>
				<Color color='success' value={1 <= value} onClick={()=> setValue(1)}/>
				<Color color='warning' value={2 <= value} onClick={()=> setValue(2)}/>
				<Color color='error' value={3 <= value} onClick={()=> setValue(3)}/>
			</Container>
	)

}

export default ColorRadio

