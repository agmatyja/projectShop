import React from 'react';
import PageContainer from '../PageContainer/PageContainer';
import NavBar from '../../features/NavBar/NavBarContainer';
import Footer from '../../features/Footer/FooterContainer';
import './MainLayout.scss';

const MainLayout = ({ children }) => (
  <div>
    <PageContainer>
      <NavBar />
      <div className="children">
        {children}
      </div>  
      <Footer />
    </PageContainer>
  </div>
);

export default MainLayout;