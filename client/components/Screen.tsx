// import { Textfit } from "react-textfit";
import "./Screen.css";
import React from "react";
// import App from "./app";

interface Props {
  value: string;
}

const Screen = ({ value }: Props) => {
  // const [ac, setAc] = useState("AC");

  // value !== 0 
  //   ? setAc("C")
  //   : setAc("AC");

  return (
    <div className="screen">
      {value}
    </div>
  );
};

export default Screen;