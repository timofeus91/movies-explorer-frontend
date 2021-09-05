import React from 'react';
import './Preloader.css';

function Preloader({ isPreloader }) {
  
  return (
    <div className={`${isPreloader ? 'preloader' : 'preloader_noactive'}`}>
    </div>
  )
};

export default Preloader;
