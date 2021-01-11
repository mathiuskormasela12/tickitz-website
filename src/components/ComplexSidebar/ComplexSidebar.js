// Import all modules
import React from 'react';

// Import SCSS
import styled from './style.module.scss';

// Import all components
import { Container } from '../container/Container';
import CircleInstruction from '../CircleInstruction/CircleInstruction';

import img from '../../assets/img/tickitz.svg';

export function ComplexSidebar(props) {
  return (
    <React.Fragment>
      <div className={ styled.sidebar }>
        <Container component="forgot">
          <figure className={ styled.figure }>
            <img src={ img } className={ styled.img } alt="Tickitz Logo"  />
          </figure>
          <div>
            <h1 className={ styled.title }>
              { props.title }
            </h1>
            <p className={ styled.subtitle }>
              { props.subtitle }
            </p>
          </div>
          <CircleInstruction instructions={ props.instructions } />
        </Container>
      </div>
    </React.Fragment>
  );
}