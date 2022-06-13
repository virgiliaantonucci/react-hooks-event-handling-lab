// Code Keypad Component Here
import React from 'react'
//import ReactDOM from 'react-dom';

/*const root = ReactDOM.createRoot(
    document.getElementById('root')
  ); */

function Keypad() {
    const password = (
        <input type="password" onChange ={console.log('Entering password...')}/>
    )
    //root.render(password);
    return password
}

export default Keypad;