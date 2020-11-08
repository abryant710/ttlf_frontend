import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { Context as AppContext } from '../context/AppContext';

type ToastLink = {
  route: string;
  text: string;
};

type CustomToastProps = {
  headerText?: string;
  link?: ToastLink;
};

function CustomToast({ link, headerText }: CustomToastProps) {
  const { showBackButton, minimisePlayer } = useContext(AppContext);

  const history = useHistory();
  function handleClick(route: string): void {
    minimisePlayer();
    showBackButton();
    window.scrollTo(0, 0);
    history.push(route);
  }

  return (
    <div className="toast">
      {headerText && <h3 className="toast__header">{headerText}</h3>}
      {link && (
        <p className="toast__link" onClick={() => handleClick(link.route)}>
          {link.text}
        </p>
      )}
    </div>
  );
}

export default CustomToast;
