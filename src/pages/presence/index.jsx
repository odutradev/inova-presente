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

const Presence = () => {
  const [user, setUser] = useState(null);
  const [qrcode, setQrcode] = useState(false)
  const [contentQuality, setContentQuality] = useState(10);
  const [isItApplicable, setIsItApplicable] = useState(10);
  const [facilitator, setFacilitator] = useState(10);
  const [goodTeaching, setGoodTeaching] = useState(10);

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
  function createToken(data) {
    // Converte os dados para JSON
    const jsonData = JSON.stringify(data);
    
    // Codifica os dados em base64
    const token = btoa(jsonData);
    
    return token;
  }

  return (
    <Layout>
        <Container>
            {
              qrcode ? (
                <QrcodeBox>
                <QRCode value={ window.location.origin + "/add-presence/" +createToken({
    id: user._id, 
    date: Date.now(),
    data: {
      contentQuality, isItApplicable, facilitator, goodTeaching
    }
  }) } fgColor={'rgba(13,13,143,1)'}/>
<a href={window.location.origin + "/add-presence/" + createToken({
    id: user._id, 
    date: Date.now(),
    data: {
      contentQuality, isItApplicable, facilitator, goodTeaching
    }
  })}>link</a>
                          </QrcodeBox>
              ): (
                  <Box>

                            <Label>Numa escala de 1 a 10, como você avalia a qualidade do conteúdo lecionado?</Label>
                            <SliderContainer>
                            <Slider value={contentQuality} setValue={setContentQuality}/>
                            </SliderContainer>
                            
                            <Label>Numa escala de 1 a 10, o quanto você considera que o conteúdo é aplicável a você ou seu projeto/negócio?</Label>
                            <SliderContainer>
                            <Slider value={isItApplicable} setValue={setIsItApplicable}/>
                            </SliderContainer>

                            <Label>Numa escala de 1 a 10, como você avalia o conhecimento do (a) facilitador(a) do encontro, no assunto apresentado?</Label>
                            <SliderContainer>
                            <Slider value={facilitator} setValue={setFacilitator}/>
                            </SliderContainer>

                            <Label>Numa escala de 1 a 10, como você avalia a didática do(a) facilitador(a) no assunto apresentado?</Label>
                            <SliderContainer>
                            <Slider value={goodTeaching} setValue={setGoodTeaching}/>
                            </SliderContainer>
                            <div className="button">
                            <Button text='text' width='100%' name={"Exibir QRCODE"} onClick={() => setQrcode(true)}/>
                            </div>
                  </Box>
              )
            }
        </Container>
    </Layout>
  );
}

export default Presence;
/*
<QRCode value={JSON.stringify({
  id: user._id
})} fgColor={'rgba(13,13,143,1)'}/>
*/