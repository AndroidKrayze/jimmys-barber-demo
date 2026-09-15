/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/jimmys-barber-demo',
  assetPrefix: '/jimmys-barber-demo',
  trailingSlash: true,
};

export default nextConfig;
