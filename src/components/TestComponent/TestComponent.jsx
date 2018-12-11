import React from 'react';
import PropTypes from 'prop-types';
import testComponent from './testComponent.module.scss';
import { Jumbotron, Button, Container, Row, Col, Badge } from 'reactstrap';

const TestComponent = () => (
  <Container>
    <Row>
      <Col>
      <Jumbotron fluid>
        <h1 className="display-1">Save 15%</h1>
        <p className="lead">on TurboTax and get an early start</p>
        <hr className="my-2" />
          <Button color="warning">Start for Free</Button>
        <p className="my-2">TurboTax Advantage member? Sign in</p>
      </Jumbotron>
      </Col>
    </Row>
    <Row>
      <Col>
       <Badge color="primary">Canada’s #1 Tax Software. Trusted by Millions of Canadians.</Badge>
      </Col>
    </Row>
  </Container>
);

TestComponent.propTypes = {

};
TestComponent.defaultProps = {

};

export default TestComponent;
