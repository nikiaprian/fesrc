import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem('ACCESS_KEY');
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

function ProtectedRouteLogRes() {
  const isAuthenticated = localStorage.getItem('ACCESS_KEY');
  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
}
export {ProtectedRoute,ProtectedRouteLogRes};
