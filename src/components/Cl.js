import React,{useState} from 'react'
class Cl extends React.Component{
     constructor(){
         super();
         console.warn("Constructor")
         this.state={data:"xyz"}
     }
     render(){
         console.warn("Render")
         return(
             <h1>Hello World {this.state.data}</h1>
         )
     }
}
export default Cl;