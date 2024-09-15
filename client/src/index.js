import React from 'react';
import App from './App.js'
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {GoogleOAuthProvider} from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById('root'));
const CLIENT_ID = "936159917538-5ub9hu4dq4bmafsrfucu48g1nima80nk.apps.googleusercontent.com"

root.render(
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </GoogleOAuthProvider>
);
