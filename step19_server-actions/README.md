# Server Actions
Server Actions are ***asynchronous functions*** that are executed on the *server*. They can be used in ***Server and Client Components*** to handle [form submissions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#forms) and **data mutations** in Next.js applications.

### Convention

* A Server Action can be defined with the React "`use server`" directive.
* You can place the directive at the top of an `async` function to mark the function as a Server Action, or at the top of a separate file to mark all exports of that file as Server Actions.

## Server Components
* Server Components can use *both* the ***inline function level*** or ***module level*** `use server` directive.
* To inline a Server Action, add "use server" to the top of the function body:
| Server Component
```ts
export default function Page() {
  // Server Action
  async function create() {
    'use server'
    // ...
  }
 
  return (
    // ...
  )
}
```

## Client Components
* Client Components can *only* import actions that use the ***module-level*** `use server` directive.
* To call a Server Action in a Client Component, create a new file (with `.ts` or `.js` extension) and add the `use server` directive at the top of it.
* All functions within the file will be marked as Server Actions that can be reused in *both* ***Client and Server Components*** :
```ts
'use server'
 
export async function create() {
  // ...
}
```

| can be used in both client & server component
```ts
import { create } from '@/app/actions'
 
export function Button() {
  return (
    // ...
  )
}
```

* You can also pass a Server Action to a Client Component as a ***prop***:

```ts
<ClientComponent updateItem={updateItem} />
```

```ts
'use client'
 
export default function ClientComponent({ updateItem }) {
  return <form action={updateItem}>{/* ... */}</form>
}
```

Here are the benefits of using Server Actions in Next.js:

* **Reduced client-side JavaScript:** This reduces the initial page load time and improves the overall performance.
* **Server-side data mutations:** This eliminates the need for API routes.
* **Data fetching:** This can be done in a more efficient way.
* **Code organization:** This is enforced by separating server-side and client-side code.
* **Authentication and authorization:** Sensitive logic and API keys are kept on the server-side, away from the client-side code.

[Explore More...](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#behavior)