import React from 'react';

type LoaderProps = {
  imageUrl: string,
  isOverlay: boolean,
  withClasses?: Array<string>,
  message?: string,
}

const Loader = ({ imageUrl, message, withClasses, isOverlay }: LoaderProps) => {
  return (
    <div className={isOverlay ? "loader" : "center-items-col"}>
      {message && <h1 className="loader__message">{message}</h1>}
      <img className={`${withClasses ? withClasses.join(" ") : ""}`} src={imageUrl} alt="TTFL" />
    </div>
  );
}

export default Loader;
