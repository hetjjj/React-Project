import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { renderRoutes } from 'react-router-config';

const AppRootPage = (children) => {
  return (
    <div>
      <Header />
      {renderRoutes(children.route.routes)}
      <Footer />
    </div>
  )
}

export default AppRootPage;
