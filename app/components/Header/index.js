import React from 'react';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import H1 from '../H1/index';


const Header = () => (
  <div>
    <H1>{"CHERRY'S NOTEPAD"}</H1>
    <NavBar>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/notes">Notes</HeaderLink>
    </NavBar>
  </div>
);

export default Header;
