// import AppContext from "./AppContext";
// import React,
// { useContext, useState }
//   from "react";

// interface AppProviderProps {
//     children: React.JSX.Element|React.JSX.Element[]
// }

// const AppProvider = ({ children }: AppProviderProps) => {

//   const handleClick = () => {
//     console.log('ok');
//     // Sử dụng handleClick từ AppContext
//     useContext(AppContext).handleClick();
//   };

//   const [ac, setAc] = useState("AC");
      

//   return(
//     <AppContext.Provider value={{ handleClick, ac, setAc }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export default AppProvider;