import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Provider from './context/provider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

