import React from 'react';

type ButtonProps = {
  text: string;
  className: string;
  onClick?: any;
};

const Button = ({ text, onClick = () => null, className }: ButtonProps) => {
  return (
    <p className={className} onClick={onClick}>
      {text}
    </p>
  );
};

export default Button;
