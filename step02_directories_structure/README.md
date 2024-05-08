# Creating directories
Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files. In Next.js 14, you have two primary options for structuring your application's routes and components:

## The app directory
App router allows you to use React's latest features and is an evolution of the Pages Router.
Create an app/ folder, then add a layout.tsx and page.tsx file. These will be rendered when the user visits the root of your application (/).

![App Screenshot](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fapp-getting-started.png&w=1920&q=75&dpl=dpl_E8WJxq5FBaMW27AJwimbfp1c4j61)

* Create a root layout inside `app/layout.tsx` with the required <html> and <body> tags:

> app/layout.tsx
```typescript
  export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

* Finally, create a home page `app/page.tsx` with some initial content:

> app/page.tsx
```typescript
  export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```
### Note:
If you forget to create `layout.tsx`, Next.js will automatically create this file when running the development server with next dev.

## The pages directory (optional)
If you prefer to use the Pages Router instead of the App Router, you can create a `pages/` directory at the root of your project.

* Then, add an `index.tsx` file inside your pages folder. This will be your home page (/):

> pages/index.tsx
```typescript
  export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```

* Next, add an `_app.tsx` file inside `pages/` to define the global layout.

> pages/_app.tsx
```typescript
  import type { AppProps } from 'next/app'
 
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

* Finally, add a `_document.tsx` file inside `pages/` to control the initial response from the server.

> pages/_document.tsx
```typescript
import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```
### Note:
Although you can use both routers in the same project, routes in app will be prioritized over pages. I recommend using only one router in your new project to avoid confusion.

## The public folder (optional)
Create a public folder to store *static assets such as images, fonts, etc*. Files inside public directory can then be *referenced* by your code starting from the base URL ***(/)***.

# Project Structures
## Folder Structure of Next.js

Next.js is a framework built on top of React.js, designed to facilitate server-side rendering and static site generation. It's known for its 'convention over configuration'. Here's a typical Next.js folder structure:

- **src/:**  *This is where most of the code lives. It typically contains subdirectories like components/, containers/, hooks/, utils/, and others.*

- **pages/:**  *The heart of a Next.js application. Each TypeScript file under this directory becomes a route based on its file name. Example: pages/index.ts is the entry point (home page), and pages/about.ts would correspond to the /about route.*

- **public/:**  *This directory holds static files like images, fonts, and other assets. You can reference these files in your code starting from the base URL of your site.*

- **components/:**  *Although not required by Next.js, it's a common practice to have this folder for all your shared components. Example: components/Header.js, components/Footer.js.*

- **styles/:**  *This is where your CSS files live. You can have global styles, and with the support of CSS Modules, you can also have component-specific styles.*

- **node_modules/:**  *Contains all your project's dependencies.*

- **package.json:**  *Manages the list of packages that your project depends on, scripts, and versioning.*

- **next.config.js:**  *Optional configuration file for customizing various aspects of Next.js.*

- **utils/:**  *Utility functions and helpers.*

- **.env files:**  *For managing environment variables.*

Next.js, with its opinionated structure, simplifies the process of setting up a server-rendered application.
