# Data Fetching
Data fetching is a core part of any application. Data fetching in Next.js refers to the process of retrieving data from a server, API, or database to display on a web page.
* Next.js provides several methods for data fetching, which can be categorized into two main approaches:

## 1. Server-side data fetching
Next.js extends the native fetch Web API to allow you to configure the caching and revalidating behavior for each fetch request on the server.

You can use fetch with `async/await` in ***Server Components***, in ***Route Handlers***, and in ***Server Actions***.

### Server-Static data fetching

[view code](/step17_api/03_data-fetching/src/app/server1.tsx)

### Server-Dynamic data fetching

[view code](/step17_api/03_data-fetching/src/app/server2.tsx)

## 2. Client-side data fetching
### **useEffect:**
This hook is used to fetch data on the client-side after the component has mounted.

[view code](/step17_api/03_data-fetching/src/app/client1.tsx)

### **useSWR:**
SWR *(stale-while-revalidate)* is a React Hooks library for data fetching, which means it is a tool for retrieving data from a *server, API or database*.

* You need to install it first:
| cmd
```ts
npm i swr
```

[view code](/step17_api/03_data-fetching/src/app/client2.tsx)