import React from 'react';
import './NavBar.scss';
import Logo from '../../common/Logo/Logo';
import MainMenu from '../../layout/MainMenu/MainMenu';
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class NavBar extends React.Component {
state = {
  links: [
    { path: '/', title: 'Home' },
    { path: '/products/b1', title: 'FAQ' },
    { path: '/products', title: 'Terms of Use' },
    { path: '/contact', title: 'Contact' },
    { path: '/cart', title: (<FontAwesomeIcon icon={faShoppingBag} />)}
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