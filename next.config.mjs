/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/saas-landing-page-xg',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig