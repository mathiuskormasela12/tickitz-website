// Import all modules
import React from 'react';

// Import SCSS
import styled from './style.module.scss';

export function Container(props) {
  return (
    <React.Fragment>
      <div className={ (props.component !== 'login') ? ((props.component !== 'forgot') ? styled.container : styled.containerForgot) : styled.containerLogin}>
        { props.children }
      </div>
    </React.Fragment>
  );
}