/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
     qualities: [10, 75, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows any HTTPS domain
      },
      {
        protocol: 'http',
        hostname: '**', // Optional: Allows any HTTP domain
      },
    ],
      dangerouslyAllowLocalIP: true,
    },
    allowedDevOrigins: ['10.37.131.26']
};

export default nextConfig;
