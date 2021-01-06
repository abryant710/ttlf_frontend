import React from 'react';

type ButtonProps = {
  text: string;
  className: string;
  onClick?: React.MouseEventHandler<HTMLParagraphElement>;
};

const Button = ({ text, onClick = () => null, className }: ButtonProps) => {
  return (
    <p className={`${className} btn-base`} onClick={onClick}>
      {text}
    </p>
  );
};

export default Button;
