/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  eslint: {
    dirs: ["components", "app"],
  },
}

export default nextConfig
