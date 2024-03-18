import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { upname,upparr} from "./Reducer";

export const Home=()=>{
const set=useSelector(
    ({imman})=>imman
)
const dispatch=useDispatch()
const update=()=>{
    dispatch(upname("sathesh@immanvel"))
    
}
const uparr=(val,i)=>{
  let x= set.arr.map((a,b)=>{
    return i==b ? "sathesh":a
  })
  dispatch(upparr(x))
}
   console.log(set)
    return(
       <div>
          <h1>{set.name}</h1>
          <button onClick={update}>Updatename</button>
       <div>
         {set.arr.map((val,i)=>{
            return(
                <div>
                    <h1>{val}</h1>
                    <button onClick={()=>uparr(val,i)}>update</button>
                </div>
            ) 
         })
        }
       </div>

       </div>
    )


}
