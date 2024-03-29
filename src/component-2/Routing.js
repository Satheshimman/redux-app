import React from "react";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Forme } from "./Form";
import { Table } from "./Table";

export const Routing=()=>{
    return(
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Forme/>}></Route>
                <Route path="/table" element={<Table/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}