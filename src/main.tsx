import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Link, Route} from "wouter";
import {SingleResponsibilityPage} from "./01-single-responsibility/single-responsibility-page.tsx";
import {InterfaceSegregationPage} from "./04-interface-segregation/interface-segregation-page.tsx";
import {OpenClosedPage} from "./02-open-closed/open-closed-page.tsx";
import {LiskovSubstitutionPage} from "./03-liskov-substitution/liskov-substitution-page.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Route path="/1"><SingleResponsibilityPage /></Route>
    <Route path="/2"><OpenClosedPage /></Route>
    <Route path="/3"><LiskovSubstitutionPage /></Route>
    <Route path="/4"><InterfaceSegregationPage /></Route>
    <Route path="/">
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="grid grid-cols-2 gap-5 text-center font-bold">
          <Link className="px-10 py-5 bg-blue-100 rounded" to="/1">1 - Single Responsibility ⛑️</Link>
          <Link className="px-10 py-5 bg-blue-100 rounded" to="/2">2 - Open-closed 🔓</Link>
          <Link className="px-10 py-5 bg-blue-100 rounded" to="/3">3 - Liskov Substitution 🔨</Link>
          <Link className="px-10 py-5 bg-blue-100 rounded" to="/4">4 - Interface Segregation ✂️</Link>
        </div>
      </div>
    </Route>
  </React.StrictMode>,
)
