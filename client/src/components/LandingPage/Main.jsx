import React from 'react';

import './main.css';
import { images } from '../../constants';


const Main = () => {
  return (
    <div className='main-page'>
      <div className='intro'>
      <p>Welcome to LaBuena Cafe</p>
        <img className='accessories' src={images.icons} />
        <h1>il caffè è amore</h1>
        <p>Feel the pleasure of LaBuena's high quality coffee! Every sip radiates the spirit of life.</p>
        <button>Get your Coffee</button>
      </div>
      <div className='main-image'>
        <img src={images.main} alt='main' />
      </div>
    </div>
  )
}

export default Main;
