import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

import "./App.css"

const Example = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="https://angry-mccarthy-363a49.netlify.app/"><img src={"img/logo.png"} alt="Company logo" class="logo-brand" /> </NavbarBrand>        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://angry-mccarthy-363a49.netlify.app/" style={{color: '#82868A', textDecoration: 'none'}}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" style={{color: '#82868A', textDecoration: 'none'}}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/" style={{color: 'white', textDecoration: 'none'}} >
                Gallery
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://angry-mccarthy-363a49.netlify.app/contact.html" style={{color: '#82868A', textDecoration: 'none'}}>
                Contact
              </NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
