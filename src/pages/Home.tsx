import React from 'react';

import Loader from '../components/Loader';

function Home() {
  return (
    <div className="home">
      <Loader
        withClasses={["loadingAnimation", "bounceDown", "image-width-small"]}
        imageUrl={"images/transparent/ttlf_0013.png"}
        isOverlay={true}
      />
    </div>
  );
}

export default Home;
