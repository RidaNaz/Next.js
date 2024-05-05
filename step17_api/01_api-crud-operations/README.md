# APIs in Next.js

## API Routes 
* An API route is a **URL** that directs incoming requests from the client to the appropriate server resource that will handle the requests.

* API routes in Next.js enable you to create **API endpoints** *as Node.js serverless functions*. These endpoints allow you to make *HTTPS requests* and also *communicate with a database*.

![App Screenshot](/step17_api/public/api_3.png)

## Route Handlers
* you can create API endpoints using Route Handlers.

![App Screenshot](/step17_api/public/api_4.avif)

* Route Handlers allow you to create **custom request handlers** for a given route using the ***Web Request and Response APIs***.

| app/api/route.js
``` typescript
export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {}
```

* Route Handlers can be nested inside the `app` directory, similar to `page.ts` and `layout.ts`. But there cannot be a `route.ts` file at the same route segment level as `page.ts`.

### Extended `NextRequest` and `NextResponse` APIs
In addition to supporting native `Request` and `Response`. Next.js extends them with `NextRequest` and `NextResponse` to provide convenient helpers for advanced use cases.

# CRUD Operations Implementation:
CRUD ***(Create, Read, Update, Delete)*** operations with API in Next.js 14 can be performed by creating an ***API route*** and defining an ***endpoint***.

* Import necessary libraries like `next/api` for handling API `requests` and `responses`.

```typescript
import { NextApiRequest, NextApiResponse } from 'next';
```

## 1. Create (POST):