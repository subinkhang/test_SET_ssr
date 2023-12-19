import "./ButtonBox.css";
import React from "react";

interface Props {
  children: React.JSX.Element|React.JSX.Element[]
}

const ButtonBox = ({ children }: Props) => {
  return (<div className="buttonBox">{children}</div>);
};

export default ButtonBox;