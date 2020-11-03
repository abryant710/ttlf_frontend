import React from 'react';

type TitleProps = {
  text: string;
  className?: string;
};

const Title = ({ text, className }: TitleProps) => {
  return <h1 className={`title ${className || ''}`}>{text}</h1>;
};

export default Title;
