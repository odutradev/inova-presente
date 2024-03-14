import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import { Container, Background, Menu, MenuSelector, Paste } from './styles';
import userActions from "../../actions/user";
import routesPath from "../../routes/routesPath";
import Loading from "../loading";


const Layout = ({ children, initialSelect = 'dashboard' }) => {
  const [select, setSelect] = useState(initialSelect);
  const [stateFolders, setStateFolders] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);

  const getUser = async () => {
    const response = await userActions.me();
    if (response.error){
        return toast.error("Erro ao carregar usuario.");
    }
    setStateFolders(response.role == 'normal' ? routesPath.normal : routesPath.admin);
    setStateFolders(routesPath.admin)
    setUser(response);
  }


  useEffect(() => {
    getUser()
  }, [])
  const handleMenuItemClick = (menuItem) => {
    navigate(menuItem.route);
    setSelect(menuItem.name);
  };


  return (
    <Container>
      <Menu>
        <div class="buttons">
              {stateFolders.map((menu, subIndex) => {
                const Icon = menu.icon;
                return (
                  <MenuSelector key={subIndex} onClick={() => handleMenuItemClick(menu)} select={menu.route === select}>
                    <Icon class="icon" />
                    <p>{menu.name}</p>
                  </MenuSelector>
                );
              })}
        </div>
      </Menu>
      <Background>
        {children}
      </Background>
    </Container>
  );
};

export default Layout;
