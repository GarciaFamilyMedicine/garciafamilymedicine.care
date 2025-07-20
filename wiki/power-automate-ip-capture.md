# Power Automate: Capturing Real Client IP Address

## The Problem
When Power Automate receives webhook requests, the IP address comes from Microsoft's servers, not the actual user.

## Solution: Extract IP from HTTP Headers

### Step 1: Modify Your HTTP Request Trigger
In your Power Automate flow, after the "When a HTTP request is received" trigger:

1. Add a **Compose** action
2. Name it "Extract Client IP"
3. Use this expression:
```
coalesce(
  triggerOutputs()?['headers']?['X-Forwarded-For'],
  triggerOutputs()?['headers']?['X-Real-IP'],
  triggerOutputs()?['headers']?['CF-Connecting-IP'],
  triggerOutputs()?['headers']?['X-Azure-ClientIP'],
  triggerOutputs()?['headers']?['True-Client-IP'],
  'IP not available'
)
```

### Step 2: Parse X-Forwarded-For
X-Forwarded-For may contain multiple IPs. To get the first (original client):

1. Add another **Compose** action
2. Name it "Parse Client IP"
3. Use this expression:
```
if(
  contains(outputs('Extract_Client_IP'), ','),
  first(split(outputs('Extract_Client_IP'), ',')),
  outputs('Extract_Client_IP')
)
```

### Step 3: Update Your SharePoint Create Item
In the "Create item" action for SharePoint:
- Set the **ipAddress** field to: `outputs('Parse_Client_IP')`

## Complete Flow Structure

```
1. When a HTTP request is received
   ↓
2. Compose - Extract Client IP
   Inputs: coalesce(headers...)
   ↓
3. Compose - Parse Client IP  
   Inputs: if(contains(...))
   ↓
4. Parse JSON
   Content: triggerBody()
   ↓
5. Create item (SharePoint)
   ipAddress: outputs('Parse_Client_IP')
   [other fields mapped from parsed JSON]
```

## Testing Your IP Capture

### Test Locally
1. Use a tool like Postman or curl
2. Add custom headers:
```bash
curl -X POST https://your-webhook-url \
  -H "Content-Type: application/json" \
  -H "X-Forwarded-For: 192.168.1.100" \
  -d '{"email":"test@example.com",...}'
```

### Test from Website
1. Open browser console
2. Check Network tab when submitting form
3. Look for the webhook request
4. Verify SharePoint shows correct IP

## Common Header Patterns

Different services provide IPs differently:

**Azure Static Web Apps:**
```
X-Azure-ClientIP: 192.168.1.100
X-Forwarded-For: 192.168.1.100
```

**Cloudflare:**
```
CF-Connecting-IP: 192.168.1.100
X-Forwarded-For: 192.168.1.100, proxy1, proxy2
```

**Standard Proxy:**
```
X-Real-IP: 192.168.1.100
X-Forwarded-For: 192.168.1.100, 10.0.0.1
```

## Handling Edge Cases

### No IP Available
Set a default value or flag:
```
if(
  empty(outputs('Parse_Client_IP')),
  'No IP detected',
  outputs('Parse_Client_IP')
)
```

### Private/Local IPs
Detect and flag local IPs:
```
if(
  or(
    startsWith(outputs('Parse_Client_IP'), '192.168.'),
    startsWith(outputs('Parse_Client_IP'), '10.'),
    startsWith(outputs('Parse_Client_IP'), '172.')
  ),
  concat('Local: ', outputs('Parse_Client_IP')),
  outputs('Parse_Client_IP')
)
```

## SharePoint List Configuration

Update your list to handle IP data:

1. **ipAddress** (Single line of text)
   - Real client IP extracted from headers
   
2. **ipHeaders** (Multiple lines of text)
   - Store all header values for debugging
   
3. **ipCountry** (Single line of text)
   - For future geolocation lookup
   
4. **ipType** (Choice)
   - Options: Public, Private, Proxy, Unknown

## Security Considerations

1. **Privacy**: Only store IPs with user consent
2. **Retention**: Delete old IPs per your privacy policy
3. **Access**: Restrict who can view IP addresses
4. **Validation**: Validate IP format before storing
5. **Rate Limiting**: Block repeated requests from same IP

## Troubleshooting

**IP shows as empty:**
- Check if Azure Static Web Apps is stripping headers
- Verify Power Automate can access trigger headers
- Test with different header names

**IP shows proxy/CDN:**
- Check order of headers in coalesce function
- May need to parse X-Forwarded-For differently
- Consider using the last IP in the chain instead

**IP format issues:**
- Add validation: `^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$`
- Handle IPv6 addresses if needed
- Strip port numbers: `split(ipAddress, ':')[0]`