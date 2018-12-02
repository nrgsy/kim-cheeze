import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {
  Navbar,
  NavItem,
  Nav,
  Image,
  FormGroup,
  FormControl,
  NavDropdown,
  MenuItem,
  Button
} from 'react-bootstrap'

import './Navbar.css';


class KNav extends Component {
  render() {
    return (
      <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/home"><img className="icon-image" src="https://i.imgur.com/Z6Xv4CF.png" /></Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={2}>
          <Link to="/social">Social</Link>
        </NavItem>
        <NavDropdown eventKey={3} title="Teams" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}><Link to="/team/machine-learning">Frontend</Link></MenuItem>
          <MenuItem eventKey={3.2}><Link to="/team/machine-learning">Backend</Link></MenuItem>
          <MenuItem eventKey={3.3}><Link to="/team/machine-learning">devOps</Link></MenuItem>
          <MenuItem eventKey={3.3}><Link to="/team/machine-learning">ML</Link></MenuItem>
          <MenuItem eventKey={3.3}><Link to="/team/machine-learning">Database</Link></MenuItem>
          <MenuItem eventKey={3.3}><Link to="/team/machine-learning">QA</Link></MenuItem>
        </NavDropdown>
      </Nav>
      <Navbar.Form pullRight>
          <FormGroup>
            <FormControl type="text" placeholder="Kim Cheeze" />
          </FormGroup>{' '}
          <Link to="/employee/Thomas-Pech">
            <Button type="submit">Submit</Button>
          </Link>
        </Navbar.Form>
    </Navbar>
    )
  }
}


export default KNav;