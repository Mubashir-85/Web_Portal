import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './Services/auth';

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // User is not authenticated, redirect to login
    return <Navigate to="/login" replace />;
  }

  // User is authenticated, render the children components
  return children;
};

export default ProtectedRoute;
