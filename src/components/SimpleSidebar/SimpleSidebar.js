// Import all modules
import React from 'react';

// Import SCSS
import styled from './style.module.scss';

import img from '../../assets/img/tickitz.svg';

export function SimpleSidebar() {
  return (
    <React.Fragment>
      <div className={ styled.sidebar }>
        <figure className={ styled.figure }>
          <img src={ img } className={ styled.img } alt="Tickitz Logo"  />
          <figcaption className={ styled.caption }>
            wait, watch, wow!
          </figcaption>
        </figure>
      </div>
    </React.Fragment>
  );
}