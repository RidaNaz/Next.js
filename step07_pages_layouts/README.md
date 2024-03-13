The special files `layout.js`, `page.js`, and `template.js` allow you to create UI for a route.

# Pages
* A page is UI that is unique to a route. You can define a page by default exporting a component from a page.js file.
*For example, to create your index page, add the page.js file inside the app directory*

* Then, to create further pages, create a new folder and add the page.js file inside it.
*For example, to create a page for the /dashboard route, create a new folder called dashboard, and add the page.js file inside it.*

### Note:
- The `.js`, `.jsx`, or `.tsx` file extensions can be used for Pages.
- A page is always the leaf of the route subtree.
- A `page.js` file is required to make a route segment publicly accessible.
- Pages are **Server Components** by default, but can be set to a **Client Component**.
- Pages can fetch data.

# Layouts
A layout is UI that is shared between multiple routes. On navigation, layouts preserve state, remain interactive, and do not re-render. Layouts can also be nested.

You can define a layout by default exporting a React component from a `layout.js` file. The component should accept a `children` prop that will be populated with a child layout (if it exists) or a page during rendering.

> app/dashboard/layout.tsx
```typescript
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>
 
      {children}
    </section>
  )
}
```

## Root Layout (Required)
The root layout is defined at the top level of the `app` directory and applies to all routes. This layout is **required** and must contain `html` and `body` tags, allowing you to modify the initial HTML returned from the server.

## Nesting Layouts
By default, layouts in the folder hierarchy are nested, which means they wrap child layouts via their children prop. You can nest layouts by adding `layout.tsx` **inside specific route segments (folders)**.

For example, to create a `layout` for the `/dashboard` route, add a new `layout.js` file inside the dashboard folder:
![App Screenshot](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fnested-layout.png&w=1920&q=75&dpl=dpl_6KCyCubUZsUJqRhbdCqXmYHbtEPT)

## Layout Structure
### Imports:

* `type { Metadata } from "next"`: This line imports the type definition for the `Metadata` object from Next.js. This object is used to define metadata about your application, such as the title and description.
* `import { Inter } from "next/font/google"`: This line imports the `Inter` font family from Google Fonts using the Next.js font API. The `subsets: ["latin"]` option specifies that you only want the Latin character set for this font.
* `import "./globals.css"`;: This line imports the "globals.css" file, which likely contains styles that are applied globally to your entire application.

### Font Definition:

* `const inter = Inter({ subsets: ["latin"] });`: This line defines a constant named `inter` using the `Inter` font from Google Fonts. You can later use this constant to apply the font styling to your components.

### Metadata:

* `export const metadata: Metadata = { ... }`: This line defines a constant named `metadata` and assigns it an object that matches the `Metadata` type. This object contains properties like `title` and `description` that will be used to set metadata about your application.

### Root Layout:

* `export default function RootLayout({ children }) { ... }`: This line defines the default export of the file, which is a React component named `RootLayout`. This component is the starting point for your application's layout and will wrap all of your other pages and components.

    * The component takes a single prop named `children`. This prop will hold the content of the page that is being rendered within the layout.
    * Inside the component's body, it returns an `html` element with an `en` language attribute.
    * The `body` element is then styled using the `inter.className` property from the imported font. This ensures that the `Inter` font is applied to the entire application's body.
    * Finally, the `children` **prop** is rendered within the `body` element, allowing the content of each page to be displayed within the overall layout.

In summary, this code sets up the basic structure and font styling for your Next.js application. It defines metadata, imports a font from Google Fonts, and creates a `RootLayout` component that wraps all of your application's content.

### Note:
- `.js`, `.jsx`, or `.tsx` file extensions can be used for Layouts.

- Only the root layout can contain `<html>` and `<body>` tags.

- When a `layout.tsx` and `page.tsx` file are defined in the same folder. The layout will wrap the page.

- Layouts are *Server Components* by default but can be set to a *Client Component*.

- Layouts can fetch data.

- Passing data between a parent layout and its children is not possible. However, you can fetch the same data in a route more than once, and React will automatically dedupe the requests without affecting performance.

- Layouts do not have access to the route segments below itself. To access all route segments, you can use `useSelectedLayoutSegment` or `useSelectedLayoutSegments` in a *Client Component*.

- You can use Route Groups to opt specific route segments in and out of shared layouts.

- You can use Route Groups to create multiple root layouts.

- Migrating from the `pages` directory: The root layout replaces the `_app.tsx` and `_document.tsx` files.