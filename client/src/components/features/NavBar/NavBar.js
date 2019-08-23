import React from 'react';
import './NavBar.scss';
import Logo from '../../common/Logo/Logo';
import MainMenu from '../../layout/MainMenu/MainMenu';
class NavBar extends React.Component {

state = {
  links: [
    { path: '/', title: 'Home' },
    { path: '/products/b1', title: 'FAQ' },
    { path: '/products', title: 'Terms of Use' },
    { path: '/contact', title: 'Contact' },
    <i class="fas fa-shopping-bag"></i>
//Download SVGPerfect for when you want to use just one icon as a vector on the desktop or in your own icon workflow.
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