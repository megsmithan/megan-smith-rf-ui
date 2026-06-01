import type { NextConfig } from "next";
import path from "node:path";

const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isStaticExport ? { output: "export", distDir: "build" } : {}),
  allowedDevOrigins: ["*.csb.app", "*.codesandbox.io"],
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
