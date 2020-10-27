import React from 'react';

import Loader from '../components/Loader';

function Videos() {
  return (
    <div className="videos">
      <Loader
        withClasses={["loadingAnimation", "bounceDown"]}
        imageUrl={"images/solid/ttlf_0006.jpg"}
        isOverlay={true}
      />
    </div>
  );
}

export default Videos;
