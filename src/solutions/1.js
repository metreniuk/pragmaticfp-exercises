import React from "react";
/*
  Solution 1.
*/

/*
  🦄: "handleClick" should show a modal with a greeting.
  Example: "Hello, Egorka!"
*/
function handleClick(event) {
  // Tip: "alert" is available globally and accepts a string

  alert("Hello, Egorka!");
}

// 🌈 This is a fancy way to write html inside JavaScript
// think of it just as html on steroids.
// Don't touch it 👀(at least if you don't know what you are doing).
const Usage = () => <button onClick={handleClick}>Click me!</button>;
export default Usage;
