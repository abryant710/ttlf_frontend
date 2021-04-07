import React from 'react';
import { ImSpinner2 } from 'react-icons/im';
import Picture from './Picture';

type LoaderProps = {
  isOverlay?: boolean;
  imageUrl?: string;
  showSpinner?: boolean;
  withClasses?: Array<string>;
  message?: string;
};

const getPicture = (showSpinner: boolean | undefined, withClasses: string[], imageUrl: string) => {
  if (showSpinner) {
    return <ImSpinner2 size="30px" color="black" className={`${withClasses ? withClasses.join(' ') : ''}`} />;
  }
  return <Picture imageUrl={imageUrl} className={`${withClasses ? withClasses.join(' ') : ''}`} />;
};

const Loader = ({ imageUrl = '', message, withClasses = [], isOverlay, showSpinner }: LoaderProps) => {
  return (
    <div className={isOverlay ? 'loader' : 'center-items-col'}>
      {message && <h2 className="loader__message">{message}</h2>}
      {getPicture(showSpinner, withClasses, imageUrl)}
    </div>
  );
};

export default Loader;
