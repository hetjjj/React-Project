import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import './App.css';

const App = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default App;
