"use client"
import { useState } from 'react';

// useState hooks

export default function MyComponent() {
    function createTodos() { }
    const [age, setAge] = useState(28);
    const [name, setName] = useState('Taylor');
    const [todos, setTodos] = useState(() => createTodos());

    return (
        <div>useState Hooks</div>
    )
}
 //current state: age,    initial state: 28,              set function: setAge
//current state: name,    initial state: 'Taylor',        set function: setName
//current state: todos,   initial state: createTodos()    set function: setAge


// useState example

export /*default*/ function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      You pressed me {count} times
    </button>
  );
}

