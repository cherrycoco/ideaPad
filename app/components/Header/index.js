import React from 'react';
// import { FormattedMessage } from 'react-intl';

// import A from './A';
// import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import H1 from '../H1/index';
import HeaderText from './HeaderText';
// import Banner from './banner.jpg';
// import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <H1>CHERRY'S NOTEPAD</H1>
        <NavBar>
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/notes">Notes</HeaderLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
