import React from "react";
import {createRoot}  from "react-dom/client";
import App from './App';

/* The above code is creating a root element and rendering the App component to the root element. */
const container = document.getElementById("root");
const root = createRoot(container); 
root.render(<App/>);

