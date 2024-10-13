import React, { useState } from 'react';

import './footer.css';
import { Changelog } from '../../changeLog/ChangeLog';
import ModalWindow from '../../modal/ModalWindow';

export default function PageFooter() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const getCurrentYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year;
  };

  const handleClick = () => {
    setShow(true);
  };
  return (
    <>
      <ModalWindow title="Changelog History" size="lg" show={show} onClose={handleClose}>
        <Changelog />
      </ModalWindow>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-copyright-container">
            <p>&copy; {getCurrentYear()} Tom Aston </p>
          </div>
          <div className="footer-links-container">
            <p onClick={() => handleClick()}>Changelog</p>
          </div>
        </div>
      </div>
    </>
  );
}
