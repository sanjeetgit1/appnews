import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allows all image hosts (for testing/dev)
      },
    ],
  },
};

export default nextConfig;
