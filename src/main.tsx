import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route} from "wouter";
import {SingleResponsabilityPage} from "./01-single-responsability/single-responsability-page.tsx";
import {InterfaceSegregationPage} from "./04-interface-segregation/interface-segregation-page.tsx";
import {OpenClosedPage} from "./02-open-closed/open-closed-page.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Route path="/1"><SingleResponsabilityPage /></Route>
    <Route path="/2"><OpenClosedPage /></Route>
    <Route path="/4"><InterfaceSegregationPage /></Route>
  </React.StrictMode>,
)
