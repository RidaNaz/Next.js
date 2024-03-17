# Loading UI
In Next.js 14, you can leverage the built-in `loading.tsx` convention to create an **instant loading UI** for your routes, enhancing user experience by providing immediate feedback during navigation.

# 1. Create a loading.js file:
Within the directory of a route (e.g., pages/blog), create a file named loading.tsx.

# 2. Implement Loading State:
This file should export a React component that defines your loading UI. It can be a simple spinner, text message, or a placeholder element to indicate that content is being loaded.