# Context Hooks
* `useContext` is a hook that enables function components to access the value provided by a React Context object.
* It eliminates the need to manually pass props down through multiple component levels, making data sharing more efficient for "global" data like authentication state, theme preferences, etc.

## Steps to Use useContext in Next.js:
#### Step 1: Create a Context
Import `createContext` from React and Use it to create a new context object:

```typescript
"use client";
import React, { createContext } from 'react';

const MyContext = createContext(defaultValue); // Set a default value if needed
```

#### Step 2: Provide Context Value
Create a provider component to wrap the parts of your app that need access to the context.
This provider component holds the context state using `useState` and exposes it through the value `prop`.

```typescript
import { MyContext } from "./context"
import {useState} from "react"

function MyProvider({ children }) {
  const [someState, setSomeState] = useState(initialValue); // Manage context state

  const value = { someState, setSomeState }; // Provide the state and update function

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
}
```

#### Step 3: Consume Context Value
Import the created context object (e.g., MyContext) into the components that need to access its value and Use the useContext hook to retrieve the context value.

```typescript
import { useContext } from "react";
import MyContext from './MyContext';

function MyComponent() {
  const { someState, setSomeState } = useContext(MyContext);

  // Use someState and setSomeState here
}
```
#### Step 4: Placement of the Provider
Ideally, place the provider component near your application's root (e.g., `_app.js` or a `layout.tsx`) to make the context value accessible throughout the component tree.

```typescript
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       `<CountProvider> {children} </CountProvider>`
        </body>
    </html>
  );
}
```