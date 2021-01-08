// Import module
import React from 'react';

// Import SCSS
import styled from './style.module.scss';

function Col(props) {
  return (
    <React.Fragment>
      <div className={ styled.col }>
        { props.children }
      </div>
    </React.Fragment>
  );
}

export default Col;