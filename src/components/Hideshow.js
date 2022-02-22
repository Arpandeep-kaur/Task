import React,{useState} from 'react'

function Hideshow()
{
    const [status,setStatus]=React.useState(true)

    return(
    <div className="Hideshow">
        {
            status?<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, atque saepe repellat dignissimos perspiciatis illum tempora. Dolorem quasi reiciendis cum ipsa alias debitis reprehenderit perferendis quos, iste et eum nam laudantium, culpa deserunt laboriosam. Nulla quasi possimus vitae illo eaque.</p>:null
        }
        
           
            {/* <button onClick={()=>setStatus(false)}>Hide</button>
            <button onClick={()=>setStatus(true)}>Show</button> */}
        {/* Lets practice using single button for the hide and show function */}
        <button onClick={()=>setStatus(!status)}>Toggle</button>
    </div>
    )
}
export default Hideshow;