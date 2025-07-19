'use client';

import { useEffect, useState } from 'react';

export default function EmailDebug() {
  const [debugInfo, setDebugInfo] = useState({});

  useEffect(() => {
    // Collect debug information
    const webhookUrl = process.env.NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL;
    const isEnabled = process.env.NEXT_PUBLIC_NEWSLETTER_ENABLED;
    
    const info = {
      webhookUrl: webhookUrl || 'NOT SET',
      webhookUrlLength: webhookUrl ? webhookUrl.length : 0,
      isEnabled: isEnabled || 'NOT SET',
      isProduction: process.env.NODE_ENV === 'production',
      hasWebhook: !!webhookUrl,
      webhookStartsWith: webhookUrl ? webhookUrl.substring(0, 50) + '...' : 'N/A',
      isValidWebhook: webhookUrl && 
                      webhookUrl !== '' && 
                      webhookUrl !== 'your-webhook-url-here' &&
                      webhookUrl.startsWith('https://'),
      timestamp: new Date().toISOString()
    };

    setDebugInfo(info);
    
    // Log to console for debugging
    console.log('Email Integration Debug Info:', info);
  }, []);

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f0f0f0', 
      border: '1px solid #ccc',
      margin: '20px',
      fontFamily: 'monospace',
      fontSize: '12px'
    }}>
      <h3>Email Integration Debug Info</h3>
      <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
    </div>
  );
}