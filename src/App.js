import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoute } from "./routes/PublicRoutes";


function App() {
 // TODO: theme changed
 const [theme, setTheme] = useState(false);

 return (
   <div data-theme={theme ? "dark" : "light"}>
     <Navbar theme={theme} setTheme={setTheme}>
       <Routes>
         {publicRoute.map(({ path, Component }, index) => (
           <Route key={index} path={path} element={<Component />} />
         ))}
       </Routes>
     </Navbar>
   </div>
 );
}

export default App;
