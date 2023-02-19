import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import AuthProvider from './contexts/AuthContext'
import { theme } from './styles/theme'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <ChakraProvider theme={theme}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ChakraProvider>
  // {/* </React.StrictMode> */ }
);
