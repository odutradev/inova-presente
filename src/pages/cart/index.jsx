import React, { useEffect, useState }from 'react';
import { AiOutlineDelete, AiOutlineEdit} from "react-icons/ai";
import { toast } from 'react-toastify';

import { Container, Box, TextContainer, IconContainer, Label, TextBox, Image, ImageContainer, FiltersContainer } from './styles';
import formatCurrency from '../../services/formatCurrency';
import addHttpsLink from '../../services/addHttpsLink';
import categoryAction from '../../actions/category';
import Dropdown from '../../components/dropdown';
import Loading from '../../components/loading';
import Navinfo from '../../components/navinfo';
import Layout from '../../components/layout';
import cartAction from '../../actions/cart';
import userAction from '../../actions/user';
import CartEditor from './editor';
const Cart = () => {
  const [category, setCategory] = useState(null);
  const [editor, setEditor] = useState(null);
  const [cart, setCart] = useState(null);
  const [filterData, setFilterData] = useState({data: null, filters: {category:"", author:"", priority:"", status:""}})
  const [user, setUser] = useState(null);

  const getData = async () => {
    const [cartResponse, categoryResponse, userResponse] = await Promise.all([
      cartAction.get(),
      categoryAction.get(),
      userAction.get()
    ]);
    if (cartResponse.error || categoryResponse.error || userResponse.error) return toast.error("erro ao carregar informações")
    setFilterData({...filterData, data: cartResponse})
    setCategory(categoryResponse);
    setCart(cartResponse);
    setUser(userResponse);
  }

  const deleteCart = async (id) => {
    const send = async () => {
      const response =  await cartAction.remove({id});
      if (response.error) throw error;
      return getData();
    }
    toast.promise(send(), {
      pending: `apagando item`,
      success: `item apagado com sucesso`,
      error: `erro ao apagar item`
    })
  }

  useEffect(() => {
    getData()
  }, [])

  const updatFilters = () => {
    if (filterData.filters.author) setFilterData({...filterData, data: cart.filter(x => x.author == filterData.filters.author)});
    if (filterData.filters.status) setFilterData({...filterData, data: cart.filter(x => x.status == filterData.filters.status)});
    if (filterData.filters.priority) setFilterData({...filterData, data: cart.filter(x => x.priority == filterData.filters.priority)});
    if (filterData.filters.category) setFilterData({...filterData, data: cart.filter(x => x.category == filterData.filters.category)});
  }

  useEffect(() => {
    updatFilters();
  }, [filterData.filters.author, filterData.filters.category, filterData.filters.status, filterData.filters.priority]);

  if (!cart) return <Loading layout/>
  if (editor != null) return <CartEditor data={cart} id={editor != true ? editor : null} onBack={() => setEditor(null) & getData()} category={category} user={user}/> 

  return (
    <Layout>
      <Navinfo name={"Carrinho"} subname={"items"} buttonName={"adicionar"} size={cart.length || 0} onButton={() => setEditor(true)}/>
      <FiltersContainer>
          <Dropdown options={user.map(x => x.name)} placeholder='responsavel' value={filterData.filters.author} setValue={(x) => setFilterData({...filterData, filters: { ...filterData.filters, author: x}})}/>
          <Dropdown options={category.map(x => x.name)} placeholder='categoria' value={filterData.filters.category} setValue={(x) => setFilterData({...filterData, filters: { ...filterData.filters, category: x}})}/>
          <Dropdown options={['não comprado', 'comprado', 'em analise', 'já temos']} placeholder='status' value={filterData.filters.status} setValue={(x) => setFilterData({...filterData, filters: { ...filterData.filters, status: x}})}/>
          <Dropdown options={['1', '2', '3']} placeholder='prioridade' value={filterData.filters.priority} setValue={(x) => setFilterData({...filterData, filters: { ...filterData.filters, priority: x}})}/>
      </FiltersContainer>
      <Container>
          {
            filterData.data.map((item, index) => {
              return (
                <Box key={index}>
                  <TextContainer  onClick={() => setEditor(item._id)}>
                    <Label >Nome</Label>
                    <TextBox>
                        {item.name ? item.name : "sem nome."}
                    </TextBox>
                    <Label >Descrição</Label>
                    <TextBox>
                        {item.description ? item.description : "sem descrição."}
                    </TextBox>
                    <Label >Status</Label>
                    <TextBox>
                        {item.status ? item.status : "sem status."}
                    </TextBox>
                    <Label >Responsavel</Label>
                    <TextBox>
                        {item.author ? item.author : "sem responsavel."}
                    </TextBox>
                    <Label >Categoria</Label>
                    <TextBox>
                        {item.category ? item.category : "sem categoria."}
                    </TextBox>
                    <Label >Valor</Label>
                    <TextBox>
                        {item.value ? formatCurrency(item.value) : "sem valor."}
                    </TextBox>
                    <Label >Links</Label>
                    <TextBox>
                        {
                          item.links.map((x, index) => {
                            return (
                              <a  key={index} href={addHttpsLink(x)} target='_blanck'>{index} - {x.slice(0, 25)}{x.length > 25 ? '...' : ''}<br></br></a>
                            )
                          })
                        }
                    </TextBox>
                  <Label >Imagens</Label>
                  <ImageContainer>
                    {
                      item.images.map((x, index) => {
                        return (
                          <Image key={index} src={x} alt={'imagem-' + index} onClick={() => window.open(x)}/>
                        )
                      })
                    }
                  </ImageContainer>
                  </TextContainer>
                  <IconContainer> 
                    <AiOutlineDelete class="icon" size={30} onClick={() => deleteCart(item._id)}/>
                  </IconContainer>
                </Box>
              )
            })
          }
      </Container>
    </Layout>
  );
}

export default Cart;