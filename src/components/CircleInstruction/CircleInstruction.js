// Import all modules
import React from 'react';

// Import SCSS
import styled from './style.module.scss';

export default function CircleInstruction() {
  const data = [
    'Fill your complete email',
    'Activate your email',
    'Enter your new password',
    'Done'
  ];

  return (
    <React.Fragment>
      <div className={ styled.container }>
        <ul className={ styled.ul }>
          { data.map((item, index) => (
            <React.Fragment key={ index.toString() }>
              <li className={ styled.li }>
                <div className={ styled.circle }>{ index + 1 }</div>
                <p className={ styled.p }>
                  { item }
                </p>
                { index < data.length - 1 ? (
                  <span className={ styled.line }></span>
                ): null }
              </li>
            </React.Fragment>
          )) }
        </ul>
      </div>
    </React.Fragment>
  );
}