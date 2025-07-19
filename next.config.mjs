/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  
  // Performance optimizations for static export
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Performance optimizations
  poweredByHeader: false,
  
  // Webpack configuration for better performance
  webpack: (config, { dev, isServer }) => {
    // Fix HMR issues in development
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    
    // Optimize bundle size for static export
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20
          },
          common: {
            name: 'common',
            minChunks: 2,
            priority: 10,
            reuseExistingChunk: true,
            enforce: true
          }
        }
      };
    }
    
    return config;
  }
};

export default nextConfig;