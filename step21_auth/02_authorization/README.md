# Authorization
Once a user is authenticated, you'll need to ensure the user is allowed to visit certain routes, and perform operations such as mutating data with Server Actions and calling Route Handlers.

## Protecting Routes with Middleware
- Create a `middleware.ts` file in your project's root directory.
- Include logic to authorize user access, such as checking for authentication tokens.
- Use the ***[matcher](/step20_middleware/README.md#1-matcher)*** option in your Middleware to specify any routes that do not require authorization checks.
- Write logic to ***verify if a user is authenticated***. Check user roles or permissions for route authorization.
- Redirect unauthorized users to a login or error page as appropriate.

> middleware.ts
```ts
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('currentUser')?.value
 
  if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
    return Response.redirect(new URL('/dashboard', request.url))
  }
 
  if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/login', request.url))
  }
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
```

[Protecting Server Actions](https://nextjs.org/docs/app/building-your-application/authentication#protecting-server-actions)
[Protecting Route Handlers](https://nextjs.org/docs/app/building-your-application/authentication#protecting-route-handlers)