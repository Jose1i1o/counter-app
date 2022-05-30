import React from "react";
import { createRoot } from 'react-dom/client';
import CounterApp from "./CounterApp";
// import FirstComponent from "./FirstComponent";
import './main.css';


const divRoot = document.getElementById("root");

createRoot(divRoot).render(<CounterApp />)
// createRoot(divRoot).render(<FirstComponent />)