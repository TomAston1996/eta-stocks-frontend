import React from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../../app/hook';
// import siemensLogo from '../../../resources/siemensLogo.png';
// import scentLogo from '../../../resources/scentLogo.png';
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
          {/* <div className="siemensLogo">
            <img src={siemensLogo} alt="siemensLogo" style={{ height: '25px' }} title='Siemens'></img>
          </div> */}
          <div className="links">
            <Link onClick={() => navClick('/home')} to="/" className={'link-styles'}>
              Home
            </Link>
            <Link onClick={() => navClick('/explore')} to="/explore" className={'link-styles'}>
              Explore
            </Link>
          </div>
        </div>
        {/* <div className="etaStocksLogo">
          <img src={scentLogo} alt="tiLogo4" style={{ height: '100px', padding: 0 }} title='ETA Stocks'></img>
        </div> */}
      </div>
    </div>
  );
}

export { NavBar };
