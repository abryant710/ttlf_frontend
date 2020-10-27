import React from 'react';

import Loader from '../components/Loader';

function Schedule() {
  return (
    <div className="videos">
      <Loader
        withClasses={["loadingAnimation", "bounceDown"]}
        imageUrl={"images/solid/ttlf_0007.jpg"}
        isOverlay={true}
      />
    </div>
  );
}

export default Schedule;
