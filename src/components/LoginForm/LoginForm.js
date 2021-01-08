// Import modules
import React from 'react';

// Import all components
import { Container } from '../container/Container';

// Import SCSS
import styled from './style.module.scss';

export function LoginForm() {
  return (
    <React.Fragment>
      <Container>
        <header className={ styled.header}>
          <h3>Sign In</h3>
        </header>
      </Container>
    </React.Fragment>
  );
}