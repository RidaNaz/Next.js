# Next.js

Next.js is a React framework for building full-stack web applications. We use React Components to build user interfaces, and Next.js for additional features and optimizations.
Next.js can help you build interactive, dynamic, and fast React applications.

## Main Features

- Routing :	A file-system based router built on top of Server Components that supports layouts, nested routing, loading states, error handling, and more.

- Rendering : Client-side and Server-side Rendering with Client and Server Components. Further optimized with Static and Dynamic Rendering on the server with Next.js. Streaming on Edge and Node.js runtimes.

- Data Fetching	: Simplified data fetching with async/await in Server Components, and an extended fetch API for request memoization, data caching and revalidation.

- Styling : Support for your preferred styling methods, including CSS Modules, Tailwind CSS, and CSS-in-JS
Optimizations	Image, Fonts, and Script Optimizations to improve your application's Core Web Vitals and User Experience.

- TypeScript : Improved support for TypeScript, with better type checking and more efficient compilation, as well as custom TypeScript Plugin and type checker.

## App Router vs Page Router

Next.js has two different routers: the App Router and the Pages Router. The App Router is a newer router that allows you to use React's latest features, such as Server Components and Streaming. The Pages Router is the original Next.js router, which allowed you to build server-rendered React applications and continues to be supported for older Next.js applications.

The breadcrumbs at the top of the page will also indicate whether you're viewing App Router docs or Pages Router docs.

# Installation

### System Requirements:
Node.js 18.17 or later.

macOS, Windows (including WSL), and Linux are supported.

## Automatic Installation
We recommend starting a new Next.js app using create-next-app, which sets up everything automatically for you. To create a project, run:

```bash
  npx create-next-app@latest
```
On installation, we'll see the some prompts. After the prompts, create-next-app will create a folder with your project name and install the required dependencies.

### Keep in mind
- Next.js now ships with TypeScript, ESLint, and Tailwind CSS configuration by default.

- You can optionally use a src directory in the root of your project to separate your application's code from configuration files.

## Manual Installation
To manually create a new Next.js app, install the required packages:

```bash
  npm install next@latest react@latest react-dom@latest
```

Open your package.json file and add the following scripts:

> package.json
```
  {
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```
These scripts refer to the different stages of developing an application:

- **dev:** runs next dev to start Next.js in development mode.
- **build:** runs next build to build the application for production usage.
- **start:** runs next start to start a Next.js production server.
- **lint:** runs next lint to set up Next.js' built-in ESLint configuration.