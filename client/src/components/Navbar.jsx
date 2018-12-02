import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {
  Navbar,
  NavItem,
  Nav,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap'

class KNav extends Component {
  render() {
    return (
      <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/home">Home</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={2}>
          <Link to="/TLC">TLC</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link to="/teams">Team</Link>
        </NavItem>
      </Nav>
      <Navbar.Form pullRight>
          <FormGroup>
            <FormControl type="text" placeholder="Phil Kang" />
          </FormGroup>{' '}
          <Button type="submit">Submit</Button>
        </Navbar.Form>
    </Navbar>
    )
  }
}


export default KNav;