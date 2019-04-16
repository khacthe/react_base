import React from 'react';
import Header from './Header';
import Footer from './Footer';


const MainLayout = ({ children }) => (
  <div className="main_layout">
    <Header />
    <div className="main">
      {children}
    </div>
    <Footer />
  </div>
)

export default MainLayout;
