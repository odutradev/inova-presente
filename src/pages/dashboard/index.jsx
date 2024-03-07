import React, { useEffect, useState } from 'react';
import { Container, Box, FiltersContainer, DataContainer, BoxDataContainer, Row} from './styles';
import formatCurrency from '../../services/formatCurrency';
import addHttpsLink from '../../services/addHttpsLink';
import categoryAction from '../../actions/category';
import Dropdown from '../../components/dropdown';
import Loading from '../../components/loading';
import Layout from '../../components/layout';
import cartAction from '../../actions/cart';
import GraficoPizza from './charts/pizza';
import userAction from '../../actions/user';

const Dashboard = () => {
  const [filterData, setFilterData] = useState({ data: null, filters: { category: "", author: "", priority: "", status: "" } });
  const [category, setCategory] = useState(null);
  const [cart, setCart] = useState(null);
  const [user, setUser] = useState(null);
  const [values, setValues] = useState({
    singleValues: [
      { value: '0', description: "Itens no carrinho" },
      { value: "0", description: "Valor total carrinho" },
      { value: "0", description: "Valor pago" },
      { value: '0', description: "Valor pendente" },
      { value: "0", description: "Dinheiro disponivel" },
    ]
  });

  const getData = async () => {
    try {
      const [cartResponse, categoryResponse, userResponse] = await Promise.all([
        cartAction.get(),
        categoryAction.get(),
        userAction.get()
      ]);
      
      if (cartResponse.error || categoryResponse.error || userResponse.error) {
        console.error("Erro ao carregar informações");
        return;
      }

      setCart(cartResponse);
      setCategory(categoryResponse);
      setUser(userResponse);
      setFilterData({ data: cartResponse, filters: { category: "", author: "", priority: "", status: "" } });
    } catch (error) {
      console.error("Erro durante a obtenção de dados", error);
    }
  }

  const updateFilters = () => {
    if (!cart || !filterData.data) {
      console.error('Dados de carrinho nulos ou indefinidos.');
      return;
    }

    const filteredData = cart.filter((x) => (
      (!filterData.filters.priority || x.priority == filterData.filters.priority) &&
      (!filterData.filters.category || x.category === filterData.filters.category) &&
      (!filterData.filters.author || x.author === filterData.filters.author) &&
      (!filterData.filters.status || x.status === filterData.filters.status)
    ));

    const valuesData = {
      count: filteredData.length,
      valueCount: filteredData.reduce((acc, x) => acc + x.value, 0),
      payCount: filteredData.reduce((acc, x) => (x.status === "comprado" ? acc + x.value : acc), 0),
      pendingCount: filteredData.reduce((acc, x) => ((x.status === "não comprado" || x.status === "em analise") ? acc + x.value : acc), 0),
    };

    setFilterData({...filterData, data: filteredData});
    setValues({
      singleValues: [
        { value: valuesData.count, description: "Itens no carrinho" },
        { value: formatCurrency(valuesData.valueCount), description: "Valor total carrinho" },
        { value: formatCurrency(valuesData.payCount), description: "Valor pago" },
        { value: formatCurrency(valuesData.pendingCount), description: "Valor pendente" },
        { value: formatCurrency(user.reduce((acc, x) => acc + x.wallet, 0)), description: "Dinheiro disponível" },
      ],
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const reloadParam = params.get('reload');

    if (reloadParam) {
      params.delete('reload');
      const newUrl = `${window.location.pathname}`;
      window.history.replaceState({}, document.title, newUrl);
      window.location.reload();
    }

    getData();
  }, []);

  useEffect(() => {
    updateFilters();
  }, [filterData.filters.author, filterData.filters.category, filterData.filters.status, filterData.filters.priority, cart]);

  if (!filterData.data) return <Loading layout/>;

  return (
    <Layout>
      <FiltersContainer>
        <Dropdown options={user.map(x => x.name)} placeholder='responsavel' value={filterData.filters.author} setValue={(x) => setFilterData({...filterData, filters: { ...filterData.filters, author: x}})}/>
        <Dropdown options={category.map(x => x.name)} placeholder='categoria' value={filterData.filters.category} setValue={(x) => setFilterData({...filterData, filters: { ...filterData.filters, category: x}})}/>
        <Dropdown options={['não comprado', 'comprado', 'em analise', 'já temos']} placeholder='status' value={filterData.filters.status} setValue={(x) => setFilterData({...filterData, filters: { ...filterData.filters, status: x}})}/>
        <Dropdown options={['1', '2', '3']} placeholder='prioridade' value={filterData.filters.priority} setValue={(x) => setFilterData({...filterData, filters: { ...filterData.filters, priority: x}})}/>
      </FiltersContainer>
      <DataContainer>
        {values.singleValues?.map((item, i) => (
          <BoxDataContainer key={i}>
            <p>{item.value}</p>
            <p>{item.description}</p>
          </BoxDataContainer>
        ))}
      </DataContainer>
      <Row>
      <GraficoPizza
    name={'Quantidade por Status'}
    data={[
      ['Status', 'Quantidade'],
      ['não comprado', filterData.data.filter(x => x.status === 'não comprado').length || 0],
      ['comprada', filterData.data.filter(x => x.status === 'comprado').length || 0],
      ['em analise', filterData.data.filter(x => x.status === 'em analise').length || 0],
      ['já temos', filterData.data.filter(x => x.status === 'já temos').length || 0],
    ]}
  />
  <GraficoPizza
    name={'Valor por Status'}
    data={[
      ['Status', 'Quantidade'],
      ['não comprado', filterData.data.filter(x => x.status === 'não comprado').reduce((acc, x) => acc + x.value, 0) || 0],
      ['comprado', filterData.data.filter(x => x.status === 'comprado').reduce((acc, x) => acc + x.value, 0) || 0],
      ['em analise', filterData.data.filter(x => x.status === 'em analise').reduce((acc, x) => acc + x.value, 0) || 0],
      ['já temos', filterData.data.filter(x => x.status === 'já temos').reduce((acc, x) => acc + x.value, 0) || 0],
    ]}
  />
      </Row>
      <Row>
  <GraficoPizza
    name={'Itens por Prioridade'}
    data={[
      ['Prioridade', 'Quantidade'],
      ['1 - tranquilo', filterData.data.filter(x => x.priority === 1).length],
      ['2 - médio', filterData.data.filter(x => x.priority === 2).length],
      ['3 - prioridade', filterData.data.filter(x => x.priority === 3).length],
    ]}
  />
  <GraficoPizza
    name={'Valor por Prioridade'}
    data={[
      ['Prioridade', 'Valor'],
      ['1 - tranquilo', filterData.data.filter(x => x.priority === 1).reduce((acc, x) => acc + x.value, 0)],
      ['2 - médio', filterData.data.filter(x => x.priority === 2).reduce((acc, x) => acc + x.value, 0)],
      ['3 - prioridade', filterData.data.filter(x => x.priority === 3).reduce((acc, x) => acc + x.value, 0)],
    ]}
  />
</Row>
<Row>
  <GraficoPizza
    name={'Itens por Categoria'}
    data={[
      ['Categoria', 'Quantidade'],
      ...Array.from(new Set(filterData.data.filter(x => x.category).map(x => x.category))).map(category => [category, filterData.data.filter(x => x.category === category).length]),
    ]}
  />
  <GraficoPizza
    name={'Valor por Categoria'}
    data={[
      ['Categoria', 'Valor'],
      ...Array.from(new Set(filterData.data.filter(x => x.category).map(x => x.category))).map(category => [category, filterData.data.filter(x => x.category === category).reduce((acc, x) => acc + x.value, 0)]),
    ]}
  />
</Row>
<Row>
  <GraficoPizza
    name={'Itens por Usuário'}
    data={[
      ['Usuário', 'Quantidade'],
      ...Array.from(new Set(filterData.data.filter(x => x.author).map(x => x.author))).map(author => [author, filterData.data.filter(x => x.author === author).length]),
      ['Sem Usuário', filterData.data.filter(x => !x.author).length],
    ]}
  />
  <GraficoPizza
    name={'Valor por Usuário'}
    data={[
      ['Usuário', 'Valor'],
      ...Array.from(new Set(filterData.data.filter(x => x.author).map(x => x.author))).map(author => [author, filterData.data.filter(x => x.author === author).reduce((acc, x) => acc + x.value, 0)]),
      ['Sem Usuário', filterData.data.filter(x => !x.author).reduce((acc, x) => acc + x.value, 0)],
    ]}
  />
</Row>
    </Layout>
  );
}

export default Dashboard;
