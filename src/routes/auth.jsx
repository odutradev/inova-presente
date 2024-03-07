// auth.js
import { Navigate } from 'react-router-dom';
import React from 'react';

const Auth = ({ element }) => {
  const isAuthenticated = localStorage.getItem('token') !== null;

  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/404" replace />
  );
};

export default Auth;
