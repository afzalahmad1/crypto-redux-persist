import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { StoreMallDirectorySharp } from '@mui/icons-material';
import store, { persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
      <PersistGate persistor={persistor}>
          <App />
      </PersistGate>
  </Provider>
);

