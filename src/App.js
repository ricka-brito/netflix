import './App.css';
import Details from "./pages/details";

import Main from "./pages/main";
import { Route, BrowserRouter, Routes } from "react-router-dom";

 
function App() {


  return (

   
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element = { <Main/> }  path="/" exact />
          <Route element = { <Details/> }  path="filme/:id" exact />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
