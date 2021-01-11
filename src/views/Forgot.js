// Import all modules
import React from 'react';

// Import Grid System
import Row from '../grids/row-auth/Row';
import Col from '../grids/col-auth/Col';

// Import all components
import {
  ComplexSidebar,
  ForgotForm
} from '../components';

function Forgot() {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <ComplexSidebar />
        </Col>
        <Col>
          <ForgotForm />
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Forgot;