/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/informacion-diaria',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  