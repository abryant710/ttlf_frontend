import React from 'react';
import {useTranslation} from "react-i18next";

type LoaderProps = {
  imageUrl: string,
}

const Loader = ({ imageUrl }: LoaderProps) => {
  const {t} = useTranslation('common');
  return (
    <div className="loader">
      <h1 className="loader__message loader__animate">{t('common.loading')}</h1>
      <img className="loader__image loader__animate" src={imageUrl} alt="TTFL" />
    </div>
  );
}

export default Loader;
