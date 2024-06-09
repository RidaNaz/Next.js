# Middleware
* In Next.js, middleware is a feature that allows developers to execute code before a request is completed.
* Based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.

![App Screenshot](/step20_middleware/public/middleware.png)

* It  is built on top of Vercel's Edge Functions, allowing code to run globally on Vercel’s Edge Network.
* It runs before cached content and routes are matched. See [Matching Paths](https://nextjs.org/docs/app/building-your-application/routing/middleware#matching-paths) for more details.

## Creating Middleware in Next.js
### 1. Creating Middleware in Next.js
Create a file named `middleware.ts` or `middleware.js` in the root of your project to define Middleware. For example, at the same level as `app`, or inside `src` folder.

### 2. Basic Middleware Example:
Below is a simple middleware that logs the request URL and redirects users if they are not authenticated.

```ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/login', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}
```
[Learn Matching Paths](https://nextjs.org/docs/app/building-your-application/routing/middleware#matching-paths)

##### There are two ways to define which paths Middleware will run on:

1. [Custom matcher config](/step20_middleware/README.md#1-matcher)
2. [Conditional statements](/step20_middleware/README.md#2-conditional-statements)

### 1. Matcher
matcher allows you to filter Middleware to run on specific paths.

| middleware.ts
```ts
export const config = {
  matcher: '/about/:path*',

  // You can match a single path or multiple paths with an array syntax:
  matcher: ['/about/:path*', '/dashboard/:path*'],
}
```
[Learn More...](https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher)

### 2. Conditional statements

| middleware.ts
```ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  }
}
```

### Use Cases
Enhance your app’s performance, security, and user experience with middleware:

#### * Authentication and Authorization:
Verify user identity and session cookies before granting access.

#### * Server-Side Redirects:
Redirect based on conditions like locale or user role.

#### * Path Rewriting:
Support A/B testing, feature rollouts, or legacy paths dynamically.

#### * Bot Detection:
Detect and block bot traffic.

#### * Logging and Analytics:
Capture request data for insights.

#### * Feature Flagging:
Enable or disable features seamlessly.

### When Not to Use

#### * Complex Data Fetching:
Use Route Handlers or server-side utilities instead.

#### * Heavy Computational Tasks:
Keep middleware lightweight; offload heavy tasks to Route Handlers.

#### * Extensive Session Management:
Use dedicated authentication services or Route Handlers.

#### * Direct Database Operations:
Perform these within Route Handlers or server-side utilities.