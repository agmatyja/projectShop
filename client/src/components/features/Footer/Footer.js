import React from 'react';
//import './Footer.scss';

import MainMenu from '../../layout/MainMenu/MainMenu';
class Footer extends React.Component {

state = {
  links: [
    { path: '/', title: 'Home' },
    { path: '/products/new', title: 'Add product' },
    { path: '/products', title: 'Products' },
    { path: '/contact', title: 'Contact' },
  ],
}

render() {
  const { links } = this.state;

  return (
    <nav className="footer">
      
      <MainMenu links={links} />
    </nav>
  );
}

}

export default Footer;