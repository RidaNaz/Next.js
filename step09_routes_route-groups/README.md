# Route Segments
Each folder in a route represents a route segment. Each route segment is mapped to a corresponding segment in a URL path.
![App Screenshot](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Froute-segments-to-path-segments.png&w=1920&q=75&dpl=dpl_DCtH3CdUprp1CVB8tivKY8y2wMuB)

# Nested Routes
To create a nested route, you can nest folders inside each other. For example, you can add a new `/dashboard/settings` route by nesting two new folders in the `app` directory.

The `/dashboard/settings` route is composed of three segments:

- `/` (Root segment)
- `dashboard` (Segment)
- `settings` (Leaf segment)

### The `app` Router
In version 13, Next.js introduced a new **App Router** built on React Server Components, which supports shared *layouts, nested routing, loading states, error handling, and more*.

The App Router works in a new directory named `app`. The `app` directory works alongside the `pages` directory to allow for incremental adoption.

![App Screenshot](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fnext-router-directories.png&w=1920&q=75&dpl=dpl_DCtH3CdUprp1CVB8tivKY8y2wMuB)

*The App Router takes priority over the Pages Router.*

### Roles of Folders and Files
Next.js uses a file-system based router where:

- **Folders** are used to define routes. A route is a single path of nested folders, following the file-system hierarchy from the **root folder** down to a final **leaf folder** that includes a `page.tsx` file.
- **Files** are used to create UI that is shown for a route segment.

## Creating Routes
Next.js uses a file-system based router where folders are used to define routes.

Each folder represents a route segment that maps to a URL segment. To create a nested route, you can nest folders inside each other.
![App Screenshot](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Froute-segments-to-path-segments.png&w=1920&q=75&dpl=dpl_DCtH3CdUprp1CVB8tivKY8y2wMuB)

A [special file](https://nextjs.org/docs/app/building-your-application/routing#file-conventions) `page.js`is used to make route segments publicly accessible.

![App Screenshot](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fdefining-routes.png&w=1920&q=75&dpl=dpl_DCtH3CdUprp1CVB8tivKY8y2wMuB)

In this example, the` /dashboard/analytics` URL path is not publicly accessible because it does not have a corresponding `page.tsx` file. This folder could be used to store components, stylesheets, images, or other colocated files.

### Note:
`.js`, `.jsx`, or `.tsx` file extensions can be used for special files.

# Route Groups
In the `app` directory, nested folders are normally mapped to URL paths. However, you can mark a folder as a Route Group to prevent the folder from being included in the route's URL path.

This allows you to organize your route segments and project files into logical groups without affecting the URL path structure.

Route groups are useful for:

- Organizing routes into groups e.g. by site section, intent, or team.
- Enabling nested layouts in the same route segment level:
    - Creating multiple nested layouts in the same segment, including multiple root layouts
    - Adding a layout to a subset of routes in a common segment

### Convention
A route group can be created by wrapping a folder's name in parenthesis: `(folderName)`

### [Example](https://nextjs.org/docs/app/building-your-application/routing/route-groups#organize-routes-without-affecting-the-url-path)