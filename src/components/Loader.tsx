import React from 'react';
import { ImSpinner2 } from 'react-icons/im';

type LoaderProps = {
  isOverlay?: boolean;
  imageUrl?: string;
  showSpinner?: boolean;
  withClasses?: Array<string>;
  message?: string;
};

const Loader = ({ imageUrl, message, withClasses, isOverlay, showSpinner }: LoaderProps) => {
  return (
    <div className={isOverlay ? 'loader' : 'center-items-col'}>
      {message && <h2 className="loader__message">{message}</h2>}
      {showSpinner ? (
        <ImSpinner2 size="30px" color="black" className={`${withClasses ? withClasses.join(' ') : ''}`} />
      ) : (
        <img className={`${withClasses ? withClasses.join(' ') : ''}`} src={imageUrl} alt="TTFL" />
      )}
    </div>
  );
};

export default Loader;
