# API (Application Programming Interface)

* An API serves as a **means of communication** between *two computers or pieces of software*. In a web application, an API facilitates communication between the client and the server.

* In Next.js 14, APIs are a core feature that allows your application to communicate with *external services* or *data sources* and *handle data logic* on the **server-side**. 

![App Screenshot](/step17_api/public/api_1.png)


## API Routes 

* An API route is a **URL** that directs incoming requests from the client to the appropriate server resource that will handle the requests.

* API routes in Next.js enable you to create **API endpoints** *as Node.js serverless functions*. These endpoints allow you to make *HTTPS requests* and also *communicate with a database*.

![App Screenshot](/step17_api/public/api_2.png)

API Routes continue to work in the `pages/api` directory without any changes. However, they have been replaced by Route Handlers in the `app` directory.

## Route Handlers

* you can create API endpoints using Route Handlers.

![App Screenshot](/step17_api/public/api_3.avif)

* Route Handlers allow you to create **custom request handlers** for a given route using the Web **Request** and **Response** APIs.

| app/api/route.js
``` typescript
export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {}
```

| Route Handlers are only available inside the `app` directory. They are the equivalent of API Routes inside the `pages` directory meaning you do not need to use API Routes and Route Handlers together.

| Route Handlers can be nested inside the `app` directory, similar to `page.js` and `layout.js`. But there cannot be a `route.js` file at the same route segment level as `page.js`.

### Use Cases of API
There are a few cases where you might use an API to fetch data for your application:

- If you're using 3rd party services that provide an API.

- If you're fetching data from the client, you want to have an API layer that runs on the server to avoid exposing your database secrets to the client.







