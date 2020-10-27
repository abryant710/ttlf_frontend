import React from 'react';

import Loader from '../components/Loader';

function Schedule() {
  return (
    <div className="schedule">
      <Loader
        message="Coming soon"
        withClasses={["loadingAnimation", "bounceDown"]}
        imageUrl={"images/transparent/ttlf_0007.png"}
        isOverlay={true}
      />
    </div>
  );
}

export default Schedule;
