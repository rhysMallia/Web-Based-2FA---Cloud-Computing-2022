import React from 'react';
import HeaderTesting from '../components/layout/HeaderTesting';
//import Footer from '../components/layout/Footer';

const LayoutTestingDefault = ({ children }) => (
  <>
    <HeaderTesting navPosition="right" className="reveal-from-bottom" />
    <main className="site-content">
      {children}
    </main>

  </>
);

export default LayoutTestingDefault;  