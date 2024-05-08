# Effect Hooks
Effects let a component connect to and synchronize with external systems (like a chat service).
This includes dealing with network, browser DOM, animations, widgets written using a different UI library, and other non-React code.

## useEffect
`useEffect` accepts two arguments. The second argument is optional.

`useEffect` (function, dependency?)
#### Example:
```typescript
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);
```

* I use setTimeout() to count 1 second after initial render.
* `useEffect` runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
* We should always include the second parameter which accepts an array. We can optionally pass dependencies to `useEffect` in this array.

[view more examples](/step14_hooks/hooks02_useeffect/src/app/page.tsx)

### Effect Cleanup
- Some effects require cleanup to reduce memory leaks.
- Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
- We do this by including a return function at the end of the useEffect Hook.
- To clear the timer, we had to name it.

```typescript
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);
```

### [Connecting to an external system](https://react.dev/reference/react/useEffect#connecting-to-an-external-system)