import React from 'react';

import Loader from '../components/Loader';

function Videos() {
  return (
    <div className="videos">
      <Loader
        withClasses={["loadingAnimation", "bounceDown"]}
        imageUrl={"images/transparent/ttlf_0002.png"}
        isOverlay={true}
      />
    </div>
  );
}

export default Videos;
