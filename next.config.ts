import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/dj", destination: "/", permanent: true },
      { source: "/mentorias", destination: "/", permanent: true },
      { source: "/presskit", destination: "/", permanent: true },
      { source: "/press-kit", destination: "/", permanent: true },
      { source: "/actualizaciones", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
