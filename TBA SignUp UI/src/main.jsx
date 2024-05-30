import React from 'react'
import ReactDOM from 'react-dom/client'
import Loginpassword from './Loginpassword'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Loginpassword />
    </Provider>
  </React.StrictMode>,
)
