import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Container, Box, InputsContainer, Title, ButtonsContainer } from './styles';
import Button from '../../components/button';
import Input from '../../components/input';
import user from '../../actions/user';

const Main = () => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signIn = async () => {
    if (!name || !password) return toast.error('Preencha todos os campos');
    const response = await user.signIn({ name, password });
    return console.log(response)
    if (response.error) {
      return toast.error(response.error);
    }
    toast.success('Login realizado com sucesso!');
    setTimeout(() => { 
      window.location.href = '/dashboard?reload=true';
    }, 2500)
  }

  const signUp = async () => {
    if (!name || !password) return toast.error('Preencha todos os campos');
    const response = await user.signUp({ name, password });
    if (response.error) {
      return toast.error(response.error);
    }
    toast.success('Cadastro realizado com sucesso!');
    setTimeout(() => { 
      window.location.href = '/dashboard?reload=true';
    }, 2500)
  }

  return (
    <Container>
      <Box>
        <Title>
          Bem vindo a <span>InovaPresente</span>
        </Title>
        <InputsContainer>
          <Input placeholder={"nome"} value={name} setValue={setName} />
          <Input placeholder={"senha"} type="password" value={password} setValue={setPassword} />
        </InputsContainer>
        <ButtonsContainer>
          <Button name={'ENTRAR'} text='text' width='100%' onClick={signIn} />
        </ButtonsContainer>
      </Box>
    </Container>
  )
}

export default Main;
