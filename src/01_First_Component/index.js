import React from "react";
import { createRoot } from 'react-dom/client';
import FirstComponent from "./FirstComponent";
import './main.css'; // here we need to specify it is css as it won´t differentiate between the two


const divRoot = document.getElementById("root");

// document.body.append(hello) This doesn´t work but it would be the same

// createRoot(divRoot).render(<FirstComponent greetings="Have a great day! ❤️"/>) I am passing here the props to the component. See it in the console and play with them adding new props.
createRoot(divRoot).render(<FirstComponent />)