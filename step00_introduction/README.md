To effectively learn Next.js, it helps to be familiar with JavaScript, React, and related web development concepts.

## Building blocks of a web application

There are a few things you need to consider when building modern applications. Such as:

- User Interface - how users will consume and interact with your application.

- Routing - how users navigate between different parts of your application.

- Data Fetching - where your data lives and how to get it.

- Rendering - when and where you render static or dynamic content.

- Integrations - what third-party services you use (for CMS, auth, payments, etc.) and how you connect to them.

- Infrastructure - where you deploy, store, and run your application code (serverless, CDN, edge, etc.).

- Performance - how to optimize your application for end-users.

- Scalability - how your application adapts as your team, data, and traffic grow.

- Developer Experience - your team's experience building and maintaining your application.


# React Foundations

React is a JavaScript library for building interactive user interfaces. By user interfaces (UI), we mean the elements that users see and interact with on-screen.

By library, we mean React provides helpful functions (APIs) to build UI, but leaves it up to the developer where to use those functions in their application.

![App Screenshot](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Flearn-react-components.png&w=1920&q=75&dpl=dpl_yW71M9zkgCfN9hKF6Vmz3rjxytkZ)

## Rendering User Interfaces (UI)

To understand how React works, we first need a basic understanding of how browsers interpret your code to create (or render) user interfaces (UI).

When a user visits a web page, the server returns an HTML file to the browser that may look like this:

![App Screenshot](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Flearn-html-and-dom.png&w=1920&q=75&dpl=dpl_yW71M9zkgCfN9hKF6Vmz3rjxytkZ)

The browser then reads the HTML and constructs the Document Object Model (DOM).

### What is the DOM?

The DOM is an object representation of the HTML elements. It acts as a bridge between your code and the user interface, and has a tree-like structure with parent and child relationships.

![App Screenshot](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Flearn-dom-and-ui.png&w=1920&q=75&dpl=dpl_yW71M9zkgCfN9hKF6Vmz3rjxytkZ)

You can use DOM methods and JavaScript, to listen to user events and manipulate the DOM by selecting, adding, updating, and deleting specific elements in the user interface. DOM manipulation allows you to not only target specific elements, but also change their style and content.

## Getting Started with React

To use React in your newly created project, load two React scripts from an external website called unpkg.com:

- react - is the core React library.
- react-dom - provides DOM-specific methods that enable you to use React with the DOM.

## Limitation of React

- Lack of Updated Documentation
- Does Not Support SEO
- Limited functionality
- Uses JSX
- Longer Initialization Time

When it comes to building full stack applications, React has been the go-to JavaScript library for many developers. However, there’s a powerful framework called Next.js that adds significant value and efficiency to the development process.