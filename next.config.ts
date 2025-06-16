import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false, // or true if you want a 308 permanent redirect
      },
    ];
  },
};

export default nextConfig;
