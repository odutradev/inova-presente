import DropdownComponent from 'react-dropdown';
import 'react-dropdown/style.css';
import React from 'react';

import { Container } from './styles';

const Dropdown = ({options=[], value, setValue, placeholder="Selecione uma opção"}) => {	  
	  
	  return (
		<Container>
			<DropdownComponent placeholderClassName="placeholder" controlClassName={'control'} className='root' menuClassName='menu' options={options} onChange={(x) => {
				setValue( value == x.value ? "" : x.value)
			}} value={value} placeholder={placeholder}/>
		</Container>
	)

}

export default Dropdown

