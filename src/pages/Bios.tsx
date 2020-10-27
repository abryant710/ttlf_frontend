import React from 'react';

import Loader from '../components/Loader';

function Bios() {
  return (
    <div className="bios">
      <Loader
        withClasses={["loadingAnimation", "bounceDown"]}
        imageUrl={"images/transparent/ttlf_0001.png"}
        isOverlay={true}
      />
    </div>
  );
}

export default Bios;
