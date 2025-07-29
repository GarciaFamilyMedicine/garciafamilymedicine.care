import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    // Extract IME-specific form data
    const imeData = {
      requestingParty: formData.get('requestingParty'),
      contactName: formData.get('contactName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      examineeInfo: formData.get('examineeInfo'),
      examType: formData.get('examType'),
      urgency: formData.get('urgency'),
      additionalNotes: formData.get('additionalNotes'),
      service: formData.get('service'),
      source: formData.get('source'),
      consent: formData.get('consent'),
      timestamp: new Date().toISOString(),
      ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    };

    // Validate required fields
    if (!imeData.requestingParty || !imeData.contactName || !imeData.email || !imeData.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(imeData.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Phone validation
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const cleanPhone = imeData.phone.replace(/\D/g, '');
    if (!phoneRegex.test(imeData.phone) && cleanPhone.length !== 10) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    console.log('New IME request received:', imeData);

    // Send notification for IME request
    try {
      await sendIMENotification(imeData);
    } catch (emailError) {
      console.error('Failed to send IME notification:', emailError);
    }

    // Store IME request data
    try {
      await storeIMEData(imeData);
    } catch (storageError) {
      console.error('Failed to store IME data:', storageError);
    }

    // Return success response with case number
    const caseNumber = generateCaseNumber(imeData);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'IME request received successfully. We will contact you within 24 hours to schedule.',
        caseNumber: caseNumber,
        expectedResponse: getExpectedResponseTime(imeData.urgency)
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('IME request error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again or call (816) 427-5320.' },
      { status: 500 }
    );
  }
}

// Helper function to send IME notification
async function sendIMENotification(imeData) {
  const emailContent = {
    to: 'ime@garciafamilymedicine.care',
    cc: 'info@garciafamilymedicine.care',
    subject: `New IME Request - ${imeData.urgency || 'Standard'} Priority - Case: ${generateCaseNumber(imeData)}`,
    html: `
      <h2>New Independent Medical Examination Request</h2>
      
      <h3>Requesting Party Information</h3>
      <p><strong>Organization:</strong> ${imeData.requestingParty}</p>
      <p><strong>Contact Name:</strong> ${imeData.contactName}</p>
      <p><strong>Email:</strong> ${imeData.email}</p>
      <p><strong>Phone:</strong> ${imeData.phone}</p>
      
      <h3>Examination Details</h3>
      <p><strong>Examination Type:</strong> ${imeData.examType || 'Not specified'}</p>
      <p><strong>Urgency:</strong> ${imeData.urgency || 'Standard'}</p>
      <p><strong>Expected Response:</strong> ${getExpectedResponseTime(imeData.urgency)}</p>
      
      <h3>Examinee Information</h3>
      <p>${imeData.examineeInfo || 'To be provided'}</p>
      
      <h3>Additional Notes</h3>
      <p>${imeData.additionalNotes || 'None provided'}</p>
      
      <h3>Request Details</h3>
      <p><strong>Case Number:</strong> ${generateCaseNumber(imeData)}</p>
      <p><strong>Timestamp:</strong> ${imeData.timestamp}</p>
      <p><strong>Source:</strong> ${imeData.source}</p>
      <p><strong>IP Address:</strong> ${imeData.ipAddress}</p>
      
      <hr>
      <p><em>This request was submitted through the ValorView™ IME service page.</em></p>
    `
  };

  // Implement your email service integration here
  return true;
}

// Helper function to store IME data
async function storeIMEData(imeData) {
  // Store in HIPAA-compliant system
  // Implement encryption and access controls
  return true;
}

// Helper function to generate case number
function generateCaseNumber(imeData) {
  const timestamp = Date.now();
  const urgencyCode = {
    'routine': 'R',
    'expedited': 'E',
    'urgent': 'U',
    'emergency': 'EM'
  }[imeData.urgency] || 'S'; // S for Standard
  
  return `IME-${urgencyCode}-${timestamp}`;
}

// Helper function to get expected response time
function getExpectedResponseTime(urgency) {
  const timeframes = {
    'routine': 'Within 2-3 business days',
    'expedited': 'Within 24 hours',
    'urgent': 'Within 4 hours',
    'emergency': 'Within 2 hours'
  };
  
  return timeframes[urgency] || 'Within 24 hours';
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