import React from 'react';

type LoaderProps = {
  imageUrl: string,
  message: string,
}

const Loader = ({ imageUrl, message }: LoaderProps) => {
  return (
    <div className="loader">
      <h1 className="loader__message loader__animate">{message}</h1>
      <img className="loader__image loader__animate" src={imageUrl} alt="TTFL" />
    </div>
  );
}

export default Loader;
