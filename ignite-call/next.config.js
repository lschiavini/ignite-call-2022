/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: [
    'page.tsx',
    'api.ts',
    'api.tsx', // creates routes only if the file follows {{name}}.page.tsx
  ],
}

module.exports = nextConfig
