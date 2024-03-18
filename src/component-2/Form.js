import React, { useEffect, useState } from "react";
import './Style.scss'
import { useDispatch, useSelector } from "react-redux";
import { uparr,delarr } from "./Reducer";
import { useNavigate, useSearchParams } from "react-router-dom";

export const Forme=()=>{
    const [param]=useSearchParams()

    
    // console.log(z)
  const state=useSelector(
    ({imman})=>imman
  )

  const [id,setid]=useState()
  const [name,setname]=useState("")
  const [des,setdes]=useState("")
  const [status,setstatus]=useState()
  const [min,setmin]=useState()
  const [secs,setsecs]=useState()
  const [arr,setarr]=useState()
  const [edi,setedit]=useState(false)
  const [index,setindex]=useState()
  const m=useNavigate()

const edit=()=>{
    var z=parseInt(param.get("id"))
    var initialarr=state.form.length
    if(z>=0 && initialarr>0){
        console.log("hii")
        let f= state.form.find((a,b)=>{
            return z===b ? a:""
        })
        console.log(f.sts)
        setindex(z)
        setname(f.name)
        setdes(f.des)
        setedit(true)
    
        
        var idd=document.getElementById(f.sts)
        idd.setAttribute("checked","")
    }
   
   
}

useEffect(()=>{
    edit()
},[])
 
console.log(edi)
 
  const dispatch=useDispatch()
const add=(e)=>{
  
    if(e.target.name=="tname"){
        setname(e.target.value)
        console.log(name)
    }
    else if(e.target.name=="tdes"){
        setdes(e.target.value)
        console.log(des)
    }
    else{
        setstatus(e.target.id)
        console.log(status) 
    }

}
const table=()=>{
    m("/table")
}

const submit=(ev)=>{
    ev.preventDefault()
   
 if(edi===true){
    let count=0
    var a= count+1
    setid(a)
    var d=new Date()
    var timee= d.getHours()
    var mins=d.getMinutes()
    var sec=d.getSeconds()

  var obj={
    name:name,
    des:des,
    id:uparr.length+1,
    sts:status,
    hour:timee,
    min:mins,
    secs:sec
  }
 let m= [...state.form]
 m.splice(index,1,obj)
 console.log(m)

    setedit(false)

    dispatch(delarr(m))
 }
 else{
    let count=0
    var a= count+1
    setid(a)
    var d=new Date()
    var timee= d.getHours()
    var mins=d.getMinutes()
    var sec=d.getSeconds()

  var obj={
    name:name,
    des:des,
    id:uparr.length+1,
    sts:status,
    hour:timee,
    min:mins,
    secs:sec
  }

 dispatch(uparr(obj))
 }
   
   }



    return(
        <div>
           <section id="sec-1">
               <div className="container">
                  <div className="row">
                     <div className="col-6">
                         <div className="form">
                             <form>
                                <div>
                                    <input type="text" placeholder="enter your taskname" onChange={add} value={name} name="tname"/>
                                    <input type="text" placeholder="enter your taskdes" onChange={add} value={des} name="tdes"/>
                                    <div className="row">
                                    <div className="row">
                                         <label htmlFor="yes">yes</label>
                                        <input type="radio"  id="yes" name="status" onClick={add} />
                                    </div>
                                    
                                   <div className="row">
                                        <label htmlFor="no">no</label>
                                        <input type="radio" id="no"  name="status" onClick={add}/>
                                   </div>
                                    </div>
                                </div>
                                <div className="btn row">
                                    <button onClick={submit} type="submit">Submit</button>
                                    <button onClick={table} type="submit">Submit</button>
                                </div>
                             </form>
                         </div>
                     </div>
                  </div>
               </div>
           </section>
        </div>
    )
}