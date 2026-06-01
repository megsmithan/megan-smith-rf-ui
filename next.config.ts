import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "build",
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
