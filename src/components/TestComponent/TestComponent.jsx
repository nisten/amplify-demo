import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import testComponent from './testComponent.module.scss';
import { Jumbotron, Button, Container, Row, Col, Badge, Media} from 'reactstrap';

const TestComponent = () => (
<Container>
<iframe src="https://bootstrapshuffle.com/preview?project=89035eb139a9cf99fefa141199baef832169d8c5&page=index.html" heigh="100%" width="100%" border="0"/>
  
</Container>
);

TestComponent.propTypes = {

};
TestComponent.defaultProps = {

};

export default TestComponent;