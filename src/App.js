import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';


import React from "react";
import {
BrowserRouter as Router, Route, Routes, Link
} from "react-router-dom";

function App() {
const  [myStyle,setMyStyle] = useState({
color:'black'
})
const [mode, setMode] = useState('light');

const toggleBar = ()=>{
if(mode==="light"){
setMode('dark')
document.body.style.backgroundColor='#29424c';    
showAlert("Dark mode Enabled","success");

}
else{
setMode('light')
document.body.style.backgroundColor='white';
showAlert("Light mode Enabled","success");
}
}

const [alert,setAlert] = useState(null);
const showAlert =(message,type)=>{
setAlert({
msg: message,
type: type
})
setTimeout(() => {
setAlert(null);

}, 2000);
}

const [color,setColor] = useState('light');
const toggleColor=(value)=>{
setColor(value);
document.body.style.backgroundColor = value;
showAlert(value +" mode is enable","success");
}

return (
<>
<Router>
<Navbar title="Learn" student="Name" toggleBar={toggleBar} mode={mode} myStyle={myStyle} toggleColor={toggleColor} color={setColor}/>
<Alert alert={alert}/>
<div className="container my-3">

  
    <Routes>   
  <Route exact path="/about" element={<About />} />
  <Route exact path="/textForm" element={<TextForm heading="Enter your thought's" mode={mode} showAlert={showAlert} color={setColor} />} />
</Routes>
  

    

</div>
</Router>

</>
);
}

export default App;
