import { toast } from 'react-toastify';
import React from 'react';

import { Box, Container } from './styles';
import Layout from '../../components/layout';
import Button from '../../components/button';
import user from '../../actions/user';

const Settings = () => {

  const logout = async () => {
    toast.success("deslogando");
    localStorage.removeItem("token");
    setTimeout(window.location.href = "/", 500)
  }
  const remove = async () => {
    toast.warning("apagando informações")
    const userResponse = await user.me();
    if (userResponse.error) return toast.error("erro ao apagar informações")
    const response = await user.remove({id: userResponse._id});
    if (response.error) return toast.error("erro ao apagar informações")
    toast.success("informações apagadas com sucesso")
    localStorage.removeItem("token");
    setTimeout(window.location.href = "/", 500)

  }

  return (
    <Layout>
      <Container>
          <Box>
              <Button name={"APAGAR MINHA CONTA"} onClick={remove} width='60%' text='text' color='error'/>
              <Button name={"DESLOGAR"} onClick={logout} width='60%' text='text'/>
          </Box>
      </Container>
    </Layout>
  );
}

export default Settings;
