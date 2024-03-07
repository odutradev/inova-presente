import React, { useEffect, useState }from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from 'react-toastify';


import { Container, Box, TextContainer, IconContainer } from './styles';
import Loading from '../../components/loading';
import Navinfo from '../../components/navinfo';
import Layout from '../../components/layout';
import user from '../../actions/user';

const Users = () => {
  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    const response = await user.get();
    if (response.error){
        return toast.error("Erro ao carregar usuarios.");
    }
    setUsers(response);
  }

  const deleteUser = async (id) => {
    const send = async () => {
      const response =  await user.remove({id});
      if (response.error) throw error;
      return getUsers();
    }
    toast.promise(send(), {
      pending: `apagando usuario`,
      success: `usuario apagado com sucesso`,
      error: `erro ao apagar usuario`
    })
  }

  useEffect(() => {
    getUsers()
  }, [])

  if (!users) return <Loading layout/>

  return (
    <Layout>
      <Navinfo name={"Usuarios"} subname={"usuarios"} buttonName={"novo usuario"} size={users.length || 0} onButton={() => window.location.href = "/"}/>
      <Container>
          {
            users.map((item, index) => {
              return (
                <Box key={index}>
                  <TextContainer>
                    <h3>{item.name}</h3>
                    <p>descrição: {item.description ? item.description : "sem descrição."}</p>
                    <p>carteira: {item.wallet}</p>
                  </TextContainer>
                  <IconContainer> 
                    <AiOutlineDelete class="icon" size={30} onClick={() => deleteUser(item._id)}/>
                  </IconContainer>
                </Box>
              )
            })
          }
      </Container>
    </Layout>
  );
}

export default Users;
