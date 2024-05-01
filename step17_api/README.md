# API (Application Programming Interface)

* An API serves as a **means of communication** between *two computers or pieces of software*. In a web application, an API facilitates communication between the client and the server.

* In Next.js 14, APIs are a core feature that allows your application to communicate with *external services* or *data sources* and *handle data logic* on the **server-side**. 

![App Screenshot](/step17_api/public/api_1.png)

### API Architecture & its Layers
While API refers to the interface, API architecture involves designing and implementing APIs. In short, it allows to dictate how to structure, organize, and expose a software system’s data and functionality.

* **Data Layer :**
The data layer **enables** APIs to *supply and share data* while maintaining *data quality*, *ensuring security*, and facilitating *scalability* for diverse applications and services.

* **Application Layer :**
At the **core** of API architecture, the application layer handles the computing and processing of data and logic, *shaping the functionality* and *behavior* of APIs and applications.
Components like *microservices*, *serverless functions*, *business logic*, and *algorithms* reside here.

* **Integration Layer :**
Serving as the **bridge**, the integration layer *connects* and *integrates data* and *application layers* with *external systems and applications*.
Mechanisms like: API gateways, service meshes, message brokers, and event streams play a crucial role in enabling this.

* **Interaction Layer :**
The interaction layer is a key part of the API architecture because it defines **how the API communicates** with other systems and users.
It provides the *specifications*, *formats*, *protocols*, and *tools* that enable the API to be accessed, understood, and used effectively.

* **Management Services Layer :**
Acting as the **brain** of API architecture, the management services layer oversees the lifecycle and performance of APIs and applications.
These services include *API design*, *development*, *deployment*, *versioning*, *governance*, *analytics*, *testing*, and *debugging*.

* **Security Services Layer :**
The security services layer is responsible for **safeguarding the data** and communication of APIs and applications.
It employs mechanisms like *encryption*, *authentication*, *authorization*, *auditing*, and *logging*.

### Components of API Architecture
The key components of API architecture:

* **API Gateway**
The API gateway serves as the **entry point**, managing the *requests* and *responses* between API consumers and providers.

* **API Portal**
The API portal acts as the **interface**, providing information and documentation for developers to discover and consume APIs and applications.

* **API Management Platform**
The API management platform functions as the **control center**, overseeing the lifecycle and performance of APIs and applications.

* **API Security Services**
API security services form the **protective layer**, ensuring the security and safeguarding of data and communication.














<!-- 
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

- Route Handlers are only available inside the `app` directory. You do not need to use API Routes (`pages`) and Route Handlers (`app`) together, as Route Handlers should be able to handle all use cases.

- Route Handlers can be nested inside the `app` directory, similar to `page.js` and `layout.js`. But there cannot be a `route.js` file at the same route segment level as `page.js`.

#### Extended `NextRequest` and `NextResponse` APIs
In addition to supporting native `Request` and `Response`. Next.js extends them with `NextRequest` and `NextResponse` to provide convenient helpers for advanced use cases. -->

<!-- ## HTTP Methods
An HTTP *(Hypertext Transfer Protocol)* request is a message sent from a client to a server to request a resource or perform an action.

A route file allows you to create custom request handlers for a given route. API Routes support HTTP methods like: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, and `OPTIONS`. If an unsupported method is called, Next.js will return a `405 Method Not Allowed` response.

| route.ts
```typescript
export async function GET(request: Request) {}
 
export async function HEAD(request: Request) {}
 
export async function POST(request: Request) {}
 
export async function PUT(request: Request) {}
 
export async function DELETE(request: Request) {}
 
export async function PATCH(request: Request) {}
 
// If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response
// `Allow` header depending on the other methods defined in the route handler.
export async function OPTIONS(request: Request) {}
```

![App Screenshot](/step17_api/public/api_4.png)

### HTTP request vs API request

| HTTP & API | Key Diffrences |
|:---------- | :------------- |
| Purpose | HTTP requests focus on fetching resources or interacting with web servers, while API requests aim to access or manipulate specific data or functionality.|
| Endpoint | HTTP requests target a web server or resource, while API requests target a specific API endpoint (e.g., /users, /products). |
| Data format | HTTP requests often involve HTML, CSS, or JavaScript, while API requests typically use standardized data formats like JSON, XML, or GraphQL. |
| Authentication | API requests often require authentication tokens, API keys, or other authorization mechanisms, whereas HTTP requests may not. |

### Use Cases of API

- **Data Fetching:** API Routes can fetch data from external sources or databases.
- **Data Mutation:** API Routes can create, update, or delete data.
- **Authentication:** API Routes can handle authentication and authorization.
- **Server-Side Rendering:** API Routes can pre-render pages with fetched data. -->


