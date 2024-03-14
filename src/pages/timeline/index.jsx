import React, { useEffect, useState }from 'react';
import { toast } from 'react-toastify';
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineIdcard } from "react-icons/ai";
import { QrReader } from 'react-qr-reader';

import { Container, Box, ButtonsContainer, TextContainer, IconContainer, Icon } from './styles';
import Navinfo from '../../components/navinfo';
import category from '../../actions/classe';
import Layout from '../../components/layout';
import Button from '../../components/button';
import Input from '../../components/input';
import Loading from '../../components/loading';
import TimeEditor from './editor'

const TimelineEditor = ({data, id, onBack, update}) => {
    const [values, setValues] = useState({name:"", description:""});
    const [presence, setPresence] = useState(null);
    const [editor, setEditor] = useState(null);
    const [code, setCode] = useState('No result');

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

    
  const deleteCategory = async (timelineID) => {
    const send = async () => {
      const response =  await category.deleteTimeline({timelineID, id});
      if (response.error) throw error;
      return ;
    }
    update()
    toast.promise(send(), {
      pending: `apagando aula`,
      success: `aula apagada com sucesso`,
      error: `erro ao apagar aula`
    })
  }

    useEffect(() =>  setValues({...data.find(x => x._id == id)}), []);
    useEffect(() =>  setValues({...data.find(x => x._id == id)}), [data]);

    if (!values) return <Loading layout/>
    if (editor != null) return <TimeEditor data={values.timeline} classeID={id} id={editor != true ? editor : null} onBack={() => setEditor(null) & update()}/> 
    if (presence != null) {
     
      return (
        <Layout>
          <Container>
          {
            values.timeline.find( x => x._id == presence).attendanceList.map(y => {
              console.log(y)
              return(
              <Box>
                <p>{y.name}</p>
              </Box>
            )})
          }
          </Container>
        </Layout>
      )
      return (
      <Layout>
        <Container>
          {
            values.find(x => x._id == presence).timeline.map(x => {
              console.log(x)
              return (
                <Box>
                  {x._id}
                </Box>
              )
            })
          }
        </Container>
      </Layout>
    )}

    return (
        <Layout>
            <Navinfo name={"Aulas"} subname={"aulas"} buttonName={"adicionar"} size={values.timeline?.length || 0} onButton={() => setEditor(true)}/>
            <Container>
              {
              values.timeline && values.timeline.map((item, index) => {
                return (
                  <Box key={index}>
                    <TextContainer>
                      <h3>{item.name}</h3>
                      <p>{item.description ? item.description : "sem descrição."}</p>
                      <Icon>
                        <AiOutlineIdcard color='#eeeeee' size={25} onClick={() => setPresence(item._id)}/>
                      </Icon>
                    </TextContainer>
                    <IconContainer> 
                      <AiOutlineDelete class="icon" size={30} onClick={() => deleteCategory(item._id)}/>
                    </IconContainer>
                  </Box>
                )
              })
            }
                  <Button name={"VOLTAR"} color='error'  text='text' width="50%" onClick={onBack}/>
            </Container>
        </Layout>
      );
}

export default TimelineEditor;