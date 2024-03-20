# Hooks
Hooks let you use different React features from your components. You can either use the *built-in Hooks* or *combine them* to build your own. 

- You must `import` Hooks from `react`.

- Here we are using the `useState` Hook to keep track of the application state.

- State generally refers to application data or properties that need to be tracked.

## Hook Rules
There are 3 rules for hooks:

- Hooks can only be called inside React function components.
- Hooks can only be called at the top level of a component.
- Hooks cannot be conditional.

## Built-in React Hooks

### [State Hooks](./hook01_usestate/README.md)
To add state to a component, use one of these Hooks:

* `useState` declares a state variable that you can update directly.
* `useReducer` declares a state variable with the update logic inside a reducer function.

### Context Hooks
* `useContext` reads and subscribes to a context.

### Ref Hooks
* `useRef` declares a ref. You can hold any value in it, but most often it’s used to hold a DOM node.
* `useImperativeHandle` lets you customize the ref exposed by your component. This is rarely used.

### Effect Hooks
* `useEffect` connects a component to an external system.
There are two rarely used variations of `useEffect` with differences in timing:

  - `useLayoutEffect` fires before the browser repaints the screen. You can measure layout here.
  - `useInsertionEffect` fires before React makes changes to the DOM. Libraries can insert dynamic CSS here.

### Performance Hooks
To skip calculations and unnecessary re-rendering, use one of these Hooks:

* `useMemo` lets you cache the result of an expensive calculation.
* `useCallback` lets you cache a function definition before passing it down to an optimized component.

To prioritize rendering, use one of these Hooks:

* `useTransition` lets you mark a state transition as non-blocking and allow other updates to interrupt it.
* `useDeferredValue` lets you defer updating a non-critical part of the UI and let other parts update first.

### Resource Hooks
To read a value from a resource, use this Hook:

* `use` lets you read the value of a resource like a Promise or context.

### Other Hooks
These Hooks are mostly useful to library authors and aren’t commonly used in the application code.

* `useDebugValue` lets you customize the label React DevTools displays for your custom Hook.
* `useId` lets a component associate a unique ID with itself. Typically used with accessibility APIs.
* `useSyncExternalStore` lets a component subscribe to an external store.

## [Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component)