import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import { Container, Background, Menu, MenuSelector, Paste } from './styles';
import routesPath from "../../routes/routesPath";

const Layout = ({ children, initialSelect = 'dashboard' }) => {
  const [select, setSelect] = useState(initialSelect);
  const [stateFolders, setStateFolders] = useState(routesPath);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentRoute = stateFolders.find(menu => menu.route === location.pathname);
    if (currentRoute) {
      setSelect(stateFolders.find(menu => menu.route === location.pathname).route || initialSelect);
    }
  }, [location, stateFolders, initialSelect]);


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
