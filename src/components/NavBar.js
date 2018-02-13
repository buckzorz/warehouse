import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'

export default class NavigationBar extends Component{
    render(){
        return(
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/" className="link-unstyled">Warehouse</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1}>
                    <Link to="/handout" className="link-unstyled">Hand out</Link>
                </NavItem>
                <NavItem eventKey={2}>
                    <Link to="/addcargo" className="link-unstyled">Add parcel</Link>
                </NavItem>
                <NavItem eventKey={1}>
                    <Link to="/parcels" className="link-unstyled">All Parcels</Link>
                </NavItem>
                <NavDropdown eventKey={3} title="Issues" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar>
        )
    }
}