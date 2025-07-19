'use client';

import EmailSubscription from '@/components/emailsubscription/emailsubscription';

export default function TestEmail() {
  return (
    <div style={{ padding: '50px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Email Subscription Test Page</h1>
      <p>This is a test page to debug email subscription on production.</p>
      
      <div style={{ marginTop: '30px', background: '#f0f0f0', padding: '20px', borderRadius: '8px' }}>
        <h2>Environment Check:</h2>
        <ul>
          <li>Webhook URL: {process.env.NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL ? 'CONFIGURED' : 'NOT CONFIGURED'}</li>
          <li>Newsletter Enabled: {process.env.NEXT_PUBLIC_NEWSLETTER_ENABLED || 'NOT SET'}</li>
          <li>Environment: {process.env.NODE_ENV}</li>
        </ul>
      </div>
      
      <div style={{ marginTop: '30px' }}>
        <h2>Test Subscription Form:</h2>
        <EmailSubscription source="test-page" />
      </div>
      
      <div style={{ marginTop: '30px', fontSize: '12px', color: '#666' }}>
        <p>Check browser console for debug logs when submitting.</p>
      </div>
    </div>
  );
}