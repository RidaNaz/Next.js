# Environment Variables
* Environment variables are values that can be accessed by an application without hard-coding them directly into the program.
* They can be used to store sensitive information such as *database credentials or API keys or configuration values (base URLs, development / production flags)*.
*  Environment variables can be defined in `.env.local` or `.env` files, loaded into the application.
* You can also bundle environment variables for the ***browser*** by prefixing with `NEXT_PUBLIC_`.(go and see this in `.env` file)

## Different Types of Environment Variables:

##### * Client-Side Environment Variables:
Accessible only on the client-side *(user's browser)* during runtime. ***Not recommended*** for storing sensitive data due to security risks.

##### * Server-Side Environment Variables:
Accessible on the server-side during *build time* and *runtime*. ***Ideal*** for sensitive data and configuration values.

## Configuration Files:

Next.js 14 offers several ways to define environment variables:

### * `.env` Files:

- Create a `.env` file *(ignored by Git by default)* in your **project's root directory**.
- Define variables in the format `KEY=VALUE` (e.g., `API_KEY=your_api_key`).
- ***Access*** these variables on the server-side using` process.env.KEY`.

### * `.env.local`:

- Similar to `.env` but intended for local development environment variables you might not want to share with version control.

### * `.env.[environment]`:

- Create environment-specific `.env` files (e.g., `.env.development`, `.env.production`).
- Useful for configuration that ***differs between environments***.
- Access these variables using `process.env.KEY` but the specific values will be *loaded based* on the current environment *(development, production, etc.)*.
