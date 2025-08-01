'use client';

import { useEffect } from 'react';
import { trackSocialInteraction } from '../analytics/GoogleAnalytics';

// Social Media Pixel Integration
export const initializeSocialPixels = () => {
  // Facebook Pixel
  if (typeof window !== 'undefined' && !window.fbq) {
    window.fbq = function() {
      window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : 
      window.fbq.queue.push(arguments);
    };
    window._fbq = window.fbq;
    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = '2.0';
    window.fbq.queue = [];

    const fbScript = document.createElement('script');
    fbScript.async = true;
    fbScript.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(fbScript);

    // Initialize with your Facebook Pixel ID
    window.fbq('init', process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || 'YOUR_PIXEL_ID');
    window.fbq('track', 'PageView');

    // Track service-specific events
    window.fbq('trackCustom', 'ServicePageView', {
      content_name: window.location.pathname
    });
  }

  // LinkedIn Insight Tag
  if (typeof window !== 'undefined' && !window._linkedin_partner_id) {
    window._linkedin_partner_id = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID || 'YOUR_PARTNER_ID';
    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    window._linkedin_data_partner_ids.push(window._linkedin_partner_id);

    const linkedinScript = document.createElement('script');
    linkedinScript.type = 'text/javascript';
    linkedinScript.async = true;
    linkedinScript.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
    document.head.appendChild(linkedinScript);
  }
};

// Social Sharing Component
export const SocialShare = ({ 
  url = window?.location?.href, 
  title = document?.title,
  description = 'Professional healthcare services at Garcia Family Medicine',
  hashtags = ['GarciaFamilyMedicine', 'BlueSpringsMO', 'Healthcare'],
  className = ''
}) => {
  const platforms = [
    {
      name: 'Facebook',
      icon: '📘',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: '#1877F2'
    },
    {
      name: 'Twitter',
      icon: '𝕏',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}&hashtags=${hashtags.join(',')}`,
      color: '#000000'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: '#0A66C2'
    },
    {
      name: 'Email',
      icon: '✉️',
      url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(description + ' ' + url)}`,
      color: '#6B7280'
    }
  ];

  const handleShare = (platform, shareUrl) => {
    // Track social sharing
    trackSocialInteraction(platform.name, 'share', url);
    
    // Facebook Pixel tracking
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'Share', {
        content_name: title,
        platform: platform.name
      });
    }

    if (platform.name === 'Email') {
      window.location.href = shareUrl;
    } else {
      window.open(shareUrl, '_blank', 'width=600,height=400,noopener,noreferrer');
    }
  };

  return (
    <div className={`social-share ${className}`}>
      <style jsx>{`
        .social-share {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .share-label {
          font-weight: 600;
          color: #374151;
          margin-right: 0.5rem;
        }
        
        .share-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 6px;
          background: white;
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.2s;
          cursor: pointer;
        }
        
        .share-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .share-button.facebook:hover { border-color: #1877F2; color: #1877F2; }
        .share-button.twitter:hover { border-color: #000000; color: #000000; }
        .share-button.linkedin:hover { border-color: #0A66C2; color: #0A66C2; }
        .share-button.email:hover { border-color: #6B7280; color: #6B7280; }
        
        @media (max-width: 768px) {
          .social-share {
            justify-content: center;
          }
          
          .share-button {
            padding: 0.75rem;
            font-size: 0.875rem;
          }
        }
      `}</style>
      
      <span className="share-label">Share:</span>
      {platforms.map((platform) => (
        <button
          key={platform.name}
          onClick={() => handleShare(platform, platform.url)}
          className={`share-button ${platform.name.toLowerCase()}`}
          title={`Share on ${platform.name}`}
        >
          <span>{platform.icon}</span>
          <span className="platform-name">{platform.name}</span>
        </button>
      ))}
    </div>
  );
};

// Social Media Follow Buttons
export const SocialFollow = ({ 
  variant = 'horizontal', // 'horizontal', 'vertical', 'icons-only'
  className = '' 
}) => {
  const socialAccounts = [
    {
      platform: 'Facebook',
      icon: '📘',
      url: 'https://www.facebook.com/garciafamilymedicine',
      handle: '@garciafamilymedicine',
      color: '#1877F2'
    },
    {
      platform: 'Instagram',
      icon: '📱',
      url: 'https://instagram.com/gfmdirectprimarycare',
      handle: '@gfmdirectprimarycare',
      color: '#E4405F'
    },
    {
      platform: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/company/garcia-family-medicine',
      handle: 'Garcia Family Medicine',
      color: '#0A66C2'
    },
    {
      platform: 'YouTube',
      icon: '📺',
      url: 'https://www.youtube.com/channel/UCgarciafamilymedicine',
      handle: 'Garcia Family Medicine',
      color: '#FF0000'
    }
  ];

  const handleFollow = (account) => {
    trackSocialInteraction(account.platform, 'follow', account.url);
    
    // Facebook Pixel tracking
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'Follow', {
        platform: account.platform
      });
    }

    window.open(account.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`social-follow ${variant} ${className}`}>
      <style jsx>{`
        .social-follow {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        
        .social-follow.vertical {
          flex-direction: column;
          align-items: stretch;
        }
        
        .follow-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          background: white;
          color: #374151;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.2s;
          cursor: pointer;
          min-width: 200px;
          justify-content: center;
        }
        
        .follow-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
        }
        
        .follow-button.facebook:hover { 
          border-color: #1877F2; 
          background: #1877F2; 
          color: white; 
        }
        
        .follow-button.instagram:hover { 
          border-color: #E4405F; 
          background: #E4405F; 
          color: white; 
        }
        
        .follow-button.linkedin:hover { 
          border-color: #0A66C2; 
          background: #0A66C2; 
          color: white; 
        }
        
        .follow-button.youtube:hover { 
          border-color: #FF0000; 
          background: #FF0000; 
          color: white; 
        }
        
        .icons-only .follow-button {
          min-width: auto;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          padding: 0;
        }
        
        .icons-only .platform-text {
          display: none;
        }
        
        @media (max-width: 768px) {
          .social-follow.horizontal {
            flex-wrap: wrap;
            justify-content: center;
          }
          
          .follow-button {
            min-width: auto;
            flex: 1;
            min-width: 120px;
          }
        }
      `}</style>
      
      {socialAccounts.map((account) => (
        <button
          key={account.platform}
          onClick={() => handleFollow(account)}
          className={`follow-button ${account.platform.toLowerCase()}`}
          title={`Follow us on ${account.platform}`}
        >
          <span className="platform-icon">{account.icon}</span>
          <span className="platform-text">
            {variant === 'icons-only' ? '' : `Follow on ${account.platform}`}
          </span>
        </button>
      ))}
    </div>
  );
};

// Review Integration Component
export const ReviewsIntegration = ({ className = '' }) => {
  const reviewPlatforms = [
    {
      name: 'Google Reviews',
      icon: '⭐',
      url: 'https://search.google.com/local/reviews?placeid=ChIJgarciafamilymedicine',
      cta: 'Leave a Google Review'
    },
    {
      name: 'Facebook Reviews',
      icon: '📘',
      url: 'https://www.facebook.com/garciafamilymedicine/reviews',
      cta: 'Review on Facebook'
    },
    {
      name: 'Healthgrades',
      icon: '🏥',
      url: 'https://www.healthgrades.com/physician/dr-garcia-family-medicine',
      cta: 'Review on Healthgrades'
    }
  ];

  const handleReviewClick = (platform) => {
    trackSocialInteraction(platform.name, 'review_click', platform.url);
    
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'ReviewClick', {
        platform: platform.name
      });
    }

    window.open(platform.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`reviews-integration ${className}`}>
      <style jsx>{`
        .reviews-integration {
          background: #f8fafc;
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          border: 1px solid #e5e7eb;
        }
        
        .reviews-header {
          margin-bottom: 1.5rem;
        }
        
        .reviews-header h3 {
          color: #1f2937;
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
        }
        
        .reviews-header p {
          color: #6b7280;
          font-size: 1rem;
        }
        
        .review-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .review-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: white;
          border: 2px solid #d1d5db;
          border-radius: 8px;
          color: #374151;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.2s;
          cursor: pointer;
        }
        
        .review-button:hover {
          border-color: #f59e0b;
          background: #f59e0b;
          color: white;
          transform: translateY(-1px);
        }
        
        @media (max-width: 768px) {
          .review-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .review-button {
            width: 100%;
            max-width: 250px;
            justify-content: center;
          }
        }
      `}</style>
      
      <div className="reviews-header">
        <h3>Share Your Experience</h3>
        <p>Help others find quality healthcare by sharing your experience</p>
      </div>
      
      <div className="review-buttons">
        {reviewPlatforms.map((platform) => (
          <button
            key={platform.name}
            onClick={() => handleReviewClick(platform)}
            className="review-button"
          >
            <span>{platform.icon}</span>
            <span>{platform.cta}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Main Social Media Integration Component
export default function SocialMediaIntegration() {
  useEffect(() => {
    initializeSocialPixels();
  }, []);

  return null; // This component handles initialization only
}