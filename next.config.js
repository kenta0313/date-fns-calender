/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  optimizeFonts: false,
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
