'use client';

import { useEffect, useState } from 'react';
import styles from './emailsubscription.module.css';

export default function EmailDebug() {
  const [config, setConfig] = useState({});
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    // Get environment configuration
    const envConfig = {
      webhookUrl: process.env.NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL || 'NOT SET',
      isEnabled: process.env.NEXT_PUBLIC_NEWSLETTER_ENABLED !== 'false',
      successMessage: process.env.NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE || 'DEFAULT',
      errorMessage: process.env.NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE || 'DEFAULT',
      nodeEnv: process.env.NODE_ENV,
    };

    // Check if webhook is valid
    const webhookUrl = envConfig.webhookUrl;
    envConfig.isValidWebhook = webhookUrl && 
                              webhookUrl !== 'NOT SET' && 
                              webhookUrl !== '' && 
                              webhookUrl !== 'your-webhook-url-here' &&
                              webhookUrl.startsWith('https://');

    setConfig(envConfig);

    // Get localStorage subscriptions
    if (typeof window !== 'undefined') {
      const subs = JSON.parse(localStorage.getItem('newsletter_subscriptions') || '[]');
      setSubscriptions(subs);
    }
  }, []);

  const clearSubscriptions = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('newsletter_subscriptions');
      setSubscriptions([]);
    }
  };

  return (
    <div style={{ 
      background: '#f0f0f0', 
      padding: '20px', 
      borderRadius: '8px', 
      marginTop: '20px',
      fontFamily: 'monospace',
      fontSize: '14px'
    }}>
      <h3>📧 Email Subscription Debug Info</h3>
      
      <div style={{ marginTop: '15px' }}>
        <h4>Environment Configuration:</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>✅ Newsletter Enabled: {config.isEnabled ? 'YES' : 'NO'}</li>
          <li>{config.isValidWebhook ? '✅' : '❌'} Webhook Valid: {config.isValidWebhook ? 'YES' : 'NO'}</li>
          <li>🔗 Webhook URL: {config.webhookUrl ? `${config.webhookUrl.substring(0, 50)}...` : 'NOT SET'}</li>
          <li>🌍 Environment: {config.nodeEnv}</li>
          <li>📝 Success Message: {config.successMessage === 'DEFAULT' ? 'Using default' : 'Custom'}</li>
          <li>📝 Error Message: {config.errorMessage === 'DEFAULT' ? 'Using default' : 'Custom'}</li>
        </ul>
      </div>

      <div style={{ marginTop: '15px' }}>
        <h4>Fallback Mode:</h4>
        <p>{config.isValidWebhook ? '❌ NOT ACTIVE (Using webhook)' : '✅ ACTIVE (Using localStorage)'}</p>
      </div>

      <div style={{ marginTop: '15px' }}>
        <h4>LocalStorage Subscriptions ({subscriptions.length}):</h4>
        {subscriptions.length > 0 ? (
          <>
            <ul style={{ listStyle: 'none', padding: 0, maxHeight: '200px', overflow: 'auto' }}>
              {subscriptions.map((sub, index) => (
                <li key={index} style={{ marginBottom: '10px', background: 'white', padding: '10px', borderRadius: '4px' }}>
                  <strong>{sub.email}</strong><br />
                  Source: {sub.source}<br />
                  Date: {new Date(sub.subscribeDate).toLocaleString()}
                </li>
              ))}
            </ul>
            <button 
              onClick={clearSubscriptions}
              style={{
                marginTop: '10px',
                padding: '8px 16px',
                background: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Clear All Subscriptions
            </button>
          </>
        ) : (
          <p>No subscriptions in localStorage</p>
        )}
      </div>

      <div style={{ marginTop: '15px', background: '#fff3cd', padding: '10px', borderRadius: '4px' }}>
        <strong>⚠️ Troubleshooting:</strong>
        <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
          {!config.isValidWebhook && (
            <li>Webhook URL is not configured properly. Using localStorage fallback.</li>
          )}
          {!config.isEnabled && (
            <li>Newsletter signup is disabled via environment variable.</li>
          )}
          {config.nodeEnv === 'development' && (
            <li>Running in development mode. Check console for detailed logs.</li>
          )}
        </ul>
      </div>
    </div>
  );
}