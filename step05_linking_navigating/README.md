To link between pages, you'd traditionally use the `<a>` HTML element. At the moment, the sidebar links use `<a>`elements, but notice what happens when you navigate, There's a full page refresh on each page navigation.

# Linking and Navigating
There are four ways to navigate between routes in Next.js:

* Using the `<Link>` Component
* Using the `useRouter` hook (Client Components)
* Using the `redirect` function (Server Components)
* Using the native History API

# The `<Link>` component
`<Link>` is a built-in component that extends the HTML `<a>` tag to provide prefetching and client-side navigation between routes. It is the primary and recommended way to navigate between routes in Next.js.
You can use it by importing it from `next/link`, and passing a `href` prop to the component.

Here's a [summary of the props](https://nextjs.org/docs/app/api-reference/components/link#props) for the Link Component.

## Examples
* ### Linking to Dynamic Segments
When linking to *dynamic segments*, you can use **template literals and interpolation** to generate a list of links. For example, to generate a list of blog posts:

> app/blog/PostList.js
```typescript
import Link from 'next/link'
 
export default function PostList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
```

* ### [Checking Active Links](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#checking-active-links)
* ### [Scrolling to an id](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#scrolling-to-an-id)
* ### [Disabling scroll restoration](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#disabling-scroll-restoration)

# `useRouter()` hook
The `useRouter` hook allows you to programmatically change routes from Client Components.

> app/pages.tsx
```typescript
'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  )
}
```
For a full list of `useRouter` methods, see the [API reference](https://nextjs.org/docs/app/api-reference/functions/use-router).

### Recommendation:
Use the `<Link>` component to navigate between routes unless you have a specific requirement for using `useRouter`.

# `redirect` function
The redirect function allows you to redirect the user to another URL. redirect can be used in Server Components, Route Handlers, and Server Actions.

For Server Components, use the `redirect` function instead.

> app/team/[id]/page.tsx
```typescript
import { redirect } from 'next/navigation'
 
async function fetchTeam(id: string) {
  const res = await fetch('https://...')
  if (!res.ok) return undefined
  return res.json()
}
 
export default async function Profile({ params }: { params: { id: string } }) {
  const team = await fetchTeam(params.id)
  if (!team) {
    redirect('/login')
  }
 
  // ...
}
```
See the redirect [API reference](https://nextjs.org/docs/app/api-reference/functions/redirect) for more information.

# Using the native History API
Next.js allows you to use the native `window.history.pushState` and `window.history.replaceState` methods to update the browser's history stack without reloading the page.

`pushState` and `replaceState` calls integrate into the Next.js Router, allowing you to sync with `usePathname` and `useSearchParams`.

## [`window.history.pushState`](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#windowhistorypushstate)

## [`window.history.replaceState`](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#windowhistoryreplacestate)