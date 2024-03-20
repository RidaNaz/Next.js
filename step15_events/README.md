# Events
React lets you add event handlers to your JSX. Event handlers are your own functions that will be triggered in response to interactions like clicking, hovering, focusing form inputs, and so on.

## Adding Event Handlers

> Example
```typescript
function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}
```

#### Note:
- React events are written in camelCase syntax, onClick.
- React event handlers are written inside curly braces, onClick={shoot}.

## Passing Arguments
To pass an argument to an event handler, use an arrow function.

> Send "Goal!" as a parameter to the shoot function, using arrow function:
```typescript
function Football() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}
```

