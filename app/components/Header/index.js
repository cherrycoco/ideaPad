import React from 'react';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import H1 from '../H1/index';
import FloatLeft from './FloatLeft';
import Wrapper from './Wrapper';


const Header = () => (
  <Wrapper>
    <FloatLeft>
      <H1>IdeaPad</H1>
    </FloatLeft>
    <NavBar>
      <HeaderLink to="/">Home</HeaderLink>
      <HeaderLink to="/ideas">Notes</HeaderLink>
    </NavBar>
    <br />
  </Wrapper>
);

export default Header;
