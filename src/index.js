import React from "react";
import { createRoot } from 'react-dom/client';
import CounterApp from "./CounterApp";
import './main.css';


const divRoot = document.getElementById("root");

createRoot(divRoot).render(<CounterApp />)