# State Hooks 
State lets a component “remember” information like user input. For example, a form component can use state to store the input value, while an image gallery component can use state to store the selected image index.

## useState
- The React `useState` Hook allows us to track state in a function component.
- `useState` is a React Hook that lets you add a state variable to your component.
- State generally refers to data or properties that need to be tracking in an application.

### Import useState
To use the `useState` Hook, we first need to import it into our component.

> At the top of your component, import the `useState` Hook.
```typescript
import { useState } from "react";
```

### Initialize useState
We initialize our state by calling `useState` in our function component.

`useState` accepts an initial state and returns two values:
* The current state.
* A function that updates the state.

> Initialize state at the top of the function component.
```typescript
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("purple");
}
```
#### Note:

- we are destructuring the returned values from `useState`.
- The first value, color, is our *current state*.
- The second value, setColor, is the *function* that is used to *update our state*.
- These *names are variables* that can be named anything you would like.

[see code](/step14_hooks/hooks01_usestate/src/app/MyComponent.tsx)