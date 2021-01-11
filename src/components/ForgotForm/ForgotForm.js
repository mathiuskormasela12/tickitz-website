// Import modules
import React from 'react';
// import { Link } from 'react-router-dom';

// Import all components
import { Container } from '../container/Container';

// Import SCSS
import styled from './style.module.scss';

// Import images
import ticktiz from '../../assets/img/tickitz2.svg';


export function ForgotForm() {

  return (
    <React.Fragment>
      <Container component="login">
        <div className={ styled.flexContainer }>
          <header className={ styled.header}>
            <div className={ styled.img }>
              <img src={ ticktiz } alt="Tickitz" />
            </div>
            <h5>Fill your complete email</h5>
            <p>
              we'll send a link to your email shortly
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
                <button type="button" className={ styled.btn }>Active Now</button>
              </div>
            </form>
          </main>
        </div>
      </Container>
    </React.Fragment>
  );
}