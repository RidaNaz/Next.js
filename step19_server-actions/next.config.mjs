/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
      },
};

export default nextConfig;

// Server Actions became a stable feature in Next.js 14, and are enabled by default.

// However, if you are using an *earlier version* of Next.js, you can enable them by setting experimental.
// `serverActions` to `true`.
