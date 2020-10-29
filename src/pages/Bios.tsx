import React from 'react';

import Loader from '../components/Loader';

function Bios() {
  return (
    <div className="bios margin-bottom-footer">
      <Loader
        message="Bios coming soon"
        withClasses={['loadingAnimation', 'bounceDown']}
        imageUrl="images/transparent/ttlf_0001.png"
        isOverlay
      />
    </div>
  );
}

export default Bios;
