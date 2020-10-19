import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products/1">First Product</Link>
        </li>
        <li>
          <Link to="/products/2">Second Product</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Footer;