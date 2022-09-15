import React from "react";
import { BrowserRouter} from "react-router-dom";

import Routs from "./components/Routs";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routs/>
      </BrowserRouter>
      
     
    </>
  );
};
export default App;
