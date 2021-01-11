// Import all modules
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaSearch } from 'react-icons/fa';

// Import SCSS
import styled from './style.module.scss';

// Import all components
import { Container } from '../container/Container';

// Import all images
import tickitz from '../../assets/img/tickitz2.svg';
import burger from '../../assets/img/burger.svg';

export default function Navbar(props) {
  const [isShow, ShowInput] = useState(false);
  return (
    <React.Fragment>
      <nav className={ styled.nav }>
        <Container component="navbar">
          <div className={ styled.container }>
            <Link to="/" className={ styled.brand }>
              <img src={ tickitz } alt="Tickitz Logo" />
            </Link>
            <ul className={ styled.navList } style={ (isShow) ? ({ width: '45%'}) : null }>
              <li className={ styled.navItem }>
                <div className={ styled.formContainer }>
                  <input type="search" className={ styled.input } placeholder="Search here..." />
                  <FaSearch className={ styled.searchMobile } />
                </div>
              </li>
              <li className={ styled.navItem }>
                <Link to="/">
                  Movies
                </Link>
              </li>
              <li className={ styled.navItem }>
                <Link to="/">
                  Cinemas
                </Link>
              </li>
              <li className={ styled.navItem }>
                <Link to="/">
                  Buy Ticket
                </Link>
              </li>
            </ul>
            <div className={ styled.navSide } style={ (isShow) ? ({ width: '40%'}) : null }>
              <div className={ styled.dropdown }>
                <div className={ styled.link }>
                  Location
                  <FaAngleDown className={ styled.arrow } />
                  <ul className={ styled.dropdownList}>
                    <li className={ styled.dropdownItem }>
                      <Link to="/">
                        Jakarta
                      </Link>
                    </li>
                    <li className={ styled.dropdownItem }>
                      <Link to="/">
                        Tokyo
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={ styled.searchBar } style={ (isShow) ? ({ marginLeft: '2rem'}) : null }>
                <form>
                  {
                    isShow ? (
                      <input type="search" className={ styled.input } placeholder="Search here..." />
                    ) : null
                  }
                  <FaSearch className={ styled.search } onClick={() => ShowInput(c => !c)}/>
                </form>
              </div>
              <div className={ styled.btnBar }>
                <Link to="/register" className={ styled.btn } >Sign Up</Link>
              </div>
            </div>
            <div className={ styled.burger }>
              <img src={ burger } alt="Burger" />
            </div>
          </div>
        </Container>
      </nav>
    </React.Fragment>
  );
}