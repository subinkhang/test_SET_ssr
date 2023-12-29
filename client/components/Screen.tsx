// import { Textfit } from "react-textfit";
import "./Screen.css";
import React from "react";
// import App from "./app";

interface Props {
  value: string;
  role: string;
  // className: string;
}

const Screen = ({ value }: Props) => {
  return (
    <div className="screen">
      {value}
    </div>
  );
};

export default Screen;