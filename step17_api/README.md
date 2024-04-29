# API (Application Programming Interface)

* An API serves as a **means of communication** between *two computers or pieces of software*. In a web application, an API facilitates communication between the client and the server.

* In Next.js 14, APIs are a core feature that allows your application to communicate with *external services* or *data sources* and *handle data logic* on the **server-side**. 

![App Screenshot](/step17_api/public/api_1.png)

### | Types of APIs |
| :-------------------------------------------- | 
| REST (Representational State of Resource) API |
| SOAP (Simple Object Access Protocol) API |
| gRPC (Google Remote Procedure Call) API |
| Server-Sent Events (SSE) API |
| WebRTC (Web Real-Time Communication) API |
| GraphQL API | WebSocket API |
| Webhook API | Async API |
| API Gateway API | Microservices API |

*Each type of API has its strengths and use cases, and the choice depends on the specific requirements of your application or service.*

## API Routes 

* An API route is a **URL** that directs incoming requests from the client to the appropriate server resource that will handle the requests.

* API routes in Next.js enable you to create **API endpoints** *as Node.js serverless functions*. These endpoints allow you to make *HTTPS requests* and also *communicate with a database*.

API Routes continue to work in the `pages/api` directory without any changes. However, they have been replaced by Route Handlers in the `app` directory.

## Route Handlers

you can create API endpoints using Route Handlers.

Route Handlers allow you to create **custom request handlers** for a given route using the Web **Request** and **Response** APIs.

| app/api/route.ts
``` typescript
export async function GET(request: Request) {}
```

 If you previously used API routes to call an *external API from the client*, you can now use *Server Components* instead to securely fetch data.

### Benefits of using APIs in Next.js

There are a few cases where you might use an API to fetch data for your application:

- If you're using 3rd party services that provide an API.

- If you're fetching data from the client, you want to have an API layer that runs on the server to avoid exposing your database secrets to the client.





