
import './App.css'
import Navbar from './components/Navbar.js'
// import TextForm from './components/TextForm.js'
// import Inputtext from './components/Inputtext.js'
// import Hideshow from './components/Hideshow.js'
// import Handlingforms from './components/Handlingforms.js'
// import Ifelse from './components/Ifelse.js'
// import Login from './components/Login.js'
import Listkeys from './components/Listkeys.js'
function App() {
  return (
    <>
    <div className="App">
        <Navbar title="TextUtils" aboutText="About"></Navbar>
  {/* <TextForm heading="Enter the text here"/> */}
  {/* <Inputtext/> */}
  {/* <Hideshow/> */}
  {/* <Handlingforms heading="Thanks for submitting"/> */}
  {/* <Ifelse/> */}
        {/* <Login/> */}
        <Listkeys/>
  </div>
  </>
  );
}

export default App;
