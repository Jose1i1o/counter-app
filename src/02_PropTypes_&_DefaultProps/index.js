import React from "react";
import { createRoot } from 'react-dom/client';
import FirstComponent from "./FirstComponent";
import './main.css';


const divRoot = document.getElementById("root");

// createRoot(divRoot).render(<FirstComponent greetings={ 123 }/>) // Not a string
// createRoot(divRoot).render(<FirstComponent />) // Throw error
createRoot(divRoot).render(<FirstComponent greetings="Have a nice day! ☀️" />) // all good