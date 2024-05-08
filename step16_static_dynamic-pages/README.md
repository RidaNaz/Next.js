# Static Pages & Dynamic Pages

Static Pages are pre-rendered HTML pages generated at *build time*, offering optimal performance and SEO benefits.
[view static page code](./src/app/page.tsx)

Dynamic pages are rendered on the server for e*ach request*, making them flexible for handling dynamic data that changes frequently.
[view dynamic page code](./src/app/page2/page.tsx)

#### ***You can combine static and dynamic elements within a single page.***

In Next.js 14, there are several effective ways to *combine static and dynamic elements within a single page*, offering flexibility to tailor your application's structure based on your specific needs:

* #### Static Content with Dynamic Sidebars or Overlays:
This approach is ideal for pages with a main static content area that remains consistent across requests. However, you might want to include dynamic sidebars or overlays that update based on user interactions or real-time data.

* #### Static Layout with Dynamic Data Population:
This method is suitable for pages with a pre-defined layout but require dynamic data to be populated within sections of the layout.

* #### Nested Static and Dynamic Routes:
This approach works well when you have a mix of static and dynamic content within your application's URL structure. For example, a blog might have a static root page (`/blog`) displaying a list of recent posts, while individual blog posts would be dynamic routes (`/blog/[slug]`).

* #### ISR for Hybrid Dynamic Content:
ISR can be a powerful tool for balancing the benefits of static pages and dynamic pages. Use static pages generated with getStaticProps and export async function getStaticProps but configure ISR to automatically revalidate them at regular intervals (e.g., hourly) or on specific events (e.g., database updates) to ensure they have the latest data.

## Incremental Static regeneration (ISR)
In Next.js 14, Incremental Static Regeneration (ISR) is a powerful technique that renders static page with ability to keep content fresh. Users might still see cached content during revalidation intervals, but subsequent requests will deliver the latest data.
The `revalidate` option specifies the time interval in seconds for Next.js to check for data updates.

*Static page with Dynamic features!*

[view code of ISR appproach](./src/app/page3/page.tsx)

## Generate Static Params
The `generateStaticParams` function can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time.

*Dynamic page with Static features!*

[view generatestatiparams code](./src/app/[id]/page.tsx)