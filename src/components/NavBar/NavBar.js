import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';
import './NavBar.css';


class NavBar extends Component {
    render() {
        return (
            <Navbar fluid="true" default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <span className='brand-header'>Spandex Guardians: Celestial Force</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem className="text-center" eventKey={1} componentClass={Link} href="/" to="/">
                            Home
                        </NavItem>
                        <NavItem className="text-center" eventKey={2} componentClass={Link} href="/actors" to="/actors">
                            Actors
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;