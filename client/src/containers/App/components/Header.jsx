import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Container,
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';

const Header = () => (
  <Navbar expand dark color="dark">
    <Container>
      <Collapse navbar className="w-100">
        <NavLink className="navbar-brand" to="/">Aspirity Web Template</NavLink>
        <Nav navbar className="ml-auto">
          <NavItem className="mr-2">
            <NavLink to="/signin" className="nav-link">Sign In</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Container>
  </Navbar>
);

export default Header;
