import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";

export const Routing=()=>{
    return(
        <BrowserRouter>
           <Routes>
              <Route path="/" element={<Home/>}></Route>
           </Routes>
        </BrowserRouter>
    )
}