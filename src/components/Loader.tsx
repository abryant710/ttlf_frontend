import React from 'react';

type LoaderProps = {
  imageUrl: string,
  widthClass?: string,
  marginClass?: string,
  message?: string,
}

const Loader = ({ imageUrl, message, marginClass, widthClass }: LoaderProps) => {
  return (
    <div className="loader">
      {message && <h1 className="loader__message loader__animate">{message}</h1>}
      <img className={`loader__image loader__animate ${marginClass || ""} ${widthClass || ""}`} src={imageUrl} alt="TTFL" />
    </div>
  );
}

export default Loader;
