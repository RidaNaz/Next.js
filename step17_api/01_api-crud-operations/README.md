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

## API Dynamic Route
* In Next.js, an API dynamic route is a route that can handle *dynamic parameters in the URL path*.
* This allows you to create *reusable API endpoints* that can handle different scenarios based on the input parameters.
* Inside the API route file, you can *access the dynamic parameters* using the `req.params` object.
[see code](/step17_api/01_api-crud-operations/src/app/api/[id]/route.ts)

### Extended `NextRequest` and `NextResponse` APIs
In addition to supporting native `Request` and `Response`. Next.js extends them with `NextRequest` and `NextResponse` to provide convenient helpers for advanced use cases.

# CRUD Operations Implementation:
CRUD ***(Create, Read, Update, Delete)*** operations with API in Next.js 14 can be performed by creating an ***API route*** and defining an ***endpoint***.

* Import necessary libraries like `next/server` for handling API `requests` and `responses`.

```typescript
import { NextRequest, NextResponse } from 'next/server';
```

### 1. Create (POST)

```typescript
//  1. Create (Post method)

export async function POST(request: NextRequest) {
    const { name, age, _id } = await request.json()

    // data connect await db.create({ name, age, _id })

    return new NextResponse(`User ${name} created!`)
}
```

### 2. Read (GET)

```typescript
// 2. Read (get method)

export function GET(request: NextRequest) {
    const url = request.nextUrl
    const name = url.searchParams.get("name")
    const age = url.searchParams.get("age")
    const query = url.searchParams.has("name")

    if (query) {
        return new NextResponse("Hi! This is Rida")
    }

    if (age == "22") {
        return new NextResponse(`Hello ${name}`)
    }

    return NextResponse.json({ url, name, age, query })
}
```

### 3. Update (PUT)

```typescript
//  3. Update (Put method)

export async function PUT(request: NextRequest) {
    const { name, age, _id } = await request.json()

    // data connect await db.updateOne({ name, age, _id })

    return new NextResponse(`User ${name} updated!`)
}
```

### 4. delete (DELETE)

```typescript
//  4. Delete (delete method)

export async function DELETE(request: NextRequest) {
    const { _id } = await request.json()

    // data connect await db.deleteOne({ _id })

    return new NextResponse(`User deleted!`)
}
```