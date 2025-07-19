// Environment configuration for build time
// This file helps ensure environment variables are available during static export

const config = {
  NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL: process.env.NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL || '',
  NEXT_PUBLIC_NEWSLETTER_ENABLED: process.env.NEXT_PUBLIC_NEWSLETTER_ENABLED || 'true',
  NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE: process.env.NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE || 'Thank you for subscribing! Check your email for confirmation.',
  NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE: process.env.NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE || 'We\'re having trouble processing your subscription. Please try again later or call us at 816-427-5320.'
};

// Log configuration status (will be removed in production by removeConsole)
console.log('Email configuration loaded:', {
  webhookConfigured: !!config.NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL,
  enabled: config.NEXT_PUBLIC_NEWSLETTER_ENABLED,
  environment: process.env.NODE_ENV
});

module.exports = config;