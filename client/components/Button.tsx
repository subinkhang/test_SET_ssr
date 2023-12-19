import "./Button.css";
import React from "react";

interface Props {
  className: string;
  value: string|number;
  onClick: () => void;
}

const Button = ({ className, value, onClick }: Props) => {  
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;