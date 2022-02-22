import React from 'react'
import '../App.css'
function Listkeys(){
    const students=['Amyra','Shezein','Sofia','Hani']
    const l=[
        {
            name:'Amra',
            email:'amra@gmail.com',
            contact:9785433456
        },
        {
            name:'Sheze',
            email:'sheze@gmail.com',
            contact:965543352
        },
        {
            name:'Sofia',
            email:'sofia@gmail.com',
            contact:9523215553
        }
    ]
    //  students.map((item)=>{
    //      console.warn(item)
    //  })
    //  When we write  return function there loop doesnot function there only works the map function
return(
    <div className="Listkeys">
        {
        students.map((item)=>
        
            <h1>{item}</h1>
        )}
        <table border="2">
        <tr>
               <td>name</td>
               <td>email</td>
               <td>contact</td>
           </tr>
        {
           
           l.map((i)=>
           <tr>
               <td>{i.name}</td>
               <td>{i.email}</td>
               <td>{i.contact}</td>
           </tr>
            
            
            )}
            </table>

        {/* for(let i=0;i<students.length;i++){
               <h1>students[i]</h1> Actually whenever u use it , it doesn't support */}
       
        
    </div>
)
    
}
export default Listkeys;
