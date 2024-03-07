import React, { useEffect, useState }from 'react';
import { toast } from 'react-toastify';

import { Container, Box, ButtonsContainer } from './styles';
import category from '../../../actions/category';
import Layout from '../../../components/layout';
import Button from '../../../components/button';
import Input from '../../../components/input';

const CategoryEditor = ({data, id, onBack}) => {
    const [values, setValues] = useState({name:"", description:""});

    const sendData = async () => {  
        const send = async () => {
          const response =  id ? await category.update({data: values, id}) : await category.create(values);
          if (response.error) throw error;
          return setTimeout(onBack, 500);
        }
        toast.promise(send(), {
          pending: `${id ? 'atualizando' : 'criando'} categoria`,
          success: `categoria ${id ? 'atualizada' : 'criada'} com sucesso`,
          error: `erro ao ${id ? 'atualizar' : 'criar'} categoria`
        })
    }

    useEffect(() =>  setValues({...data.find(x => x._id == id)}), []);

    return (
        <Layout>
            <Container>
              <Box>
                <Input placeholder={"Nome"} value={values.name} setValue={(x) => setValues({...values, name: x})}/>
                <Input placeholder={"Descrição"} value={values.description} setValue={(x) => setValues({...values, description: x})}/>
                <ButtonsContainer>
                  <Button name={"CANCELAR"} color='error'  text='text' width="50%" onClick={onBack}/>
                  <Button name={id ? "ATUALIZAR" : "CRIAR"}  width="50%" onClick={sendData}/>
                </ButtonsContainer>
              </Box>
            </Container>
        </Layout>
      );
}

export default CategoryEditor;