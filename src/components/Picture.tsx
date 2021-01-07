import React from 'react';

type PictureProps = {
  imageUrl: string;
  className: string;
  alt?: string;
  small?: boolean;
};

export default function Picture({ imageUrl = '', className = '', alt = 'TTLF', small }: PictureProps) {
  const imageStr = small ? imageUrl.replace('.png', '_small.png') : imageUrl;
  return (
    <picture>
      <source srcSet={imageUrl.replace('.png', '.jp2')} type="image/jp2" />
      <img className={className} src={imageStr} alt={alt} />
    </picture>
  );
}
