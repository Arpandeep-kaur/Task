import React, {useState} from 'react'

function Inputtext(){
    const [data,setText]=useState(null)
    const [print,setPrint]=useState(false)
    
    
    function setInput(event){
        setText(event.target.value)
        setPrint(false)

         
    }
   
    
return(
    <>
    <div className='Inputtext'>
        {print?
        <h1>{data}</h1>:null}
      
    </div>
    <input type="text" onChange={setInput} />
    <button onClick={()=>{setPrint(true)}}>Print data</button>
    </>
)
}
export default Inputtext;