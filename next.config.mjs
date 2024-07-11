/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dfmighgxjphnvfivmctg.supabase.co",
      }
    ]
  }
};

export default nextConfig;
