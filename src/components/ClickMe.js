import React, { useState } from "react";

// Create a text input
//    Add an event listener to the text input that will capture the input value and set state
// Create a "click me" button
//    When the button is clicked, get the current length of input
//    Add that value to the counter.
// Create a counter. Start at 0. Increment by the number of characters entered into the input.

// When to use state?
// Text input: dynamic, data doesn't exist anywhere else in app
// Counter: dynamic, value can be calculated from text input

const ClickMe = () => {
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(0);

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleClick(e) {
    const length = input.length;
    setCounter((counter) => counter + length);
  }

  return (
    <div>
      <input type="text" onChange={handleChange}></input>
      <button name="clickMe" onClick={handleClick}>
        Click Me
      </button>
      <span>{counter}</span>
    </div>
  );
};

export default ClickMe;
