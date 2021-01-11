// Import modules
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Import all components
import { Container } from '../container/Container';
import SocialMediaBtn from '../SocialMediaBtn/SocialMediaBtn';

// Import SCSS
import styled from './style.module.scss';

// Import images
import ticktiz from '../../assets/img/tickitz2.svg';

// Import Context
import Context from '../../Context';

const { AppContext } = Context;

export function LoginForm() {
  const state = useContext(AppContext);

  return (
    <React.Fragment>
      <Container component="login">
        <div className={ styled.flexContainer }>
          <header className={ styled.header}>
            <div className={ styled.img }>
              <img src={ ticktiz } alt="Tickitz" />
            </div>
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
                  <div className={ styled.append}>
                    <div className={ styled.eye } onClick={() => state.showPassword()}>
                      { !state.show ? (
                        <React.Fragment>
                          <div className={ styled.imgEye }>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#A0A3BD" className="bi bi-eye" viewBox="0 0 16 16">
                              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                            </svg>
                          </div>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <div className={ styled.imgEye }>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#5F2EEA" className="bi bi-eye-slash" viewBox="0 0 16 16">
                              <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
                              <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299l.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
                              <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884l-12-12 .708-.708 12 12-.708.708z"/>
                            </svg>
                          </div>
                        </React.Fragment>
                      ) }
                    </div>
                    <input type={ state.show ? 'text' : 'password' } placeholder="Write your password" className={ styled.input } id="password" />
                  </div>
                </div>
              </div>
              <div className={ styled.control }>
                <button type="button" className={ styled.btn }>Sign In</button>
              </div>
            </form>
            <p className={ styled.textFoot }>
              Forgot your password? <Link to="/forgot" className={ styled.link }>Reset now</Link>
            </p>
            <div className={ styled.hrContainer }>
              <div className={ styled.hr }>
                <hr />
              </div>
              <div className={ styled.hr }>
                <p>Or</p>
              </div>
              <div className={ styled.hr }>
                <hr />
              </div>
            </div>
            <SocialMediaBtn />
          </main>
        </div>
      </Container>
    </React.Fragment>
  );
}