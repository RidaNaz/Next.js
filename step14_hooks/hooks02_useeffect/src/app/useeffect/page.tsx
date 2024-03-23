import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";


// 1. No dependency passed:

useEffect(() => {
    //Runs on every render
  });


// 2. An empty array:
useEffect(() => {
    //Runs only on the first render
  }, []);


// 3. Props or state values:

useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [/*prop, state*/]);


// So, to fix this issue, let's only run this effect on the initial render.

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);


// Here is an example of a useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again:

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);