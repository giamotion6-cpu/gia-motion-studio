import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/nosotros", destination: "/#nosotros", permanent: true },
      { source: "/servicios", destination: "/#servicios", permanent: true },
      { source: "/portafolio", destination: "/#proyectos", permanent: true },
      { source: "/contacto", destination: "/#contacto", permanent: true },
      { source: "/blog", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
