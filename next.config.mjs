/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true, // Optional: keeps URL consistency
    images: {
      unoptimized: true // Optional: avoids server-dependent image optimization
    }
  };
  
  export default nextConfig;