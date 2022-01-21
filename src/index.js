import React from 'react';
import { render } from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';

const rootElement = document.getElementById('root');

render(
  <>
    <CssBaseline />
    <App />
  </>,
  rootElement
);
