import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Routes from './Routes';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
)
