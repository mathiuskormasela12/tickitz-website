// Import all modules
import React from 'react';

// Import Grid System
import Row from '../grids/row-auth/Row';
import Col from '../grids/col-auth/Col';

// Import all components
import {
  ComplexSidebar,
  RegisterForm
} from '../components';

function Register() {
  const instructions = [
    'Fill your additional details',
    'Activate your account',
    'Done'
  ];

  return (
    <React.Fragment>
      <Row>
        <Col>
          <ComplexSidebar 
            title="Lets build your account" 
            subtitle="To be a loyal moviegoer and access all of features,
your details are required." 
            instructions={ instructions }
          />
        </Col>
        <Col>
          <RegisterForm />
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Register;