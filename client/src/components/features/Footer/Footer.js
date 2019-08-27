import React from 'react';
import './Footer.scss';
import MainMenu from '../../layout/MainMenu/MainMenu';
import {links} from '../NavBar/NavBar';

class Footer extends React.Component {
  render() {
    const count = this.props.count;
    
    return (
      <nav className="footer">
        <p>All rights reserved Agnieszka Matyja 2019</p>
        <MainMenu links={links(count)} />
      </nav>
    );
  }
}

export default Footer;