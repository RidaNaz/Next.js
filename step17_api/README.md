# API (Application Programming Interface)

* An API serves as a **means of communication** between *two computers or pieces of software*. In a web application, an API facilitates communication between the *client and the server*.

* In Next.js 14, APIs are a core feature that allows your application to communicate with *external services* or *data sources* and *handle data logic* on the **server-side**. 

![How an API works](/step17_api/public/api_1.png)

### Components of API Architecture
While API refers to the interface, API architecture involves designing and implementing APIs. In short, it allows to dictate how to structure, organize, and expose a software system’s data and functionality. The key components of API architecture:

* **API Gateway**
The API gateway serves as the **entry point**, managing the *requests* and *responses* between API consumers and providers.

* **API Portal**
The API portal acts as the **interface**, providing information and documentation for developers to discover and consume APIs and applications.

* **API Management Platform**
The API management platform functions as the **control center**, overseeing the lifecycle and performance of APIs and applications.

* **API Security Services**
API security services form the **protective layer**, ensuring the security and safeguarding of data and communication.

## Types of API Architecture
 When it comes to web services, there are various types of APIs available, including *REST, GraphQL, gRPC and SOAP*. While these terms represent different **architectural styles** and have distinct characteristics. We use Rest API in our course that is *Rest API*.

### REST API
* REST *(Representational State Transfer)* is an architectural style that makes a connection between the client and the server and as soon as the server responds, it closes the connection.

* It allows applications across the internet to interact with each other using the HTTP *(Hypertext Transfer Protocol)* requests.

* REST APIs typically support CRUD *(Create, Read, Update, Delete)* operations on resources using the standard HTTP methods: POST *(Create)*, GET *(Read)*, PUT/PATCH *(Update)*, and DELETE *(Delete)*.

* It returns data in JSON *(JavaScript Object Notation)* format.

* It doesn’t encrypt data or has some special standard to send a message to the server.

![How REST API works](/step17_api/public/api_2.png)

# APIs in Next.js

## API Routes 

* An API route is a **URL** that directs incoming requests from the client to the appropriate server resource that will handle the requests.

* API routes in Next.js enable you to create **API endpoints** *as Node.js serverless functions*. These endpoints allow you to make *HTTPS requests* and also *communicate with a database*.

![App Screenshot](/step17_api/public/api_3.png)

API Routes continue to work in the `pages/api` directory without any changes. However, they have been replaced by Route Handlers in the `app` directory.

## Route Handlers

* you can create API endpoints using Route Handlers.

![App Screenshot](/step17_api/public/api_4.avif)

* Route Handlers allow you to create **custom request handlers** for a given route using the Web **Request** and **Response** APIs.

| app/api/route.js
``` typescript
export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {}
```

- Route Handlers are only available inside the `app` directory. You do not need to use API Routes (`pages`) and Route Handlers (`app`) together, as Route Handlers should be able to handle all use cases.

- Route Handlers can be nested inside the `app` directory, similar to `page.js` and `layout.js`. But there cannot be a `route.js` file at the same route segment level as `page.js`.

### Extended `NextRequest` and `NextResponse` APIs
In addition to supporting native `Request` and `Response`. Next.js extends them with `NextRequest` and `NextResponse` to provide convenient helpers for advanced use cases.

#### What are HTTP Methods?
An HTTP *(Hypertext Transfer Protocol)* request is a message sent from a client to a server to request a resource or perform an action.

A route file allows you to create custom request handlers for a given route. API Routes support HTTP methods like: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, and `OPTIONS`. If an unsupported method is called, Next.js will return a `405 Method Not Allowed` response.

#### Why API integration matters?
Integrating APIs into web applications is crucial for several reasons:
* Data Enrichment
* Dynamic Content
* Third-Party Services
* Data Aggregation

#### What is Postman?
Postman is an API platform for building and using APIs. Postman's built-in API client enables you to create and send API requests, including HTTP, GraphQL, and gRPC requests. Using Postman, you can send a request to an endpoint, retrieve data from a data source, or test an API's functionality.

## Thunder Client vs Postman
[Thunder Client](/step17_api/00_api-testing_thunder-client/README.md#thunder-client) and Postman are both popular tools for testing APIs, but they have some differences that might make ***Thunder Client a better choice for you***:

| Thunder Client | Postman |
| :------------- | :------ |
| Thunder Client is a native VS Code extension. | Postman is a standalone app. |
| Thunder Client uses a code-focused approach. | Postman uses a visual interface. |
|  Thunder Client has a steeper learning curve due to its code-focused approach. | Postman has a more intuitive interface. |
| Thunder Client is completely free and open-source. | Postman has a free plan with limitations and paid plans also. |