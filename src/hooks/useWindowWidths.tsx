import { useState, useEffect } from 'react';

const largeRes = [1280, 720];
const mediumRes = [640, 360];
const smallRes = [320, 180];

function useWindowWidths() {
  const [width, setWidth] = useState(window.innerWidth);
  const [selectedSize, setSelectedSize] = useState('m');

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    if (width <= largeRes[0] && selectedSize === 'l') {
      setSelectedSize('m');
    }
    if (width <= mediumRes[0] && selectedSize === 'm') {
      setSelectedSize('s');
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width, selectedSize]);

  const getWidthOrHeight = (param: string): string => {
    const [lw, lh] = largeRes;
    if (width > lw && selectedSize === 'l') {
      return param === 'width' ? lw.toString() : lh.toString();
    }
    const [mw, mh] = mediumRes;
    if (width > mw && selectedSize === 'm') {
      return param === 'width' ? mw.toString() : mh.toString();
    }
    const [sw, sh] = smallRes;
    return param === 'width' ? sw.toString() : sh.toString();
  };

  return {
    getWidthOrHeight,
    setSelectedSize,
    selectedSize,
    width,
    resolutions: [largeRes, mediumRes, smallRes],
  };
}

export default useWindowWidths;
