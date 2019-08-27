import React from 'react';
import './NavBar.scss';
import Logo from '../../common/Logo/Logo';
import MainMenu from '../../layout/MainMenu/MainMenu';
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const links = (count) => [
  { path: '/', title: 'Home' },
  { path: '/faq', title: 'FAQ' },
  { path: '/Terms of use', title: 'Terms of Use' },
  { path: '/contact', title: 'Contact' },
  { path: '/cart', title: (<span><FontAwesomeIcon icon={faShoppingBag} /> {count > 0 ? <span>({count})</span> : null}</span>)}
]


class NavBar extends React.Component {
  render() {
    const count = this.props.count;

    return (
      <nav className="navbar">
        <Logo />
        <MainMenu links={links(count)} />
      </nav>
    );
  }

}

export default NavBar;