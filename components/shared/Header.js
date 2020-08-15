import React, { useState } from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import auth0 from '../../services/auth0';

const Login =()=>{
  return (
    <span onClick={auth0.login} className="nav-link port-navbar-link clickable">Login</span>
  )
}

const LogOut =()=>{
  return (
    <span onClick={auth0.logout} className="nav-link port-navbar-link clickable">LogOut</span>
  )
}

const BsNavLink = (props) => {
  const { route, title } = props;

  return (
    <Link href={route}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  );
};

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const {isAuthenticated,user,className}=props;

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className={`port-navbar port-nav-base absolute ${className}`} color="transparent" dark expand="md">
        <NavbarBrand className="port-navbar-brand" href="/">Murtaza Asghar</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/portfolios" title="Portolios" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/blogs" title="Blogs" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/cv" title="CV" />
            </NavItem>
            { !isAuthenticated &&
            <NavItem className="port-navbar-item">
              <Login/>
            </NavItem>
            }
            { isAuthenticated && 
            <NavItem className="port-navbar-item">
              <LogOut/>
            </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
