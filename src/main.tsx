import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route} from "wouter";
import {LoginPage} from "./01-single-responsability/login-page.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Route path="/1"><LoginPage /></Route>
  </React.StrictMode>,
)
