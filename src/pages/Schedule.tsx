import React from 'react';

import Loader from '../components/Loader';

function Schedule() {
  return (
    <div className="schedule margin-bottom-footer">
      <Loader
        message="Live schedule coming soon"
        withClasses={['loadingAnimation', 'bounceDown']}
        imageUrl="images/transparent/ttlf_0007.png"
        isOverlay
      />
    </div>
  );
}

export default Schedule;
