import React from "react";
import { createRoot } from 'react-dom/client';

const hello = <h1>I love you</h1>


const divRoot = document.getElementById("root");

// document.body.append(hello) This doesn´t work but it would be the same

createRoot(divRoot).render(hello)