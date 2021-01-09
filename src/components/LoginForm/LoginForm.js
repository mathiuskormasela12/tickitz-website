// Import modules
import React from 'react';
import { Link } from 'react-router-dom';

// Import all components
import { Container } from '../container/Container';

// Import SCSS
import styled from './style.module.scss';

// Import images
import facebook from '../../assets/img/facebook.png';
import google from '../../assets/img/google.png';

export function LoginForm() {
  return (
    <React.Fragment>
      <Container component="login">
        <div className={ styled.flexContainer }>
          <header className={ styled.header}>
            <h3>Sign In</h3>
            <p>
              Sign in with your data that you entered during
              your registration
            </p>
          </header>
          <main className={ styled.main }>
            <form>
              <div className={ styled.control }>
                <label htmlFor="email" className={ styled.label }>
                  Email
                </label>
                <div className={ styled.field }>
                  <input type="text" placeholder="Write your email" className={ styled.input } id="email" autoComplete="off" />
                </div>
              </div>
              <div className={ styled.control }>
                <label htmlFor="password" className={ styled.label }>
                  Password
                </label>
                <div className={ styled.field }>
                  <input type="password" placeholder="Write your password" className={ styled.input } id="password" />
                </div>
              </div>
              <div className={ styled.control }>
                <button type="button" className={ styled.btn }>Sign In</button>
              </div>
            </form>
            <p className={ styled.textFoot }>
              Forgot your password? <Link to="/forgot" className={ styled.link }>Reset now</Link>
            </p>
            <div className={ styled.socialMedia}>
              <button type="button" className={styled.socialMediaBtn}>
                <img src={ google } className={ styled.img } alt="Google" />
                <span className={ styled.socialMediaText }>Google</span>
              </button>
              <button type="button" className={styled.socialMediaBtn}>
                <img src={ facebook } className={ styled.img } alt="Facebook" />
                <span className={ styled.socialMediaText }>Facebook</span>
              </button>
            </div>
          </main>
        </div>
      </Container>
    </React.Fragment>
  );
}