import Link from 'next/link';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Layout = ({ children }: any) => {
  return (
    <div>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">...</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className={'nav-link'} href="/">Products</Link>
              <Link className={'nav-link'} href="/categories">Categories</Link>
              <Link className={'nav-link'} href="/users">Users</Link>
              <Link className={'nav-link'} href="/posts">Posts</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        {children}
      </div>
    </div>
  )
}
