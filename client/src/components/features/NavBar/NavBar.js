import React from 'react';
import './NavBar.scss';
import Logo from '../../common/Logo/Logo';
import MainMenu from '../../layout/MainMenu/MainMenu';
class NavBar extends React.Component {

state = {
  links: [
    { path: '/', title: 'Home' },
    { path: '/products/new', title: 'FAQ' },
    { path: '/products', title: 'Regulamin' },
    { path: '/contact', title: 'Contact' },
  ],
}

render() {
  const { links } = this.state;

  return (
    <nav className="navbar">
      <Logo />
      <MainMenu links={links} />
    </nav>
  );
}

}

export default NavBar;