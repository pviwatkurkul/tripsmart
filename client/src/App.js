import React from "react";
import Login from './components/login';
import Signup from './components/signup';
import Navbar from './components/navbar';
import HomePage from './components/home';
import {Routes ,Route} from 'react-router-dom';


function App() {
  return (
        <Routes>
          <Route exact path="/" element={<Signup/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/nav" element = {<Navbar/>}/>
          <Route exact path="/home" element = {<HomePage/>}/>
        </Routes>
  );
}

export default App;