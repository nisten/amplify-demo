import React from 'react';
import PropTypes from 'prop-types';
import testComponent from './testComponent.module.scss';
import { Jumbotron, Button, Container, Row, Col, Badge } from 'reactstrap';

const TestComponent = () => (
  <Container>
    <Row>
      <Col>
      <Jumbotron fluid className="jumbo">
        <Container fluid className="text-center">
        <h1 className="display-2">Save 15%</h1>
        <p className="lead">on TurboTax and get an early start</p>
          <Button color="warning" >Start for Free</Button>
        <p className="my-2">TurboTax Advantage member? Sign in</p>
        </Container>
      </Jumbotron>
      </Col>
    </Row>
    <Row>
      <Col className="text-center">
       <Badge color="secondary">Canada’s #1 Tax Software. Trusted by Millions of Canadians.</Badge>
      </Col>
    </Row>
    <Row>
      <Col>
      <Jumbotron fluid>
        <Container fluid className="text-center">
        <h4 className="display-2">Handles all tax situations</h4>
        <p className="lead">TurboTax automatically searches over 400 tax deductions and credits to make sure you get your maximum refund.</p>

        </Container>
      </Jumbotron>
      </Col>
    </Row>
  </Container>
);

TestComponent.propTypes = {

};
TestComponent.defaultProps = {

};

export default TestComponent;
