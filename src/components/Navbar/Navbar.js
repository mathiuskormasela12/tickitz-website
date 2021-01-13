// Import all modules
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaSearch } from 'react-icons/fa';

// Import SCSS
import styled from './style.module.scss';

// Import all components
import { Container } from '../container/Container';

// Import all images
import tickitz from '../../assets/img/tickitz.png';
import burger from '../../assets/img/burger.svg';

export default function Navbar(props) {
  const [state, setState] = useState({
    showDropdown: false,
    showSearch: false,
    className: ''
  });

  const show = prop => {
    setState(currentState => ({
      ...currentState,
      [prop]: !currentState[prop]
    }));
  }

  const showDropdown = e => {
    e.preventDefault();
  }

  const addClass = () => {
    if(state.className !== 'showNav') {
      setState(currentState => ({
        ...currentState,
        className: 'showNav'
      }));
    } else {
      setState(currentState => ({
        ...currentState,
        className: ''
      }));
    }
  }

  return (
    <React.Fragment>
      <nav className={ `${styled.nav} ${styled[state.className] || ''}` }>
        <Container>
          <div className={ styled.navContainer }>
            <Link to="/" className={ styled.brand }>
              <img src={ tickitz } className={ styled.img } alt="Tickitz Logo" />
            </Link>
            <ul className={ styled.navList }>
              <li className={ `${styled.mobileSearchBar} ${styled.navItem}`}>
                <div className={ styled.inputAppend }>
                  <div className={ styled.icon }>
                    <FaSearch className={ styled.inputSearchIcon } />
                  </div>
                  <input type="search" placeholder="Search..." className={ styled.inputSearch } />
                </div>
              </li>
              <li className={ `${styled.navItem} ${styled.mobileDropdown}` }>
                <Link to="/" onClick={ showDropdown}>
                  Location
                </Link>
                <FaAngleDown className={ styled.arrowMobile }/>
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
            <div className={ styled.navSide }>
              <div className={ styled.dropdown }>
                <Link to="/" onClick={ () => show('showDropdown') }>
                  Location
                  <FaAngleDown className={ styled.arrow }/>
                </Link>
                <ul className={ `${styled.dropdownList} ${state.showDropdown ? styled.showDropdown : ''}` }>
                  <li className={ styled.item }>
                    <Link to="/">
                      Jakarta
                    </Link>
                  </li>
                  <li className={ styled.item }>
                    <Link to="/">
                      Surabaya
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={ styled.searchBar }>
                {
                  state.showSearch ? (
                    <Fragment>
                      <form className={ styled.form }>
                        <input type="search" className={ styled.inputSearch } placeholder="Search movie here ..."/>
                      </form>
                      <FaSearch className={ styled.inputSearchIcon } onClick={ () => show('showSearch')} />
                    </Fragment>
                  ) : null
                }
                {
                  !state.showSearch ? (
                    <Fragment>
                      <FaSearch className={ styled.search } onClick={ () => show('showSearch')} />
                    </Fragment>
                  ) : null
                }
              </div>
              <div className={ styled.btnBar }>
                <Link to="/register" className={ styled.btn }>Sign Up</Link>
              </div>
            </div>
            <div className={ styled.burgerBar } onClick={ addClass }>
              <img className={ styled.burger } src={ burger } alt="Burger" />
            </div>
            <div className={ styled.navFoot }>
              <p>
                © 2020 Tickitz. All Rights Reserved.
              </p>
            </div>
          </div>
        </Container>
      </nav>
    </React.Fragment>
  );
}