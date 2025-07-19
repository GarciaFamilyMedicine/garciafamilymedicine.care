/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  // Ensure environment variables are available during build
  env: {
    NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL: process.env.NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL || '',
    NEXT_PUBLIC_NEWSLETTER_ENABLED: process.env.NEXT_PUBLIC_NEWSLETTER_ENABLED || 'true',
    NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE: process.env.NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE || 'Thank you for subscribing! Check your email for confirmation.',
    NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE: process.env.NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE || 'We\'re having trouble processing your subscription. Please try again later or call us at 816-427-5320.'
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