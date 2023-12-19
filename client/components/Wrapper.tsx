import "./Wrapper.css";
import React from "react";

interface Props {
  children: React.JSX.Element|React.JSX.Element[]
}

// (alias) const Wrapper: ({ children }: Props) => React.JSX.Element
// import Wrapper

const Wrapper = ({ children }: Props) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;