# Components
In Next.js 14, components form the fundamental building blocks of your application, similar to other React-based frameworks.
A component is a reusable piece of code that defines a particular section of your user interface (UI) and its behavior. It encapsulates everything needed to render that section, including:

- **UI Elements:** These can be basic HTML elements (like `div`, `p`, and `button`) or custom components you define.
- **Logic:** JavaScript code that defines how the component behaves and interacts with data or user input.
- **State:** Data specific to the component that can change over time, often managed using the `useState` hook or state management libraries like Redux or Context API.

### Key Points.
* Components are a function.
* The first letter of a component's name is capitalized.
* Components are reusable.
* TSX includes HTML-like syntax mixed with TypeScript expressions.
* When rendered, TSX is converted into HTML elements.
* We write HTML and CSS inside JavaScript and TypeScript within a component.
* You can write JavaScript and TypeScript inside HTML within a component

# Types of components
![App Screenshot](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Flearn-client-and-server-environments.png&w=1920&q=75&dpl=dpl_DCtH3CdUprp1CVB8tivKY8y2wMuB)
## Server Components
By default, All components are server side. These components allow you to run specific parts of your application logic on the server, offering potential benefits:

- Improved SEO and initial load performance.
- Data fetching on the server for security or performance reasons.
- Pages that primarily display static content.

## Client Components
Client component can make with `use client` directive.Primarily handle rendering and user interaction within the browser's environment.

- Highly interactive features and real-time updates.
- Components heavily reliant on user interaction.
- Situations where dynamic client-side logic is essential.

<img src="/step08_components/public/Screenshot.jpg" >