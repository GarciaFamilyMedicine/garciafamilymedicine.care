import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    // Extract form data
    const leadData = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      source: formData.get('source'),
      goals: formData.get('goals'),
      timeframe: formData.get('timeframe'),
      condition: formData.get('condition'),
      consent: formData.get('consent'),
      timestamp: new Date().toISOString(),
      ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    };

    // Validate required fields
    if (!leadData.fullName || !leadData.email || !leadData.phone || !leadData.service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(leadData.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Phone validation (basic US format)
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const cleanPhone = leadData.phone.replace(/\D/g, '');
    if (!phoneRegex.test(leadData.phone) && cleanPhone.length !== 10) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Here you would integrate with your CRM, email service, or database
    // For now, we'll log the data and could send to webhook/email service
    
    console.log('New lead captured:', leadData);

    // Send notification email (integrate with your email service)
    try {
      await sendLeadNotification(leadData);
    } catch (emailError) {
      console.error('Failed to send lead notification:', emailError);
      // Don't fail the request if email fails
    }

    // Store in database or CRM (integrate with your preferred service)
    try {
      await storeLeadData(leadData);
    } catch (storageError) {
      console.error('Failed to store lead data:', storageError);
      // Could implement retry logic here
    }

    // Return success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your interest! We will contact you within 24 hours.',
        leadId: generateLeadId(leadData)
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Lead capture error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again or call (816) 427-5320.' },
      { status: 500 }
    );
  }
}

// Helper function to send lead notification
async function sendLeadNotification(leadData) {
  // This would integrate with your email service (SendGrid, Mailgun, etc.)
  // For now, it's a placeholder for the integration
  
  const emailContent = {
    to: 'info@garciafamilymedicine.care',
    subject: `New ${leadData.service} Lead: ${leadData.fullName}`,
    html: `
      <h2>New Lead Captured</h2>
      <p><strong>Service:</strong> ${leadData.service}</p>
      <p><strong>Name:</strong> ${leadData.fullName}</p>
      <p><strong>Email:</strong> ${leadData.email}</p>
      <p><strong>Phone:</strong> ${leadData.phone}</p>
      <p><strong>Goals:</strong> ${leadData.goals || 'Not specified'}</p>
      <p><strong>Timeframe:</strong> ${leadData.timeframe || 'Not specified'}</p>
      <p><strong>Source:</strong> ${leadData.source}</p>
      <p><strong>Timestamp:</strong> ${leadData.timestamp}</p>
      <p><strong>IP Address:</strong> ${leadData.ipAddress}</p>
    `
  };

  // Implement your email service integration here
  // Example: await emailService.send(emailContent);
  
  return true;
}

// Helper function to store lead data
async function storeLeadData(leadData) {
  // This would integrate with your database or CRM
  // Examples: Salesforce, HubSpot, Airtable, Google Sheets API
  
  // For HIPAA compliance, ensure:
  // 1. Encrypted storage
  // 2. Access controls
  // 3. Audit logging
  // 4. Data retention policies
  
  return true;
}

// Helper function to generate unique lead ID
function generateLeadId(leadData) {
  const timestamp = Date.now();
  const serviceCode = {
    'nourish-thrive-journey': 'NTJ',
    'corelift': 'CL',
    'valorview-ime': 'IME'
  }[leadData.service] || 'GEN';
  
  return `${serviceCode}-${timestamp}`;
}

// OPTIONS handler for CORS
export async function OPTIONS(request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}