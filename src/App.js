import React, {useState} from "react";
import './style.css'

/**
 * The App function returns a div with a h1, three buttons, and the h1 displays the number state.
 * @returns A function that returns a div with three buttons and a h1 tag.
 */
const App = () =>{
    const [number, setNumber] = useState(0)
    return <div>
        <h1>{number}</h1>
        <button onClick={()=> setNumber(number+1)} className="button">Add</button>
        <button onClick={()=> setNumber(number-1)} className="button">Less</button>
        <button onClick={()=> setNumber(0)} className="button">Reset</button>
    </div>
}

export default App;