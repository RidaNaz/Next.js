# CSS Styling
There are 3 different ways for styling Next.js application:
* Global styling
* Tailwind and CSS modules
* Clsx library

## Global Styles
Every newly created Next.js project comes with a global.css stylesheet. You can use this file to add CSS rules to all the routes in your application - such as CSS reset rules, site-wide styles for HTML elements like links, and more.
You can import `global.css` in any component in your application, but it's usually good practice to add it to your top-level component.
Add global styles to your application by navigating to `/app/layout.tsx` and importing the `global.css` file:

> /app/layout.tsx
```typescript
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```
### Note:
 If you take a look inside `global.css`, you'll notice some `@tailwind` directives from where the styles come:

> /app/global.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Tailwind
Tailwind is a CSS framework that speeds up the development process by allowing you to quickly write utility classes directly in your TSX markup.
When you use `create-next-app` to start a new project, Next.js will ask if you want to use `Tailwind`. If you select `yes`, Next.js will automatically install the necessary packages and configure Tailwind in your application.

In Tailwind, you style elements by adding class names. For example, adding the class "text-blue-500" will turn the <div> text blue:
> example
```css
<div className="text-blue-500">I'm blue!</div>
```

## CSS modules
If you prefer writing traditional CSS rules or keeping your styles separate from your JSX - CSS Modules are a great alternative.
Inside `/app/ui`, create a new file called `home.module.css` and add the following CSS rules:
> /app/home.module.css
```css
.shape {
  height: 0;
  width: 0;
  border-bottom: 30px solid black;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}
```

Then, inside your `/app/page.tsx` file import the styles and replace the Tailwind class names from the `<div>` you've added with styles.shape:
> /app/page.tsx
```css
import styles from '@/app/ui/home.module.css';
<div className={styles.shape} />;
```

### Note:
Tailwind and CSS modules are the two most common ways of styling Next.js applications. Whether you use one or the other is a matter of preference - you can even use both in the same application!

## `Clsx` library
`clsx` is a library that lets you toggle class names easily. There may be cases where you may need to conditionally style an element based on state or some other condition.

You can use clsx to conditionally apply the classes, like this:

> /app/ui/invoices/status.tsx
```typescript
import clsx from 'clsx';
 
export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    />
    // ...
)}
```

## Other styling solutions
In addition to the approaches I've discussed, you can also style your Next.js application with:

* Sass which allows you to import `.css` and `.scss` files.
* CSS-in-JS libraries such as styled-jsx, styled-components, and emotion.