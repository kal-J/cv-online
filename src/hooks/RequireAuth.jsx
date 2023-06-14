'use client'
 
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useAppSelector } from '../stores/hooks';

const RequireAuth = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = useAppSelector( (state) => {
    return state.user.isAuthenticated
  });

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated]);

  return <>{children}</>;
};

export default RequireAuth;