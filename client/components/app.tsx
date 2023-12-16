import React from 'react';
import Home from './Home';
 
// export const App: React.FC = () => {
//     let routes = useRoutes([
//         {path: '/', element: <Home />},
//         {path: '/about', element: <About />},
//     ]);
    
//     return routes;
// }
 
// export const App: React.FC = () => {
//   return(
//     <>
//       <Routes>
//         <Route path ="/" element={<Home />} />
//         <Route path ="/about" element={<About />} />
//       </Routes>
//     </>
//   )
// }

export const App: React.FC = () => {
  return (
    <Home />
  );
};

export default App;