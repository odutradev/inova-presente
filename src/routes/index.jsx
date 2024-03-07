import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Error from "../pages/error";
import Main from '../pages/main';
import Dashboard from "../pages/dashboard";
import Auth from "./auth";
import Settings from "../pages/settings";
import Cart from "../pages/cart";
import Profile from "../pages/profile";
import Categorys from "../pages/categorys";
import Users from "../pages/users";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/404" element={<Error />} />
        <Route path="/" element={<Main />} />
        
        <Route
          path="/dashboard"
          element={<Auth element={<Dashboard />} />}
        />
        <Route
          path="/dashboard/settings"
          element={<Auth element={<Settings />} />}
        />
        <Route
          path="/dashboard/cart"
          element={<Auth element={<Cart />} />}
        />
        <Route
          path="/dashboard/profile"
          element={<Auth element={<Profile />} />}
        />
        <Route
          path="/dashboard/category"
          element={<Auth element={<Categorys />} />}
        />
        <Route
          path="/dashboard/users"
          element={<Auth element={<Users />} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;


//        <Route path="*" element={<Navigate to="/404" replace />} />