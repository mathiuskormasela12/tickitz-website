// Import all modules
import React from 'react';

// Import SCSS
import styled from './style.module.scss';

// Import all components
import Navbar from '../Navbar/Navbar';

export function HeroHead(props) {
  return (
    <React.Fragment>
      <div className={ styled.hero }>
        <Navbar />
        {/* <h4>Home</h4> */}
      </div>
    </React.Fragment>
  );
}