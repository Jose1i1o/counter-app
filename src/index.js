import React from "react";
import { createRoot } from 'react-dom/client';
import FirstComponent from "./FirstComponent";
import './main.css'; // here we need to specify it is css as it won´t differentiate between the two


const divRoot = document.getElementById("root");

// document.body.append(hello) This doesn´t work but it would be the same

createRoot(divRoot).render(<FirstComponent />)