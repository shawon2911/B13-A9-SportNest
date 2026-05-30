/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co.com"
      },
      {
        protocol: "https",
        hostname: "t4.ftcdn.net"
      },
    ]
  }
};

export default nextConfig;

