import React,{useState} from 'react'
function Ifelse(){
    // const [loggedIn,setloggedIn]=useState(1)
    const loggedIn=2;
    // if(loggedIn){
    //     return(
    //         <div className="Ifelse">
    //             <h1>Hello</h1>
    
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>
    //             <h1>This is generally not recommended method of if else</h1></div>
    //     )
    // }
    // return(
    //     <div>{
    //            loggedIn?<h1>Welcome</h1>:<h1>Hey this is the recommended method</h1>}
    //     </div>
    // )
    // if we have more than one we can use the method below...
    return(
        <div>
            {
                loggedIn==1?<h1>Hello User 1</h1>:loggedIn==2?<h1>Welcome User2</h1>:<h1>Welcome User 3</h1>
            }
        </div>
    )
}
export default Ifelse;