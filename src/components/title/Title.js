import React from 'react';
import './title.css';
import Globe from '../../img/globe.png';

const Title = () => {
  return (
    <div className='title'>
      <img src={Globe} alt='globe logo' className='tittle-icon' />
      <h3 className='title--text'>My travel journal.</h3>
    </div>
  );
};

export default Title;
