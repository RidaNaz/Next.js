# Dynamic Routes
When you don't know the exact segment names ahead of time and want to create routes from dynamic data, you can use Dynamic Segments that are filled in at request time or prerendered at build time.

## Convention
A Dynamic Segment can be created by wrapping a folder's name in square brackets: `[folderName]`. For example, `[id]` or `[slug]`.

Dynamic Segments are passed as the `params` prop to `layout`, `page`, `route`, and `generateMetadata` functions.

### Example
For example, a blog could include the following route app/blog/[slug]/page.js where [slug] is the Dynamic Segment for blog posts.

> app/blog/[slug]/page.tsx
```typescript
export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>
}
```

Route            	         |Example URL      |    params     
| :------------------------- | :-------------- | :------------------ |
app/blog/[slug]/page.js	     |     /blog/a     |	{ slug: 'a'      }
app/blog/[slug]/page.js	     |     /blog/b     |	{ slug: 'b'      }
app/blog/[slug]/page.js	     |     /blog/c     |	{ slug: 'c'      }

### Note:
Dynamic Segments are equivalent to Dynamic Routes in the `pages` directory.

### [Generating Static Params](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#generating-static-params)
### [Catch-all Segments](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments)
### [Optional Catch-all Segments](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#optional-catch-all-segments)