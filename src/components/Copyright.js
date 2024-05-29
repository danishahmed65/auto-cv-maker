import React from 'react';
import './CopyrightStyles.css';

const Copyright = () => {
  return (
    <div className="copyright-container">
      <p id='P2'>
        Designed by <span role="img" aria-label="heart">❤️</span> Theme inspired by Tech2 etc
      </p>
      <p id='P1'>
         <b>Copyright ©</b> 2024 All Rights Reserved - By {' '}
        <a href="/" target="_blank" rel="noopener noreferrer">
        <b>Web Engineering - Group:8</b>
        </a>
      </p>
    </div>
  );
}

export default Copyright;

