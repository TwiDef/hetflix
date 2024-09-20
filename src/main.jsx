import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { CssBaseline } from '@mui/material';

import App from './components/ui/App';

import 'bear-react-carousel/dist/index.css';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>
)
