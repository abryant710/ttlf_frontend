import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

function BackToTop() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="back-to-top" style={{ height: 60, display: showScroll ? 'flex' : 'none' }} onClick={scrollTop}>
      <p className="back-to-top__text">Top</p>
      <FaArrowCircleUp className="back-to-top__icon" />
    </div>
  );
}

export default BackToTop;
