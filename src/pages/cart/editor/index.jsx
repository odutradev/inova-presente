import { AiOutlineDelete, AiOutlinePlus } from 'react-icons/ai';
import React, { useEffect, useState }from 'react';
import { toast } from 'react-toastify';

import { Container, Box, ButtonsContainer, LabelContainer, Label, InputContainer, IconContainer } from './styles';
import ColorRadio from '../../../components/colorRadio';
import imageUpload from '../../../services/imageUpload';
import Dropdown from '../../../components/dropdown';
import Dropzone from '../../../components/dropzone';
import Layout from '../../../components/layout';
import Slider from '../../../components/slider';
import Button from '../../../components/button';
import Input from '../../../components/input';
import cart from '../../../actions/cart';

const CartEditor = ({data, id, onBack, user, category}) => {
    const [values, setValues] = useState({name:"", description:"", priority: 1, status: "", author:"", value: 0, links:[""], images:[]});

    const sendData = async () => {  
      const send = async () => {
        var links = values.links.filter(x => x.length !== 0);
        var images = await imageUpload(values.images);
        setValues({...values, images, links})
        const response =  id ? await cart.update({data: {...values, links, images}, id}) : await cart.create({...values, links, images});
        if (response.error) throw error;
        return setTimeout(onBack, 500);
      }
      toast.promise(send(), {
        pending: `${id ? 'atualizando' : 'criando'} item`,
        success: `item ${id ? 'atualizada' : 'criada'} com sucesso`,
        error: `erro ao ${id ? 'atualizar' : 'criar'} item`
      })
  }

  if (id) useEffect(() =>  setValues({...data.find(x => x._id == id)}), []);
  
    return (
        <Layout>
            <Container>
              <Box>
                <LabelContainer>
                  <Label>Nome</Label>
                </LabelContainer>
                <Input placeholder={"Nome"} value={values.name} setValue={(x) => setValues({...values, name: x})}/>
                <LabelContainer>
                  <Label>Descrição</Label>
                </LabelContainer>
                <Input placeholder={"Descrição"} value={values.description} setValue={(x) => setValues({...values, description: x})}/>
                <LabelContainer>
                  <Label>Links</Label>
                </LabelContainer>
                { 
                    values.links.map((item, index) => {
                      return (
                        <InputContainer key={ 'i-' + index}>                        
                            <Input key={index} placeholder={'url'} value={item} setValue={(x) => {
                                var links = values.links;
                                links[index] = x;
                                if (links.length == (index + 1)) links = [...links, ""]
                                setValues({...values, links})
                              
                            }} />
                            <IconContainer>
                               <AiOutlineDelete class="icon" size={30} onClick={() => setValues({...values, links: values.links.filter((x, i) => i != index)})}/>
                            </IconContainer>
                        </InputContainer>
                      )
                    })

                }
                <IconContainer>
                    <AiOutlinePlus class="icon-add" size={25} onClick={() => setValues({...values, links: [...values.links, ""]})}/>
                 </IconContainer>
                <LabelContainer>
                  <Label>Nivel de prioridade</Label>
                </LabelContainer>
                  <ColorRadio value={values.priority} setValue={(x) => setValues({...values, priority: x})}/>
                <LabelContainer>
                  <Label>Status</Label>
                </LabelContainer>
                  <Dropdown options={['não comprado', 'comprado', 'em analise', 'já temos']} value={values.status} setValue={(x) => setValues({...values, status: x})}/>
                <LabelContainer>
                  <Label>Responsavel</Label>
                </LabelContainer>
                  <Dropdown options={user.map(x => x.name)} value={values.author} setValue={(x) => setValues({...values, author: x})}/>
                <LabelContainer>
                  <Label>Categoria</Label>
                </LabelContainer>
                  <Dropdown options={category.map(x => x.name)} value={values.category} setValue={(x) => setValues({...values, category: x})}/>
                <LabelContainer>
                  <Label>Valor</Label>
                </LabelContainer>
                <Slider value={values.value} setValue={(x) => setValues({...values, value: x})}/>
                 <LabelContainer>
                  <Label>Imagens</Label>
                </LabelContainer>
                <Dropzone value={values.images} setValue={(x) => setValues({...values, images: x})}/>
                <ButtonsContainer>
                  <Button name={"CANCELAR"} color='error'  text='text' width="50%" onClick={onBack}/>
                  <Button name={id ? "ATUALIZAR" : "CRIAR"}  width="50%" onClick={sendData}/>
                </ButtonsContainer>
              </Box>
            </Container>
        </Layout>
      );
}

export default CartEditor;