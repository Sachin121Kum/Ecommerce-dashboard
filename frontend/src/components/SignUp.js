import React,{useState}  from "react";

const SignUp = ()=>{
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')

    const getData= ()=>{
        console.log(name,email,pass)
    }


    return (
        <div className="register">
            <h1>Register</h1>
            <input className="inputbox" value={name} onChange={(e)=>{setName(e.target.value)}}  type="text" placeholder="Enter Name"/>
            
            <input className="inputbox" value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="Enter Email"/>
            
            <input className="inputbox" value={pass} onChange={(e)=>{setPass(e.target.value)}} type="password" placeholder="Enter Password"/>
            <button onClick={getData} className="submit" type="button">Signup</button>
        </div>
    )
}
export default SignUp;