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
  const instructions = [
    'Fill your complete email',
    'Activate your email',
    'Enter your new password',
    'Done'
  ];

  return (
    <React.Fragment>
      <Row>
        <Col>
          <ComplexSidebar 
            title="Lets reset your password" 
            subtitle="To be able to use your account again, please
              complete the following steps." 
            instructions={ instructions }
          />
        </Col>
        <Col>
          <ForgotForm />
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Forgot;