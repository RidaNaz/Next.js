# Props
Props is a special keyword in React that stands for ***properties*** and is used for passing data from one component to another. Props act as a mechanism for passing data *(information)* from **parent components** to their **child components**. They allow you to customize the **behavior** and **appearance** of child components based on the data provided by the parent component.

**React Props are like function arguments in JavaScript and attributes in HTML.**

There are three steps for using `props`:

* ## Define an attribute and its value in Parent Component.
let's create a parent component that will pass props to its child component.

```typescript
// components/ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const message = "Hello from Parent!";

  return (
    <div>
      <ChildComponent message={message} />
    </div>
  );
};

export default ParentComponent;

```

* ## Pass it to the child component(s) by using props.
Now, let's create a child component that will receive props from its parent component.

```typescript
// components/ChildComponent.js
import React from 'react';

const ChildComponent = (props) => {
  return (
    <div>
      <p>{props.message}</p>
    </div>
  );
};

export default ChildComponent;

```

* ## Render the props data.
Finally, let's use these components in a Next.js page.

```tsx
// pages/index.js
import React from 'react';
import ParentComponent from '../components/ParentComponent';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <ParentComponent />
    </div>
  );
};

export default HomePage;
```
- The `ParentComponent` passes a message `prop` to the `ChildComponent`.
- The `ChildComponent` receives the message `prop` and renders it within a paragraph `<p>`.
- In the HomePage (a page component), I can import and use the `ParentComponent`.


### Note:
Whenever you use `JavaScript/TypeScript` in `HTML` tags wrap it in `{}`.