import React,{useState} from 'react'
function Handlingforms(){
    const [name,setName]=useState("");

    const [tnc,setTnc]=useState(false)
    const[interest,setInterest]=useState("")
   function getFormdata(event){
       console.warn(name,tnc,interest)
        event.preventDefault()
   }
    return(
        <div className="Handlingforms">
            <h1>Handling Forms with ReactJs</h1>
            <form onSubmit={getFormdata} >
            <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} value={name}/><br /><br />
            <select onChange={(e)=>setInterest(e.target.value)}>
            <option >Select Option</option>
                <option >Python</option>
                <option >HTML</option>
                <option >CSS</option>
                <option >Javascript</option>
                <option >ReactJs</option>
                
            </select><br /><br />
            <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span>Accept the terms and condition</span><br /><br />
            <button type="submit">Submit</button>
            <button type="clear">Clear</button>
            </form>

        </div>

    )
}
export default Handlingforms;