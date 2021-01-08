// Import all modules
import React from 'react';

export function Title(props) {
  return (
    <React.Fragment>
      <h1>{ props.content }</h1>
    </React.Fragment>
  );
}