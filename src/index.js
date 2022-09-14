import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import CircularProgress from '@mui/material/CircularProgress';
import App from './App';
import ContextProvider from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<CircularProgress />}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Suspense>
  </React.StrictMode>
);

