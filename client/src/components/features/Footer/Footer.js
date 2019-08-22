import React from 'react';
//import './Footer.scss';

import MainMenu from '../../layout/MainMenu/MainMenu';
class Footer extends React.Component {

state = {
  links: [
    'Made by Agnieszka Matyja',
    { path: '/', title: 'Home' },
    { path: '/products/new', title: 'FAQ' },
    { path: '/products', title: 'Regulamin' },
    { path: '/contact', title: 'Contact' },
  ],
}

render() {
  const { links } = this.state;

  return (
    <nav className="footer">
      <p>All rights reserved Agnieszka Matyja 2019</p>
      <MainMenu links={links} />
    </nav>
  );
}

}

export default Footer;