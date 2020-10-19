import React from 'react';

type SplashProps = {
  imageUrl: string,
}

const Splash = ({ imageUrl }: SplashProps) => {
  return (
    <div className="splash">
      <img className="splash__image" src={imageUrl} alt="TTFL" />
    </div>
  );
}

export default Splash;
