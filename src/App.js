import React from "react";
import Dashboard from "./component/Deshbord/Dashboard";
import Batching from "./component/Batching/Batching"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./component/Deshbord/Nav";



const App = () => {
  return <>

  <BrowserRouter>
   <Nav/>
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/batching" element={<Batching/>}></Route>
    </Routes>
  </BrowserRouter>
  
  </>;
};

export default App;
