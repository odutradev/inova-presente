import React, { useEffect, useState }from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

import { Container, Box, ButtonContainer} from './styles';
import Dropdown from '../../components/dropdown';
import Loading from '../../components/loading';
import Layout from '../../components/layout';
import Button from '../../components/button';
import userActions from '../../actions/user';
import Input from '../../components/input';
import Slider from '../../components/slider';
import QRCode from "react-qr-code"
import classe from '../../actions/classe';

const AddPresence = () => {
  const [user, setUser] = useState(null);
  const [noAutorized, setNotAutorized] = useState(false);
  const { id } = useParams();
  const [classeSelect, setClasseSelect] = useState(null);
  const [timelineSelect, setTimelineSelect] = useState(null);
  const [classes, setClasses] = useState([]);
  const [addedPresence, setAddedPresence] = useState(false);

  const decodeToken = (token) => JSON.parse(atob(token));

  const getClassesAndUser = async () => {
    const responseUser = await userActions.me();
    if (responseUser.error) return toast.error("Erro ao carregar usuario.");
    if (responseUser.role != 'admin') return setNotAutorized(true);
    setUser(responseUser);
    const classesResponse = await classe.get();
    if (classesResponse.error) return toast.error("Erro ao carregar turmas e aulas.")
    setClasses(classesResponse);
    var localTimelineSelect = localStorage.getItem('timelineSelect');
    var localClasseSelect = localStorage.getItem('classeSelect');
    var findClasse = classesResponse.find(y => y.name == localClasseSelect);
    if (findClasse){
      setClasseSelect(localClasseSelect);
      var findTimeline = findClasse.timeline.find(x => x.name == localTimelineSelect);
      if (findTimeline) setTimelineSelect(localTimelineSelect);
    }
  }

  const addpresence = async () => {
    if (!classeSelect || !timelineSelect) return toast.error("Preencha todos os campos");
    const decoded = decodeToken(id);
    var findClass = classes.find(y => y.name == classeSelect);
    var findTimeline = findClass.timeline.find(x  => x.name == timelineSelect)
    const send = async () => {
      const response = await classe.addPresence({
        teacher: user,
        data: decoded,
        classeID: findClass._id,
        timelineID: findTimeline._id
  
      })
      if (response.error) throw error;
      return setAddedPresence(true);
    }
    toast.promise(send(), {
      pending: `adicionando presença`,
      success: `presença adicionada com sucesso`,
      error: `erro ao adicionar presença`
    })

  }

  useEffect(() => {
    if (timelineSelect != null) localStorage.setItem('timelineSelect', timelineSelect);
    if (classeSelect != null) localStorage.setItem('classeSelect', classeSelect);
  },[classeSelect, timelineSelect])

  useEffect(() => {
    getClassesAndUser();
  }, [id])

  if (!id) return <Loading layout/>;
  if (addedPresence) return<Layout><Container><Box><p>Presença adicionada com sucesso.</p></Box></Container></Layout>;

  return (
    <Layout>
        <Container>
            {
              noAutorized ?
              (
                <Box>
                  <p>acesso não autorizado</p>
                </Box>
              )
              :
              (
                <Box>
                  <Dropdown options={classes.map(x => x.name)} value={classeSelect} setValue={setClasseSelect} placeholder='selecione a turma'/>
                  <Dropdown options={ classeSelect ? classes.find(y => y.name == classeSelect).timeline.map(x => x.name) : []} value={timelineSelect} setValue={setTimelineSelect} placeholder='selecione a aula'/>
                  <ButtonContainer>
                    <Button name={'SALVAR'} onClick={addpresence} text='text'/>
                  </ButtonContainer>
                </Box>
              )
            }
        </Container>
    </Layout>
  );
}

export default AddPresence;