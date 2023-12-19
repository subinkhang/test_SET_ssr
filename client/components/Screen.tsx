// import { Textfit } from "react-textfit";
import "./Screen.css";
import React from "react";

interface Props {
  value: number;
}

const Screen = ({ value }: Props) => {
  return (
    <div className="screen">
      {value}
    </div>
  );
};

export default Screen;