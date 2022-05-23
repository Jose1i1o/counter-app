import React from "react";
import { createRoot } from 'react-dom/client';
import CounterApp from "./CounterApp";
import './main.css';


const divRoot = document.getElementById("root");

createRoot(divRoot).render(<CounterApp value={0}/>) // numbers need {} because they are not strings and they are not HTML elements (they are JSX)