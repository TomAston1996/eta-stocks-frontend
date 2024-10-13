import React from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../../app/hook';
import Logo from '../../../resources/logo.png';
import { history } from '../navSlice';

import './nav-bar.css';

function NavBar() {
  const dispatch = useAppDispatch();

  const navClick = (path: string) => {
    dispatch(history(path));
  };

  return (
    <div className="outer-container">
      <div className="container">
        <div style={{ display: 'flex', gap: '50px' }}>
          <div className="etaStocksLogo">
            <img src={Logo} alt="etaStocksLogo" style={{ height: '100px' }} title="ETA Stocks"></img>
          </div>
          <div className="links">
            <Link onClick={() => navClick('/home')} to="/" className={'link-styles'}>
              Home
            </Link>
            <Link onClick={() => navClick('/explore')} to="/explore" className={'link-styles'}>
              Explore
            </Link>
          </div>
        </div>
        <div className="links">
          <Link onClick={() => navClick('/explore')} to="/explore" className={'link-styles'}>
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}

export { NavBar };
