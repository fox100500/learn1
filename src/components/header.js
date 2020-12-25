import React, { Component } from 'react'
import { Nav, Container, NavLink, Navbar, Form, Button, FormControl } from 'react-bootstrap'
import logo from './logo192.png';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Blog from '../pages/Blog';

export default class Header extends Component {
    render() {
        return (
            <Router>
                <Navbar collapseOnSelect expands="md" bg="dark" variant="dark" fixed="top">
                    <Container>
                        <Navbar.Brand href="/" >
                            <img
                                src={logo}
                                height="80"
                                width="80"
                                className="d-inline-bloc align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="mr-auto flex-grow-1"  >
                                <NavLink as={Link} to="/">Home</NavLink>
                                <NavLink as={Link} to="/about">About us</NavLink>
                                <NavLink as={Link} to="/contacts">Contacts</NavLink>
                                <NavLink as={Link} to="/blog">Blog</NavLink>
                            </Nav>
                            <Nav className="float-left">
                                <Form inline >
                                    <FormControl
                                        type="text"
                                        placeholder="Search"
                                        className="mr-sm-3" >
                                    </FormControl>
                                    <Button variant="outline-info" > Search </Button>
                                </Form>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contacts" component={Contacts} />
                    <Route exact path="/blog" component={Blog} />
                </Switch>
            </Router>
        )
    }
}