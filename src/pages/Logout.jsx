import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/userContext';

const Logout = () => {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user context
    setCurrentUser(null);
    // Navigate to login page
    navigate('/login');
  }, []);

  return null;
};

export default Logout;
