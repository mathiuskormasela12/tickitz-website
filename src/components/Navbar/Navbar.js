// Import all modules
import React from 'react';
import { Link } from 'react-router-dom';

// Import SCSS
import styled from './style.module.scss';

// Import all components
import { Container } from '../container/Container';

// Import all images
import tickitz from '../../assets/img/tickitz2.svg';

export default function Navbar(props) {
  return (
    <React.Fragment>
      <nav className={ styled.nav }>
        <Container>
          <div className={ styled.container }>
            <Link to="/" className={ styled.brand }>
              <img src={ tickitz } alt="Tickitz Logo" />
            </Link>
          </div>
        </Container>
      </nav>
    </React.Fragment>
  );
}