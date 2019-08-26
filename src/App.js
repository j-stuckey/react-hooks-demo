import React, { useState } from 'react';
import './App.css';

function Example() {
    // declare a new state variable called "count"
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <p>You have clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click here</button>
        </div>
    );
}

export default Example;
