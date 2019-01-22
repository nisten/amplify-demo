import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import footerStyles from './footer.module.scss';

const Footer = () => (
  <footer className={`footer ${footerStyles.footer}`}>
    <iframe src="http://localhost:9000" overflow="hidden" height="100%" width="100%" border="0px"/>
  </footer>
);

Footer.propTypes = {

};
Footer.defaultProps = {

};

export default Footer;
