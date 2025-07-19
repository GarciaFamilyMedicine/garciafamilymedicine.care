/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  // Environment variables for production
  env: {
    NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL: 'https://default1b5ab773bfb5457caec39bf1b8da58.4a.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/ecb3dbc92616416ba209fd546a09b200/triggers/manual/paths/invoke/?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Oxqlvj0fNMJHAdTh5RRcJXGWnpx6eggZQk65OHTgy3M',
    NEXT_PUBLIC_NEWSLETTER_ENABLED: 'true',
    NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE: 'Thank you for subscribing! Check your email for confirmation.',
    NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE: 'Something went wrong. Please try again or contact us at (832) 778-9855.'
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