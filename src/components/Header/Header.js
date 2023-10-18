import React from 'react';
import styles from './Header.module.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../images/logo_kyo_gym.png'

const Header = () => {
    return (
        <div className={styles.homepage}>
            <Navbar expand="lg" className="">
                <Container className={styles.navigation}>
                    <Navbar.Brand href="/">
                        <img src={logo} alt='logo' className={styles.kyoRoundLogo1} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className={styles.navList}>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/about">About</Nav.Link>
                            <NavDropdown title="Practice" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/collections/all">All</NavDropdown.Item>
                                <NavDropdown.Item href="/collections/Recent">
                                    Recent
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/collections/beginner">
                                    Beginner
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/collections/advance">
                                    Advance
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/collections/other">
                                    Other
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/recipe">Recipe</Nav.Link>
                            <Nav.Link href="/news">News</Nav.Link>
                        </Nav>
                        <div className={styles.search}>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
