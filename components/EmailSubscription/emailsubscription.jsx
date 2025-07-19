'use client';

import { useState } from 'react';
import styles from './emailsubscription.module.css';

export default function EmailSubscription({ 
  source = 'website',
  buttonText = 'Subscribe',
  placeholder = 'Enter your email',
  successMessage,
  errorMessage,
  compact = false,
  showLabels = true,
  customStyles = {},
  onSuccess,
  onError
}) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setMessage('Please enter a valid email address.');
      setMessageType('error');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('Please enter a valid email address.');
      }

      const subscription = {
        email: email,
        timestamp: new Date().toISOString(),
        source: source,
        // IP address will be captured by Power Automate from request headers
        ipAddress: window.location.hostname // Placeholder - actual IP from Power Automate
      };

      // Check if newsletter is enabled and webhook URL is configured
      const webhookUrl = process.env.NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL;
      const isEnabled = process.env.NEXT_PUBLIC_NEWSLETTER_ENABLED !== 'false';
      
      // Validate webhook URL is not placeholder
      const isValidWebhook = webhookUrl && 
                           webhookUrl !== '' && 
                           webhookUrl !== 'your-webhook-url-here' &&
                           webhookUrl.startsWith('https://');
      
      if (isEnabled && isValidWebhook) {
        // Send to Power Automate webhook
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(subscription)
        });

        if (!response.ok) {
          throw new Error('Subscription processing failed');
        }

        const successMsg = successMessage || 
          process.env.NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE || 
          'Thank you for subscribing! Check your email for confirmation.';
        
        setMessage(successMsg);
        setMessageType('success');
        setEmail('');
        
        // Call success callback if provided
        if (onSuccess) {
          onSuccess(email);
        }
      } else {
        // Fallback to localStorage if webhook not configured
        if (typeof window !== 'undefined') {
          const existingSubscriptions = JSON.parse(localStorage.getItem('newsletter_subscriptions') || '[]');
          const alreadySubscribed = existingSubscriptions.some(sub => sub.email === email);
          
          if (alreadySubscribed) {
            setMessage('You\'re already subscribed! Thank you for your interest.');
            setMessageType('info');
          } else {
            existingSubscriptions.push(subscription);
            localStorage.setItem('newsletter_subscriptions', JSON.stringify(existingSubscriptions));
            setMessage('Thank you for subscribing! We\'ll keep you updated.');
            setMessageType('success');
            setEmail('');
            
            if (onSuccess) {
              onSuccess(email);
            }
          }
        }
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
      const errorMsg = errorMessage || 
        process.env.NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE || 
        'Something went wrong. Please try again later.';
      
      setMessage(errorMsg);
      setMessageType('error');
      
      // Call error callback if provided
      if (onError) {
        onError(error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerClass = compact ? styles.compactContainer : styles.container;
  const formClass = compact ? styles.compactForm : styles.form;

  return (
    <div 
      className={`${containerClass} ${customStyles.container || ''}`}
      style={customStyles.containerStyle}
    >
      {showLabels && !compact && (
        <div className={styles.header}>
          <h3 className={`${styles.title} ${customStyles.title || ''}`}>
            Stay Connected
          </h3>
          <p className={`${styles.subtitle} ${customStyles.subtitle || ''}`}>
            Get health tips and practice updates
          </p>
        </div>
      )}
      
      <form 
        className={`${formClass} ${customStyles.form || ''}`} 
        onSubmit={handleSubmit}
        style={customStyles.formStyle}
      >
        <input
          type="email"
          placeholder={placeholder}
          className={`${styles.input} ${customStyles.input || ''}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
          aria-label="Email address"
          style={customStyles.inputStyle}
        />
        <button
          type="submit"
          className={`${styles.button} ${customStyles.button || ''} ${isSubmitting ? styles.submitting : ''}`}
          disabled={isSubmitting}
          style={customStyles.buttonStyle}
        >
          {isSubmitting ? 'Subscribing...' : buttonText}
        </button>
      </form>
      
      {message && (
        <div 
          className={`${styles.message} ${styles[messageType]} ${customStyles.message || ''}`}
          role="status"
          aria-live="polite"
          style={customStyles.messageStyle}
        >
          {message}
        </div>
      )}
    </div>
  );
}