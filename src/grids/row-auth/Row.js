// Import module
import React from 'react';

// Import SCSS
import styled from './style.module.scss';

function Row(props) {
  return (
    <React.Fragment>
      <div className={ styled.row }>
        { props.children }
      </div>
    </React.Fragment>
  );
}

export default Row;