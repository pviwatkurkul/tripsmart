import React from "react";
import Login from './components/login';
import Signup from './components/signup';
import Navbar from './components/navbar';
import {Routes ,Route} from 'react-router-dom';


function App() {
  return (
        <Routes>
          <Route exact path="/" element={<Signup/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/nav" element = {<Navbar/>}/>
        </Routes>
  );
}

export default App;