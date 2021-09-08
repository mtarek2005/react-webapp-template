import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand as={Link} to="/">hi</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/user">Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/user" component={User} />
        <Route path='/'
          render={({ staticContext }) => {
            if (staticContext) {
              staticContext.statusCode = 404
            }
            return <div className="Not-Found Main-body">404 Page Not Found</div>
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
