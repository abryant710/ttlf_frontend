import React from 'react';
import { FaSoundcloud, FaYoutube, FaFacebook, FaTwitch } from 'react-icons/fa';
import Tooltip from "react-simple-tooltip";

import {links} from '../../config/links';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__icons">
        <a target="_blank" rel="noopener noreferrer" href={links.soundcloud}>
          <FaSoundcloud
            color="white"
            size="3rem"
          />
        </a>
        <a target="_blank" rel="noopener noreferrer" href={links.youtube}>
          <FaYoutube
            color="white"
            size="3rem"
          />
        </a>
        <a target="_blank" rel="noopener noreferrer" href={links.facebook}>
          <FaFacebook
            color="white"
            size="3rem"
          />
        </a>
        <a target="_blank" rel="noopener noreferrer" href={links.twitch}>
          <FaTwitch
            color="white"
            size="3rem"
          />
        </a>
      </div>
      <div className="footer__site-details">
      </div>
      <div className="footer__attribution">
      </div>
    </footer>
  )
}

export default Footer;