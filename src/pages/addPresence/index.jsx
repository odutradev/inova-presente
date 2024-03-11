import React, { useEffect, useState }from 'react';
import { toast } from 'react-toastify';

import { Container, Box, SliderContainer, Label, QrcodeBox} from './styles';
import Loading from '../../components/loading';
import Layout from '../../components/layout';
import Button from '../../components/button';
import userActions from '../../actions/user';
import Input from '../../components/input';
import Slider from '../../components/slider';
import QRCode from "react-qr-code"

const AddPresence = () => {
  const [user, setUser] = useState(null);
  const [qrcode, setQrcode] = useState(false)

  const getUser = async () => {
    const response = await userActions.me();
    if (response.error){
        return toast.error("Erro ao carregar usuario.");
    }
    setUser(response);
  }


  useEffect(() => {
    getUser()
  }, [])

  if (!user) return <Loading layout/>;

  return (
    <Layout>
        <Container>
            
        </Container>
    </Layout>
  );
}

export default AddPresence;
/*
<QRCode value={JSON.stringify({
  id: user._id
})} fgColor={'rgba(13,13,143,1)'}/>
*/