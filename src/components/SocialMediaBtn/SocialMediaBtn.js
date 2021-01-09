// Import all modules
import React from 'react';

// Import SCSS
import styled from './style.module.scss';

// Import images
import facebook from '../../assets/img/facebook.svg';
import google from '../../assets/img/google.svg';

function socialMediaBtn() {
  return (
    <React.Fragment>
      <div className={ styled.socialMedia }>
        <div className={ styled.btnAppend }>
          <img src={ google } className={ styled.img } alt="Google" />
          <button type="button" className={styled.socialMediaBtn }>
            <span className={ styled.socialMediaText }>Google</span>
          </button>
        </div>
        <div className={ styled.btnAppend }>
          <img src={ facebook } className={ styled.img } alt="Facebook" />
          <button type="button" className={styled.socialMediaBtn }>
            <span className={ styled.socialMediaText }>Facebook</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default socialMediaBtn;