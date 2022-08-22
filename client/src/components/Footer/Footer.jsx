import React from 'react';
import './styles.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <h1>About Us</h1>
        <ul>
          <li><a>Our Heritage</a></li>
          <li><a>Pressroom</a></li>
          <li><a>Our Company</a></li>
          <li><a>Career Center</a></li>
          <li><a>Newsroom</a></li>
        </ul>
      </div>
      <div>
        <h1>Customer Service</h1>
        <ul>
          <li><a>Frequently Asked Question</a></li>
        </ul>
      </div>
      <div>
        <h1>Quick Links</h1>
        <ul>
          <li><a>Store Locator</a></li>
          <li><a>For Partners</a></li>
        </ul>
      </div>
    </div>

  )
}

export default Footer;
