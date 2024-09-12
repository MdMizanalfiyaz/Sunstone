import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const withAuthProtection = (WrappedComponent) => {
  const AuthProtectedComponent = (props) => {
    const navigate = useNavigate();
    const isAuthenticated = Boolean(localStorage.getItem('authToken')); // Replace with actual auth logic

    useEffect(() => {
      if (!isAuthenticated) {
        navigate('/login');
      }
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return AuthProtectedComponent;
};

withAuthProtection.propTypes = {
  WrappedComponent: PropTypes.elementType.isRequired,
};

export default withAuthProtection;
