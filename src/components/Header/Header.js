import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                <Navbar.Brand as={Link} to="/home">Fodig Travel</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav.Link as={Link} to="/myBook">My Booking</Nav.Link>
                <Nav.Link as={Link} to="/otherBook">Others Booking</Nav.Link>
                <Nav.Link as={Link} to="/addNew">Add New Tour</Nav.Link>
                {
                    user?.email ?
                    <Button onClick={logOut} variant="light">Logout</Button>:
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                }
                <Navbar.Text>
                    Signed in as: <a href="#login">{user?.displayName}</a>
                </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;