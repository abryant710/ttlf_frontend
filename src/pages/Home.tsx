import React from 'react';

import Loader from '../components/Loader';

function Home() {
  return (
    <div className="home margin-bottom-footer">
      <Loader
        withClasses={["loadingAnimation", "bounceDown"]}
        imageUrl={"images/transparent/ttlf_0013.png"}
        isOverlay={true}
      />
    </div>
  );
}

export default Home;
