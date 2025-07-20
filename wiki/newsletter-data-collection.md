# Newsletter Data Collection Guide

## Overview
This guide explains what data is collected during newsletter signups and how to properly capture user IP addresses through Power Automate.

## Data Currently Collected

### 1. Basic Information
- **Email**: User's email address
- **Source**: Where the signup occurred (e.g., 'footer', 'landing-page')
- **Subscribe Date**: ISO timestamp of signup
- **Status**: Active/Inactive
- **Unsubscribe Token**: Unique token for unsubscribe links

### 2. Device & Browser Information
- **User Agent**: Full browser user agent string
- **Platform**: Operating system (e.g., 'Win32', 'MacIntel')
- **Language**: Browser language preference
- **Languages**: All accepted languages
- **Vendor**: Browser vendor (e.g., 'Google Inc.')

### 3. Screen & Display
- **Screen Resolution**: Full screen dimensions (e.g., '1920x1080')
- **Viewport Size**: Current browser window size
- **Color Depth**: Display color depth (typically 24 or 32)
- **Pixel Ratio**: Device pixel ratio for retina displays

### 4. Location & Time
- **Timezone**: User's timezone (e.g., 'America/Chicago')
- **Timezone Offset**: Minutes offset from UTC
- **Local Time**: User's local time string
- **Referrer**: Previous page URL or 'Direct'
- **Current URL**: Full URL where signup occurred
- **Pathname**: Just the path portion of URL
- **Hostname**: Domain name

### 5. Connection Information
- **Connection Type**: Network type (4g, 3g, wifi) if available
- **Downlink**: Connection speed if available
- **Is Mobile**: Boolean for mobile detection
- **Is Tablet**: Boolean for tablet detection

## Capturing Real IP Address in Power Automate

The IP address shows as "Power-Automate-Capture" because the request comes from Microsoft's servers. To get the actual client IP:

### Method 1: Use HTTP Headers in Power Automate
In your Power Automate flow, extract these headers from the HTTP request:

```json
{
  "X-Forwarded-For": "@{triggerOutputs()['headers']['X-Forwarded-For']}",
  "X-Real-IP": "@{triggerOutputs()['headers']['X-Real-IP']}",
  "CF-Connecting-IP": "@{triggerOutputs()['headers']['CF-Connecting-IP']}",
  "True-Client-IP": "@{triggerOutputs()['headers']['True-Client-IP']}"
}
```

The first non-empty value is typically the real IP address.

### Method 2: Use Azure Static Web Apps Headers
Azure Static Web Apps adds these headers:
- `X-Azure-ClientIP`: The client's IP address
- `X-Forwarded-For`: Standard proxy header

### Method 3: Client-Side IP Detection Service
Add this to the email subscription component:

```javascript
// Fetch IP address from a service
const getClientIP = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    return 'Unable to detect';
  }
};
```

## Privacy Considerations

### HIPAA Compliance
- Store data securely in SharePoint
- Limit access to authorized personnel
- Don't collect health information in newsletter signups
- Include privacy policy link

### Data Minimization
Only collect data that's necessary for:
- Newsletter delivery
- Analytics and improvements
- Security and fraud prevention
- Geographic customization

### User Consent
- Clearly state what data is collected
- Provide opt-out mechanisms
- Honor unsubscribe requests promptly

## SharePoint List Schema Update

Add these columns to your SharePoint list:

```
- UserAgent (Multiple lines of text)
- Platform (Single line of text)
- Language (Single line of text)
- ScreenResolution (Single line of text)
- Timezone (Single line of text)
- Referrer (Single line of text)
- IsMobile (Yes/No)
- DeviceInfo (Multiple lines of text - JSON)
- ClientIP (Single line of text)
```

## Power Automate Flow Update

Update your flow to:
1. Parse the incoming JSON with all new fields
2. Extract IP from headers
3. Map all fields to SharePoint columns
4. Consider creating a separate analytics list

## Analytics Insights

With this data, you can:
- Track signup sources (referrer)
- Optimize for common screen sizes
- Schedule emails by timezone
- Improve mobile experience
- Detect suspicious activity (multiple signups from same IP)
- Personalize content by language/location

## Security Best Practices

1. **Rate Limiting**: Implement in Power Automate to prevent spam
2. **IP Validation**: Check for proxy/VPN usage if needed
3. **Data Retention**: Set policies for how long to keep data
4. **Encryption**: Ensure all data is encrypted in transit and at rest
5. **Access Control**: Limit who can view subscriber data

## Testing

Test data collection with:
- Different devices (mobile, tablet, desktop)
- Various browsers (Chrome, Safari, Firefox, Edge)
- Different network conditions
- International users (different timezones/languages)