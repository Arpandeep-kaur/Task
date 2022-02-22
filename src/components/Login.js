import React,{useState} from 'react'
import App from '../App.css'
function Login(){
    const [name,setName]=useState("")
    const [password,setPassword]=useState("")
    const [useErr,setuseErr]=useState(false)
    const [passErr,setpassErr]=useState(false)
       function loginHandle(e){
           e.preventDefault()
           if(name.length<3 || password.length<3){
               alert("Type correct values")
           }
           else{
               alert("all good")
           }

       }
       function userHandler(e){
           let item=e.target.value
           if(item.length<3){
               setuseErr(true)
           }
           else{
               setuseErr(false)
           }
          setName(item)
       }
       function passwordHandler(e){
        let passw=e.target.value
        if(passw.length<3){
            setpassErr(true)
        }
        else{
            setpassErr(false)
        }
      setPassword(passw)
    }
    return(
        <div className="Login">
          <form onSubmit={loginHandle} >
          <h1>Login</h1>
            <input type="text" placeholder='Enter User ID' onChange={userHandler}/><br/>{useErr?<span>This is invalid</span>:null}<br /><br />
            <input type="password" placeholder='Enter User password' onChange={passwordHandler}/><br/>{passErr?<span>This is invalid</span>:null}<br /><br />
            <button type="submit">Login</button>
            </form> 
            
        </div>
    )
}
export default Login;