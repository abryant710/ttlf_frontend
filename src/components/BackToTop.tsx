import React, { Fragment, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

function BackToTop() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop);

  return (
    <div className="back-to-top" style={{ height: 60, display: showScroll ? 'flex' : 'none' }}>
      <p className="back-to-top__text">Top</p>
      <FaArrowCircleUp className="back-to-top__icon" onClick={scrollTop} />
    </div>
  );
}

export default BackToTop;
