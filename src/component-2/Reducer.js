import { createSlice } from "@reduxjs/toolkit";



export const Slice=createSlice({
    name:"form",
    initialState:{
        form:[],
        table:[]
    },
    reducers:{
       uparr:(state,action)=>{
        state.form=[...state.form,action.payload]
       },
       delarr:(state,action)=>{
        state.form=action.payload
       }
    }
})


export default Slice.reducer
export const {uparr,delarr}=Slice.actions