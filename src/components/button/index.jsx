import React from 'react';

import { Container } from './styles';

const Button = ({name, color="primary", text="secondaryText" , padding=" 10px 20px", onClick, width="200px"}) => {

return (
			<Container color={color} padding={padding} onClick={onClick} width={width} text={text}>
				{name}
			</Container>
	)

}

export default Button

