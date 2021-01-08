// Import all modules
import React from 'react';

// Import Grid System
import Row from '../grids/row-auth/Row';
import Col from '../grids/col-auth/Col';

// Import all components
import {
  SimpleSidebar,
  LoginForm
} from '../components';

function Login() {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <SimpleSidebar />
        </Col>
        <Col>
          <LoginForm />
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Login;