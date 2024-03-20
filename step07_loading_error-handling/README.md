# Loading UI
In Next.js 14, you can leverage the built-in `loading.tsx` convention to create an **instant loading UI** for your routes, enhancing user experience by providing immediate feedback during navigation.

## 1. Create a `loading.tsx` file:
Within the directory of a route, create a file named `loading.tsx`.

![App Screenshot](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Floading-special-file.png&w=1920&q=75&dpl=dpl_BrWHktfCYgUy6M9aopD3zYm4mMTM)

## 2. Implement Loading State:
This file should export a React component that defines your loading UI. It can be a *simple spinner, text message, or a placeholder element* to indicate that content is being loaded.

> app/dashboard/loading.tsx
```typescript
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return
}
```

## 3. Wrap the Page Component (Optional):
If you want the loading UI to apply specifically to the content within a particular page, you can optionally wrap the page component with the [`Suspense`](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#example) component from React.

![App Screenshot](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Floading-overview.png&w=1920&q=75&dpl=dpl_BrWHktfCYgUy6M9aopD3zYm4mMTM)

## 4. Automatic Wrapping (Recommended):
Next.js 14 offers a more convenient approach. When you place the `loading.tsx` file within a directory, it automatically wraps all child components within that directory with `Suspense`. This simplifies the setup and ensures consistent loading UI behavior for nested components within the route.

### Key Points:

- The `loading.tsx` file provides flexibility in designing your loading UI to match your application's style.
- The automatic wrapping by Next.js ensures seamless loading UI application for nested components within a route directory.
- This approach promotes a server-side rendered loading state, offering a more performant and consistent user experience compared to purely client-side loading indicators.

# Error Handling
The `error.tsx` file convention allows you to gracefully handle unexpected runtime errors in nested routes.

- Automatically wrap a route segment and its nested children in a React Error Boundary.
- Create error UI tailored to specific segments using the file-system hierarchy to adjust granularity.
- Isolate errors to affected segments while keeping the rest of the application functional.
- Add functionality to attempt to recover from an error without a full page reload.

Create error UI by adding an `error.tsx` file inside a route segment and exporting a React component:
![App Screenshot](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Ferror-special-file.png&w=1920&q=75&dpl=dpl_BrWHktfCYgUy6M9aopD3zYm4mMTM)

Handling Errors in [Layouts](https://nextjs.org/docs/app/building-your-application/routing/error-handling#handling-errors-in-layouts), [Root Layouts](https://nextjs.org/docs/app/building-your-application/routing/error-handling#handling-errors-in-root-layouts), [Server Errors](https://nextjs.org/docs/app/building-your-application/routing/error-handling#handling-server-errors).