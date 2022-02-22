import React,{useState} from 'react'



export default function TextForm(props) {
  const [text,setText]=useState('Enter text here');
  const handleUpClick =()=>{
    let newText=text.toUpperCase()
    console.log("Upper case was clicked"+text)
    setText(newText)
  }
  const handleOnchange =(event)=>{
    console.log("On change")
    setText(event.target.value)
  }
  
  
  
  return (
    <>
    
  <div>
    <h1>{props.heading} </h1>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
      <button className="btnbtn-ptimary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  </div>

    
    </>
  )
}
