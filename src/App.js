import React from 'react';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';

//npm install react-router-dom
import { 
  BrowserRouter as Router, 
  Route, 
  Routes
} from "react-router-dom";

function App(){
const [mode,setmode]=useState('dark');
const [bodycolor,setbodycolor]=useState('#f1fbff');
const toogleMode=()=>{
 if(mode==='light'){
  setmode('dark');
  setbodycolor('#f1fbff');
 }
 else{
  setmode('light');
  setbodycolor('rgb(50, 47, 47)');
 }
}
const [alertmsg,setalertmsg]=useState(null);
const alertfn=(message)=>{
  setalertmsg({
   message:message
  })
  setTimeout(()=>{
    setalertmsg(null)
  },1550);
}

  return(
  <>
  <Router>
  <div className='Parent' style={{backgroundColor:bodycolor,height:"110%"}}>
  <Navbar title="My-NavBar" mode={mode} toogleMode={toogleMode}/>
  <Alert alert={alertmsg}/>
  <div className='container'>
  <Routes>
        <Route path="/about" element={<About mode={mode}/>}/>
        <Route exact path="/" element={<TextForm  heading="Enter the Text Below" placeholder="Enter text here ......" alertfn={alertfn} mode={mode}/>}/>
  </Routes>
  </div>
  </div>
  </Router>
  </>
);
}
export default App;
