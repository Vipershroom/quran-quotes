import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import './styles/index.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <main>
      <Header />
    </main>
  </React.StrictMode>
);

