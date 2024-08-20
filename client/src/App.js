import React from "react";
import Login from './components/login';
import Signup from './components/signup';
import {Routes ,Route} from 'react-router-dom';


function App() {
  return (
        <Routes>
          <Route exact path="/" element={<Signup/>}/>
          <Route exact path="/Login" element={<Login/>}/>
        </Routes>
  );
}

export default App;