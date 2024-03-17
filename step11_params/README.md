# Params
In Next.js, parameters (often referred to as `params`) are used in dynamic routes to capture segments of a URL and pass them as props to your page components. This allows you to create dynamic pages that can respond to different URL patterns.

Here's a breakdown of how `params` work in Next.js 14:

* # Dynamic Routes:

- When you don't know the exact name of a segment in a URL path beforehand, you can use dynamic segments wrapped in square brackets `[]`. These segments become placeholders for capturing values from the URL.
- Example: `pages/blog/[slug].js` represents a dynamic route where `[slug]` captures a specific blog post slug (e.g., `/blog/my-awesome-post`).

* # Accessing Params:

You can access the captured value(s) of dynamic segments using two main approaches:

   * ## `useParams` Hook (Client-side):

This hook, imported from `next/router`, allows you to access captured `params` within client-side components (functional components).

```typescript
import { useRouter } from 'next/router';

function BlogPost({ slug }) {
  // You won't receive "slug" as a prop here
  const router = useRouter();
  const { slug } = router.query; // Access "slug" from query object
  // Now you can use the "slug" to fetch data or display content
}
```

   * ## Filename-based Access (Server-side):

If you're using data fetching functions like `getStaticProps` or `getServerSideProps`, you can directly access the captured `params` from the function arguments:

```typescript
export async function getStaticProps({ params }) {
  const { slug } = params; // Access "slug" directly from the argument
  const postData = await fetch(`https://api.example.com/posts/${slug}`);
  // ... use postData
}
```

### Key Points:

- Dynamic routes with params enable you to create URLs that are more user-friendly and search engine optimized (SEO) by using descriptive slugs instead of cryptic IDs.
- Params allow you to fetch data or render content specific to the captured value, creating a dynamic user experience.