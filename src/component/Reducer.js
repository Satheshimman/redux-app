import { createSlice } from "@reduxjs/toolkit";
import React from "react";

export const Slice=createSlice({
    name:"react",
    initialState:{
        name:"sathesh",
        age:21,
        arr:[1,2,3,4,5,6,7]
    },
    reducers:{
         upname:(state,action)=>{
              state.name=action.payload
         },
         upparr:(state,action)=>{
            state.arr=action.payload
         }
    }
})

export default Slice.reducer
export const {upname,upparr}=Slice.actions