import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Container, Box, InputsContainer, Title, ButtonsContainer } from './styles';
import Button from '../../components/button';
import Input from '../../components/input';
import user from '../../actions/user';

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const signIn = async () => {
    if (!email || !password) return toast.error('Preencha todos os campos');
    const response = await user.signIn({ email, password });
    if (response.error) {
      return toast.error(response.error);
    }
    toast.success('Login realizado com sucesso!');
    setTimeout(() => { 
      window.location.href = '/dashboard?reload=true';
    }, 2500)
  }

  const signUp = async () => {
    if (!email || !password || !name) return toast.error('Preencha todos os campos');
    const response = await user.signUp({ email, password, name });
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
          Bem vindo ao <span>InovaPresente</span>
        </Title>
        <InputsContainer>
          <div className="label">
           <label>Nome</label>
          </div>
          <Input placeholder={"nome completo"} value={name} setValue={setName} />
          <div className="label">
           <label>Email</label>
          </div>
          <Input placeholder={"email@email.com"} value={email} setValue={setEmail} />
          <div className="label">
           <label>Email</label>
          </div>
          <Input placeholder={"******"} type="password" value={password} setValue={setPassword} />
          <div className="signup">
            <a href="/">Já tem uma conta? Entre</a>
          </div>
        </InputsContainer>
        <ButtonsContainer>
          <Button name={'CADASTRAR'} text='text' width='100%' onClick={signUp} />
        </ButtonsContainer>
      </Box>
    </Container>
  )
}

export default SignUp;
