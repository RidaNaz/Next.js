# Creating directories
Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files.

## The app directory
App router allows you to use React's latest features and is an evolution of the Pages Router.
Create an app/ folder, then add a layout.tsx and page.tsx file. These will be rendered when the user visits the root of your application (/).

![App Screenshot](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fapp-getting-started.png&w=1920&q=75&dpl=dpl_E8WJxq5FBaMW27AJwimbfp1c4j61)

* Create a root layout inside app/layout.tsx with the required <html> and <body> tags:

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
* Finally, create a home page app/page.tsx with some initial content:

> app/page.tsx
```typescript
  export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```
### Note:
If you forget to create layout.tsx, Next.js will automatically create this file when running the development server with next dev.

## The pages directory (optional)
If you prefer to use the Pages Router instead of the App Router, you can create a pages/ directory at the root of your project.
* Then, add an index.tsx file inside your pages folder. This will be your home page (/):

> pages/index.tsx
```typescript
  export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```
* Next, add an _app.tsx file inside pages/ to define the global layout.

> pages/_app.tsx
```typescript
  import type { AppProps } from 'next/app'
 
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```
* Finally, add a _document.tsx file inside pages/ to control the initial response from the server.

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
Although you can use both routers in the same project, routes in app will be prioritized over pages. We recommend using only one router in your new project to avoid confusion.

## The public folder (optional)
Create a public folder to store static assets such as images, fonts, etc. Files inside public directory can then be referenced by your code starting from the base URL (/).