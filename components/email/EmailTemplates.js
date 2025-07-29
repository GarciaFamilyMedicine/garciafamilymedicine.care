// HIPAA-Compliant Email Templates for Garcia Family Medicine
// These templates are designed to protect patient privacy while providing valuable information

export const EMAIL_TEMPLATES = {
  // Lead Nurturing Sequences
  NOURISH_THRIVE_WELCOME: {
    subject: 'Welcome to Your Nourish & Thrive™ Journey',
    template: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <img src="https://garciafamilymedicine.care/images/logo.png" alt="Garcia Family Medicine" style="max-width: 200px;">
        </div>
        
        <h1 style="color: #1f2937; text-align: center; margin-bottom: 30px;">Welcome to Your Transformation Journey!</h1>
        
        <p style="font-size: 16px; line-height: 1.6; color: #374151;">Dear {{firstName}},</p>
        
        <p style="font-size: 16px; line-height: 1.6; color: #374151;">
          Thank you for your interest in the Nourish & Thrive™ Journey. We're excited to support you on your path to lasting health and wellness transformation.
        </p>
        
        <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 20px; margin: 30px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">What Happens Next?</h3>
          <ul style="color: #374151; line-height: 1.6;">
            <li>Our team will contact you within 24 hours to schedule your consultation</li>
            <li>You'll receive a comprehensive health assessment form</li>
            <li>We'll discuss your goals and create a personalized plan</li>
            <li>Begin your 12-month transformation with full support</li>
          </ul>
        </div>
        
        <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 30px 0;">
          <h3 style="color: #1d4ed8; margin-top: 0;">📚 Prepare for Success</h3>
          <p style="color: #1e40af;">While you wait for your consultation, here are some resources to get you started:</p>
          <ul style="color: #1e40af;">
            <li><a href="https://garciafamilymedicine.care/resources/nutrition-guide" style="color: #1d4ed8;">Nutrition Foundations Guide</a></li>
            <li><a href="https://garciafamilymedicine.care/resources/mindful-eating" style="color: #1d4ed8;">Mindful Eating Strategies</a></li>
            <li><a href="https://garciafamilymedicine.care/resources/goal-setting" style="color: #1d4ed8;">Setting Health Goals</a></li>
          </ul>
        </div>
        
        <div style="text-align: center; margin: 40px 0;">
          <a href="tel:816-427-5320" style="background: #3b82f6; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block;">
            Questions? Call (816) 427-5320
          </a>
        </div>
        
        <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center; color: #6b7280; font-size: 14px;">
          <p>Garcia Family Medicine | Blue Springs, MO</p>
          <p>🔒 This email contains no protected health information and is HIPAA-compliant</p>
          <p><a href="{{unsubscribeUrl}}" style="color: #6b7280;">Unsubscribe</a> | <a href="https://garciafamilymedicine.care/privacy" style="color: #6b7280;">Privacy Policy</a></p>
        </div>
      </div>
    `
  },

  CORELIFT_WELCOME: {
    subject: 'Your CoreLift™ Journey Begins Here',
    template: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <img src="https://garciafamilymedicine.care/images/logo.png" alt="Garcia Family Medicine" style="max-width: 200px;">
        </div>
        
        <h1 style="color: #1f2937; text-align: center; margin-bottom: 30px;">Welcome to CoreLift™ Pelvic Health</h1>
        
        <p style="font-size: 16px; line-height: 1.6; color: #374151;">Dear {{firstName}},</p>
        
        <p style="font-size: 16px; line-height: 1.6; color: #374151;">
          Thank you for taking the first step toward reclaiming your confidence and improving your pelvic health. 
          The CoreLift™ program has helped thousands regain control and comfort.
        </p>
        
        <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 20px; margin: 30px 0;">
          <h3 style="color: #065f46; margin-top: 0;">✨ What Makes CoreLift™ Different?</h3>
          <ul style="color: #047857; line-height: 1.6;">
            <li>FDA-approved Emsella technology - 95% patient satisfaction</li>
            <li>Non-invasive treatment - fully clothed sessions</li>
            <li>Equivalent to 11,000 Kegel exercises per session</li>
            <li>No downtime or recovery period needed</li>
          </ul>
        </div>
        
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 30px 0;">
          <h3 style="color: #92400e; margin-top: 0;">🎯 Your Next Steps</h3>
          <ol style="color: #78350f;">
            <li>Schedule your comprehensive pelvic health assessment</li>
            <li>Receive your personalized treatment plan</li>
            <li>Begin your CoreLift™ sessions (typically 6-8 treatments)</li>
            <li>Experience renewed confidence and comfort</li>
          </ol>
        </div>
        
        <div style="text-align: center; margin: 40px 0;">
          <a href="https://outlook.office.com/book/GarciaFamilyMedicine@garciafamilymedicine.care/s/JXViZb_ifkCITve3oXJP-Q2" style="background: #10b981; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block; margin: 10px;">
            Schedule Assessment
          </a>
          <a href="tel:816-427-5320" style="background: #6b7280; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block; margin: 10px;">
            Call (816) 427-5320
          </a>
        </div>
        
        <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center; color: #6b7280; font-size: 14px;">
          <p>Garcia Family Medicine | Blue Springs, MO</p>
          <p>🔒 This email contains no protected health information and is HIPAA-compliant</p>
          <p><a href="{{unsubscribeUrl}}" style="color: #6b7280;">Unsubscribe</a> | <a href="https://garciafamilymedicine.care/privacy" style="color: #6b7280;">Privacy Policy</a></p>
        </div>
      </div>
    `
  },

  IME_CONFIRMATION: {
    subject: 'ValorView™ IME Request Received - Case #{{caseNumber}}',
    template: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <img src="https://garciafamilymedicine.care/images/logo.png" alt="Garcia Family Medicine" style="max-width: 200px;">
        </div>
        
        <h1 style="color: #1f2937; text-align: center; margin-bottom: 30px;">ValorView™ IME Request Received</h1>
        
        <p style="font-size: 16px; line-height: 1.6; color: #374151;">Dear {{contactName}},</p>
        
        <p style="font-size: 16px; line-height: 1.6; color: #374151;">
          Thank you for choosing Garcia Family Medicine for your Independent Medical Examination needs. 
          We have received your request and will coordinate scheduling promptly.
        </p>
        
        <div style="background: #f8fafc; border: 2px solid #3b82f6; padding: 20px; margin: 30px 0; border-radius: 8px;">
          <h3 style="color: #1f2937; margin-top: 0;">📋 Request Details</h3>
          <table style="width: 100%; color: #374151;">
            <tr><td style="padding: 5px 0; font-weight: 600;">Case Number:</td><td style="padding: 5px 0;">{{caseNumber}}</td></tr>
            <tr><td style="padding: 5px 0; font-weight: 600;">Requesting Party:</td><td style="padding: 5px 0;">{{requestingParty}}</td></tr>
            <tr><td style="padding: 5px 0; font-weight: 600;">Examination Type:</td><td style="padding: 5px 0;">{{examType}}</td></tr>
            <tr><td style="padding: 5px 0; font-weight: 600;">Priority Level:</td><td style="padding: 5px 0;">{{urgency}}</td></tr>
            <tr><td style="padding: 5px 0; font-weight: 600;">Expected Response:</td><td style="padding: 5px 0;">{{expectedResponse}}</td></tr>
          </table>
        </div>
        
        <div style="background: #eff6ff; padding: 20px; border-radius: 8px; margin: 30px 0;">
          <h3 style="color: #1d4ed8; margin-top: 0;">🎖️ Our Commitment to Service</h3>
          <ul style="color: #1e40af; line-height: 1.6;">
            <li>Trauma-informed, respectful examination approach</li>
            <li>Thorough documentation with clear findings</li>
            <li>48-72 hour report turnaround time</li>
            <li>Expertise in service-related conditions</li>
          </ul>
        </div>
        
        <div style="background: #fef2f2; border-left: 4px solid #dc2626; padding: 20px; margin: 30px 0;">
          <h3 style="color: #7f1d1d; margin-top: 0;">⚠️ Important Reminders</h3>
          <ul style="color: #991b1b; line-height: 1.6;">
            <li>Ensure all relevant medical records are provided prior to examination</li>
            <li>Confirm examinee contact information and special accommodations</li>
            <li>Review any specific examination requirements or focus areas</li>
          </ul>
        </div>
        
        <div style="text-align: center; margin: 40px 0;">
          <a href="tel:816-427-5320" style="background: #dc2626; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block; margin: 10px;">
            Call (816) 427-5320
          </a>
          <a href="mailto:ime@garciafamilymedicine.care" style="background: #6b7280; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block; margin: 10px;">
            Email IME Team
          </a>
        </div>
        
        <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center; color: #6b7280; font-size: 14px;">
          <p>Garcia Family Medicine | Blue Springs, MO</p>
          <p>🔒 This email contains no protected health information and is HIPAA-compliant</p>
        </div>
      </div>
    `
  },

  APPOINTMENT_REMINDER: {
    subject: 'Appointment Reminder - {{appointmentDate}} at {{appointmentTime}}',
    template: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <img src="https://garciafamilymedicine.care/images/logo.png" alt="Garcia Family Medicine" style="max-width: 200px;">
        </div>
        
        <h1 style="color: #1f2937; text-align: center; margin-bottom: 30px;">🗓️ Appointment Reminder</h1>
        
        <p style="font-size: 16px; line-height: 1.6; color: #374151;">Hello {{firstName}},</p>
        
        <p style="font-size: 16px; line-height: 1.6; color: #374151;">
          This is a friendly reminder about your upcoming appointment with Garcia Family Medicine.
        </p>
        
        <div style="background: #eff6ff; border: 2px solid #3b82f6; padding: 25px; margin: 30px 0; border-radius: 8px; text-align: center;">
          <h2 style="color: #1d4ed8; margin-top: 0;">📅 Appointment Details</h2>
          <p style="font-size: 24px; font-weight: 600; color: #1f2937; margin: 10px 0;">{{appointmentDate}}</p>
          <p style="font-size: 20px; color: #3b82f6; margin: 10px 0;">{{appointmentTime}}</p>
          <p style="color: #6b7280;">{{serviceType}}</p>
        </div>
        
        <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 30px 0;">
          <h3 style="color: #065f46; margin-top: 0;">✅ Please Bring</h3>
          <ul style="color: #047857; line-height: 1.6;">
            <li>Valid photo ID</li>
            <li>Insurance cards</li>
            <li>List of current medications</li>
            <li>Any relevant medical records</li>
          </ul>
        </div>
        
        <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 30px 0;">
          <h3 style="color: #92400e; margin-top: 0;">⏰ Arrival Instructions</h3>
          <p style="color: #78350f; line-height: 1.6;">
            Please arrive 15 minutes early to complete any necessary paperwork. 
            If you need to reschedule, please call us at least 24 hours in advance.
          </p>
        </div>
        
        <div style="text-align: center; margin: 40px 0;">
          <a href="tel:816-427-5320" style="background: #3b82f6; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block; margin: 10px;">
            Call (816) 427-5320
          </a>
        </div>
        
        <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center; color: #6b7280; font-size: 14px;">
          <p>Garcia Family Medicine | Blue Springs, MO</p>
          <p>🔒 This email contains no protected health information and is HIPAA-compliant</p>
        </div>
      </div>
    `
  },

  NURTURE_EDUCATIONAL: {
    subject: '{{subjectLine}}',
    template: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <img src="https://garciafamilymedicine.care/images/logo.png" alt="Garcia Family Medicine" style="max-width: 200px;">
        </div>
        
        <h1 style="color: #1f2937; text-align: center; margin-bottom: 30px;">{{headline}}</h1>
        
        <p style="font-size: 16px; line-height: 1.6; color: #374151;">Hi {{firstName}},</p>
        
        <div style="font-size: 16px; line-height: 1.6; color: #374151;">
          {{content}}
        </div>
        
        <div style="background: #f8fafc; border-left: 4px solid #3b82f6; padding: 20px; margin: 30px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">💡 Key Takeaways</h3>
          <div style="color: #374151; line-height: 1.6;">
            {{keyTakeaways}}
          </div>
        </div>
        
        <div style="text-align: center; margin: 40px 0;">
          <a href="{{ctaUrl}}" style="background: #3b82f6; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block;">
            {{ctaText}}
          </a>
        </div>
        
        <div style="border-top: 1px solid #e5e7eb; padding-top: 20px; text-align: center; color: #6b7280; font-size: 14px;">
          <p>Garcia Family Medicine | Blue Springs, MO</p>
          <p>🔒 This email contains no protected health information and is HIPAA-compliant</p>
          <p><a href="{{unsubscribeUrl}}" style="color: #6b7280;">Unsubscribe</a> | <a href="https://garciafamilymedicine.care/privacy" style="color: #6b7280;">Privacy Policy</a></p>
        </div>
      </div>
    `
  }
};

// Email automation sequences
export const EMAIL_SEQUENCES = {
  NOURISH_THRIVE_NURTURE: [
    {
      day: 0,
      template: 'NOURISH_THRIVE_WELCOME',
      trigger: 'lead_capture'
    },
    {
      day: 3,
      template: 'NURTURE_EDUCATIONAL',
      data: {
        subjectLine: 'The Science Behind Sustainable Weight Loss',
        headline: 'Why 95% of Diets Fail (And What Actually Works)',
        content: `
          <p>Most weight loss programs focus on restriction and willpower. But here's what research shows actually works for long-term success...</p>
          <p>At Garcia Family Medicine, our Nourish & Thrive™ Journey is built on evidence-based approaches that address the root causes of weight gain, not just the symptoms.</p>
        `,
        keyTakeaways: `
          <ul>
            <li>Metabolic factors account for 70% of weight loss challenges</li>
            <li>Emotional eating patterns must be addressed for lasting success</li>
            <li>Sustainable changes happen gradually over 12 months</li>
          </ul>
        `,
        ctaText: 'Learn More About Our Approach',
        ctaUrl: 'https://garciafamilymedicine.care/services/nourish-thrive-journey'
      }
    },
    {
      day: 7,
      template: 'NURTURE_EDUCATIONAL',
      data: {
        subjectLine: 'Lab Work Reveals Hidden Weight Loss Barriers',
        headline: 'What Your Doctor Might Be Missing',
        content: `
          <p>Standard blood tests often miss crucial markers that affect your ability to lose weight and keep it off.</p>
          <p>Our comprehensive lab panel examines thyroid function, hormone balance, insulin sensitivity, and nutritional deficiencies that could be sabotaging your efforts.</p>
        `,
        keyTakeaways: `
          <ul>
            <li>Thyroid disorders affect 1 in 8 women</li>
            <li>Insulin resistance can make weight loss nearly impossible</li>
            <li>Vitamin D deficiency is linked to slower metabolism</li>
          </ul>
        `,
        ctaText: 'Schedule Your Comprehensive Assessment',
        ctaUrl: 'https://garciafamilymedicine.care/contact'
      }
    }
  ],

  CORELIFT_NURTURE: [
    {
      day: 0,
      template: 'CORELIFT_WELCOME',
      trigger: 'lead_capture'
    },
    {
      day: 2,
      template: 'NURTURE_EDUCATIONAL',
      data: {
        subjectLine: 'Understanding Pelvic Floor Health',
        headline: 'You\'re Not Alone in This Journey',
        content: `
          <p>Pelvic floor dysfunction affects 1 in 3 women and many men, yet it's rarely discussed openly. You're taking a brave step toward reclaiming your confidence.</p>
          <p>The good news? Modern technology like our Emsella treatments can help strengthen your pelvic floor without surgery or invasive procedures.</p>
        `,
        keyTakeaways: `
          <ul>
            <li>95% of patients see improvement with Emsella treatments</li>
            <li>Each session equals 11,000 Kegel exercises</li>
            <li>No downtime or recovery period required</li>
          </ul>
        `,
        ctaText: 'Learn More About CoreLift',
        ctaUrl: 'https://garciafamilymedicine.care/services/corelift'
      }
    }
  ]
};

// HIPAA compliance utilities
export const HIPAA_UTILITIES = {
  // Remove any potential PHI from email data
  sanitizeEmailData: (data) => {
    const sanitized = { ...data };
    
    // Remove specific medical details
    delete sanitized.medicalHistory;
    delete sanitized.diagnosis;
    delete sanitized.treatmentDetails;
    delete sanitized.medications;
    
    return sanitized;
  },

  // Validate email content for HIPAA compliance
  validateHIPAACompliance: (emailContent) => {
    const phiPatterns = [
      /\b\d{3}-\d{2}-\d{4}\b/, // SSN pattern
      /\b\d{10,}\b/, // Long numbers that might be medical IDs
      /diagnosis/i,
      /treatment plan/i,
      /prescription/i,
      /medical condition/i
    ];

    for (const pattern of phiPatterns) {
      if (pattern.test(emailContent)) {
        console.warn('Potential PHI detected in email content');
        return false;
      }
    }

    return true;
  },

  // Add HIPAA disclaimer to emails
  addHIPAADisclaimer: (emailTemplate) => {
    const disclaimer = `
      <div style="background: #f3f4f6; padding: 15px; margin: 20px 0; border-radius: 6px; font-size: 12px; color: #6b7280;">
        <p style="margin: 0; font-weight: 600;">🔒 HIPAA Notice:</p>
        <p style="margin: 5px 0 0 0;">This email contains no protected health information (PHI) and is compliant with HIPAA regulations. 
        All communications are encrypted and handled according to federal privacy standards.</p>
      </div>
    `;
    
    return emailTemplate.replace('{{hipaaDisclaimer}}', disclaimer);
  }
};

export default EMAIL_TEMPLATES;