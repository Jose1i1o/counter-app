import React from "react";
import { createRoot } from 'react-dom/client';
// import CounterApp from "./CounterApp";
import FirstComponent from "./FirstComponent";
import './main.css';


const divRoot = document.getElementById("root");

createRoot(divRoot).render(<FirstComponent greetings="Lola is my dog´s name" />)
// createRoot(divRoot).render(<CounterApp />)