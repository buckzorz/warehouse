import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'

export default class NavigationBar extends Component{
    render(){
        return(
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Warehouse</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem eventKey={1} href="#">
                <Link to="/handout">Hand out</Link>
                </NavItem>
                <NavItem eventKey={1} href="#">
                <Link to="/parcels">All Parcels</Link>
                </NavItem>
                <NavItem eventKey={1} href="#">
                <Link to="/addpallet">Add pallet</Link>
                </NavItem>
                <NavItem eventKey={2} href="#">
                <Link to="/addparcel">Add parcel</Link>
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