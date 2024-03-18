import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delarr} from "./Reducer";
import { useNavigate } from "react-router-dom";

export const Table=()=>{
const state=useSelector(
    
        ({imman})=>imman
    
)
const m=useNavigate()
const dispatch=useDispatch()
const del=(val,i)=>{
    let x=state.form.filter((a,b)=>{
         return i===b ? "":a
    })
    console.log(x)
    dispatch(delarr(x))
    
}

const edi=(val,i)=>{
  m(`/?id=${i}`)
}
    return(
        <div>
            <section id="sec-2">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="forme">
                                <h1>Form Details</h1>
                            </div>
                            <div className="table">
                                 <table>
                                    <thead>
                                        <tr>
                                            <th>S.no</th>
                                            <th>Taskname</th>
                                            <th>TaskDescription</th>
                                            <th>TaskStatus</th>
                                            <th>time</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {state.form.map((a,b)=>{
                                        return(
                                            
                                     
                                        <tr>
                                            <td>{a.id}</td>
                                            <td>{a.name}</td>
                                            <td>{a.des}</td>
                                            <td>{a.sts}</td>
                                            <td>hr:{a.hour}min:{a.min}</td>
                                            <td><button onClick={()=>edi(a,b)}>edit</button></td>
                                            <td><button onClick={()=>del(a,b)}>delete</button></td>
                                        </tr>
                                    
                                            
                                        )
                                    })}
                                    </tbody>
                                 </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}