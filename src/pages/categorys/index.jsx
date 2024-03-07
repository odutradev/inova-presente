import React, { useEffect, useState }from 'react';
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from 'react-toastify';


import Loading from '../../components/loading';
import Navinfo from '../../components/navinfo';
import category from '../../actions/category';
import Layout from '../../components/layout';
import CategoryEditor from './editor';
import { Container, Box, TextContainer, IconContainer } from './styles';

const Categorys = () => {
  const [categorys, setCategorys] = useState(null);
  const [editor, setEditor] = useState(null);

  const getCategorys = async () => {
    const response = await category.get();
    if (response.error){
        return toast.error("Erro ao carregar categorias.");
    }
    setCategorys(response);
  }

  const deleteCategory = async (id) => {
    const send = async () => {
      const response =  await category.remove({id});
      if (response.error) throw error;
      return getCategorys();
    }
    toast.promise(send(), {
      pending: `apagando categoria`,
      success: `categoria apagada com sucesso`,
      error: `erro ao apagar categoria`
    })
  }

  useEffect(() => {
    getCategorys()
  }, [])

  if (!categorys) return <Loading layout/>
  if (editor != null) return <CategoryEditor data={categorys} id={editor != true ? editor : null} onBack={() => setEditor(null) & getCategorys()}/> 

  return (
    <Layout>
      <Navinfo name={"Categorias"} subname={"categorias"} buttonName={"adicionar"} size={categorys.length || 0} onButton={() => setEditor(true)}/>
      <Container>
          {
            categorys.map((item, index) => {
              return (
                <Box key={index}>
                  <TextContainer  onClick={() => setEditor(item._id)}>
                    <h3>{item.name}</h3>
                    <p>{item.description ? item.description : "sem descrição."}</p>
                  </TextContainer>
                  <IconContainer> 
                    <AiOutlineDelete class="icon" size={30} onClick={() => deleteCategory(item._id)}/>
                  </IconContainer>
                </Box>
              )
            })
          }
      </Container>
    </Layout>
  );
}

export default Categorys;
