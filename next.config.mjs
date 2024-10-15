/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/digesto-digital',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  