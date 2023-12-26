// import { createContext } from "react";
// import React from "react";
import { createContext, Dispatch, SetStateAction } from "react";

interface AppContextProps {
    handleClick: () => void;
    ac: string;
    setAc: Dispatch<SetStateAction<string>>;
  }
  
const AppContext = createContext<AppContextProps>({
  handleClick: () => {},
  ac: "AC",
  setAc: () => {}, // Cung cấp giá trị mặc định cho handleClick
});

export default AppContext;