import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

export default class ControlBar extends Component {

    render (){
        return (
<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">TODO List</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Edit List
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        ); 
    }
}