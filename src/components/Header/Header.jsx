import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import headerStyles from './header.module.scss';
import logo from '../../images/turbotax-logo.svg';

const Header = () => {
  return (
    <header className={`header header-top-transparent ${headerStyles.header}`}>
      <Navbar className="navbar navbar-light navbar-expand-lg navbar-static-top sticky-header">
        <Navbar.Header>
          <Navbar.Brand className="navbar-header">
            <a className="navbar-brand" href="https://turbotax.intuit.ca/tax-software/index.jsp">
              <img src={logo} alt={"logo"} className="logo-default" />
            </a>
            <link rel="preconnect" href="https://turbotax.intuit.ca"></link>
          </Navbar.Brand>
          {/* <Nav className="navbar-nav ml-auto">
            <a className="dropdown nav-item nav-link" key="1" href="https://github.com/AVivero/gatsby-redux-starter">
              <img className="navbar-icon github-icon" src="/gatsby-redux-starter/icons/github.png" alt="GitHub" />
            </a>
            <a className="dropdown nav-item nav-link" key="2" href="mailto:alexviveropelaez@gmail.com">
              <i className="navbar-icon material-icons">
                email
              </i>
            </a>
          </Nav> */}
        </Navbar.Header>
      </Navbar>
    </header>
  );
};

Header.propTypes = {

};
Header.defaultProps = {

};

export default Header;
