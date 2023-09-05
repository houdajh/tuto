
import './App.css';
import { Provider } from 'react-redux';
import Cart from './Cart';
import store from './store';
import React from 'react';

function App() {
  return (
    
    <React.StrictMode>
    <Provider store={store}>
        <Cart />
    </Provider>
  </React.StrictMode>
  );
}

export default App;
