import React, { useEffect, useState }from 'react';
import { toast } from 'react-toastify';

import { Container, Box, SliderContainer} from './styles';
import Loading from '../../components/loading';
import Layout from '../../components/layout';
import Button from '../../components/button';
import userActions from '../../actions/user';
import Input from '../../components/input';
import Slider from '../../components/slider';

const Profile = () => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const response = await userActions.me();
    if (response.error){
        return toast.error("Erro ao carregar usuario.");
    }
    setUser(response);
  }

  const updateUser = async () => {
    const response = await userActions.update(user);
    if (response.error){
        return toast.error("Erro ao atualizar usuario.");
    }
    setUser(response);
    toast.success("Usuario atualizado com sucesso!")
  }

  useEffect(() => {
    getUser()
  }, [])

  if (!user) return <Loading layout/>;

  return (
    <Layout>
        <Container>
          <Box>
            <Input placeholder={"Nome"} value={user.name} setValue={(x) => setUser({...user, name: x})}/>
            <Input placeholder={"Descrição"} value={user.description} setValue={(x) => setUser({...user, description: x})}/>
            <SliderContainer>
              <Slider value={user.wallet}  setValue={(x) => setUser({...user, wallet: x})}/>
            </SliderContainer>
            <Button name={"ATUALIZAR"}  width={'80%'} onClick={updateUser}/>
          </Box>
        </Container>
    </Layout>
  );
}

export default Profile;
