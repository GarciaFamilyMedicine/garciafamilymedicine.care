// Blog posts data management
// This file manages all blog posts for Garcia Family Medicine

export const blogPosts = [
  {
    id: 1,
    slug: 'welcome-to-garcia-family-medicine-blog',
    title: 'Welcome to Garcia Family Medicine Blog',
    excerpt: 'We\'re excited to launch our new blog to share health insights, practice updates, and community news with our patients and the Blue Springs community.',
    content: `
      <p>Welcome to the Garcia Family Medicine blog! We're thrilled to launch this new platform to better connect with our patients and the broader Blue Springs community.</p>
      
      <p>Here you'll find:</p>
      <ul>
        <li><strong>Health and wellness tips</strong> from Dr. Tess Garcia</li>
        <li><strong>Practice updates</strong> and new service announcements</li>
        <li><strong>Community health initiatives</strong> and partnerships</li>
        <li><strong>Patient education</strong> on common health conditions</li>
        <li><strong>Seasonal health advice</strong> and preventive care guidance</li>
      </ul>
      
      <p>Our goal is to provide you with reliable, evidence-based health information that you can trust. Dr. Garcia and our team are committed to your health and wellness, and this blog is another way we can support you on your healthcare journey.</p>
      
      <p>We encourage you to bookmark this page and check back regularly for new content. If you have specific health topics you'd like us to cover, please don't hesitate to let us know during your next visit or by calling our office at 816-427-5320.</p>
      
      <p>Thank you for being part of the Garcia Family Medicine community!</p>
    `,
    author: 'Dr. Tess Garcia',
    publishedDate: '2025-01-16',
    category: 'Practice News',
    tags: ['welcome', 'community', 'blog launch'],
    featured: true,
    image: '/images/blog/welcome-post.jpg'
  },
  {
    id: 2,
    slug: 'understanding-winter-wellness',
    title: 'Winter Wellness: Staying Healthy During Cold Season',
    excerpt: 'Learn essential tips for maintaining your health during winter months, from immune system support to preventing seasonal depression.',
    content: `
      <p>Winter can be challenging for our health and wellbeing. The combination of cold weather, reduced sunlight, and increased time indoors can affect both our physical and mental health.</p>
      
      <h3>Immune System Support</h3>
      <p>During winter months, it's crucial to support your immune system:</p>
      <ul>
        <li><strong>Vitamin D:</strong> With reduced sunlight, consider vitamin D supplementation</li>
        <li><strong>Hand hygiene:</strong> Wash hands frequently and thoroughly</li>
        <li><strong>Sleep:</strong> Maintain 7-9 hours of quality sleep nightly</li>
        <li><strong>Nutrition:</strong> Eat plenty of fruits and vegetables rich in vitamin C</li>
      </ul>
      
      <h3>Mental Health in Winter</h3>
      <p>Seasonal Affective Disorder (SAD) affects many people during darker months:</p>
      <ul>
        <li>Light therapy can be beneficial</li>
        <li>Maintain regular exercise routines</li>
        <li>Stay socially connected</li>
        <li>Consider talking to your healthcare provider if symptoms persist</li>
      </ul>
      
      <h3>When to See Your Doctor</h3>
      <p>Contact Garcia Family Medicine if you experience:</p>
      <ul>
        <li>Persistent cold or flu symptoms</li>
        <li>Significant mood changes</li>
        <li>Worsening of chronic conditions</li>
        <li>Concerns about winter-related health issues</li>
      </ul>
      
      <p>Remember, prevention is always better than treatment. Take care of yourself this winter!</p>
    `,
    author: 'Dr. Tess Garcia',
    publishedDate: '2025-01-15',
    category: 'Health Tips',
    tags: ['winter', 'wellness', 'immune system', 'mental health'],
    featured: false,
    image: '/images/blog/winter-wellness.jpg'
  },
  {
    id: 3,
    slug: 'new-telehealth-services-available',
    title: 'Expanded Telehealth Services Now Available',
    excerpt: 'Garcia Family Medicine is pleased to announce expanded telehealth options for routine care, follow-ups, and consultations.',
    content: `
      <p>We're excited to announce that Garcia Family Medicine has expanded our telehealth services to better serve our patients throughout the Kansas City metro area.</p>
      
      <h3>Available Telehealth Services</h3>
      <ul>
        <li><strong>Routine follow-up appointments</strong></li>
        <li><strong>Medication management</strong></li>
        <li><strong>Mental health consultations</strong></li>
        <li><strong>Chronic disease monitoring</strong></li>
        <li><strong>Preventive care discussions</strong></li>
        <li><strong>Second opinions</strong></li>
      </ul>
      
      <h3>How to Schedule</h3>
      <p>Scheduling a telehealth appointment is easy:</p>
      <ol>
        <li>Call our office at 816-427-5320</li>
        <li>Request a telehealth appointment</li>
        <li>Receive secure video link via email</li>
        <li>Join your appointment from any device</li>
      </ol>
      
      <h3>Technology Requirements</h3>
      <p>For the best telehealth experience, you'll need:</p>
      <ul>
        <li>Reliable internet connection</li>
        <li>Device with camera and microphone</li>
        <li>Quiet, private space for consultation</li>
        <li>List of current medications</li>
      </ul>
      
      <p>Telehealth appointments offer the same quality care you expect from Garcia Family Medicine, with the added convenience of receiving care from home.</p>
    `,
    author: 'Garcia Family Medicine Team',
    publishedDate: '2025-01-14',
    category: 'Service Updates',
    tags: ['telehealth', 'technology', 'convenience', 'virtual care'],
    featured: true,
    image: '/images/blog/telehealth-services.jpg'
  },
  {
    id: 4,
    slug: 'managing-seasonal-allergies-2025',
    title: 'Spring Allergy Season: Expert Tips for Managing Symptoms',
    excerpt: 'As spring approaches, learn how to identify and manage seasonal allergies effectively with guidance from Dr. Garcia.',
    content: `
      <p>Spring brings beautiful weather and blooming flowers, but for many, it also means the start of allergy season. At Garcia Family Medicine, we want to help you enjoy the season without the discomfort of allergies.</p>
      
      <h3>Common Spring Allergens</h3>
      <p>Understanding what triggers your allergies is the first step in managing them:</p>
      <ul>
        <li><strong>Tree Pollen:</strong> Oak, cedar, birch, and maple are common culprits</li>
        <li><strong>Grass Pollen:</strong> Becomes more prevalent as spring progresses</li>
        <li><strong>Mold Spores:</strong> Thrive in damp spring conditions</li>
        <li><strong>Dust Mites:</strong> Increase with spring cleaning activities</li>
      </ul>
      
      <h3>Symptoms to Watch For</h3>
      <p>Seasonal allergies can manifest in various ways:</p>
      <ul>
        <li>Sneezing and runny nose</li>
        <li>Itchy, watery eyes</li>
        <li>Nasal congestion</li>
        <li>Fatigue and headaches</li>
        <li>Dark circles under eyes ("allergic shiners")</li>
      </ul>
      
      <h3>Dr. Garcia's Management Strategies</h3>
      <p>Our team recommends these evidence-based approaches:</p>
      
      <h4>1. Prevention First</h4>
      <ul>
        <li>Check daily pollen counts and plan outdoor activities accordingly</li>
        <li>Keep windows closed during high pollen days</li>
        <li>Shower and change clothes after being outdoors</li>
        <li>Use HEPA filters in your home</li>
      </ul>
      
      <h4>2. Over-the-Counter Relief</h4>
      <p>Several OTC options can provide relief:</p>
      <ul>
        <li><strong>Antihistamines:</strong> Cetirizine, loratadine, or fexofenadine</li>
        <li><strong>Nasal Sprays:</strong> Saline rinses or steroid sprays</li>
        <li><strong>Eye Drops:</strong> For itchy, watery eyes</li>
      </ul>
      
      <h4>3. When to See Dr. Garcia</h4>
      <p>Schedule an appointment if you experience:</p>
      <ul>
        <li>Symptoms interfering with daily activities</li>
        <li>OTC medications not providing relief</li>
        <li>Asthma symptoms worsening</li>
        <li>Frequent sinus infections</li>
      </ul>
      
      <h3>Advanced Treatment Options</h3>
      <p>For severe allergies, we offer:</p>
      <ul>
        <li><strong>Prescription medications:</strong> Stronger antihistamines or nasal sprays</li>
        <li><strong>Allergy testing:</strong> Identify specific triggers</li>
        <li><strong>Immunotherapy referrals:</strong> For long-term relief</li>
      </ul>
      
      <p>Don't let allergies keep you from enjoying spring! Contact Garcia Family Medicine at 816-427-5320 to discuss your allergy management plan.</p>
    `,
    author: 'Dr. Tess Garcia',
    publishedDate: '2025-07-20',
    category: 'Wellness Tips',
    tags: ['allergies', 'spring health', 'prevention', 'treatment'],
    featured: false,
    image: '/images/blog/spring-allergies.jpg'
  },
  {
    id: 5,
    slug: 'heart-health-awareness-month',
    title: 'February is Heart Health Month: Know Your Numbers',
    excerpt: 'Join us in celebrating American Heart Month by learning about cardiovascular health and preventive care strategies.',
    content: `
      <p>February is American Heart Month, a time to focus on cardiovascular health. Heart disease remains the leading cause of death in the United States, but the good news is that it's largely preventable through lifestyle changes and regular health screenings.</p>
      
      <h3>Know Your Numbers</h3>
      <p>Understanding these key health metrics is crucial for heart health:</p>
      
      <h4>Blood Pressure</h4>
      <ul>
        <li><strong>Normal:</strong> Less than 120/80 mmHg</li>
        <li><strong>Elevated:</strong> 120-129 systolic and less than 80 diastolic</li>
        <li><strong>High:</strong> 130/80 mmHg or higher</li>
      </ul>
      
      <h4>Cholesterol Levels</h4>
      <ul>
        <li><strong>Total Cholesterol:</strong> Less than 200 mg/dL</li>
        <li><strong>LDL ("Bad"):</strong> Less than 100 mg/dL</li>
        <li><strong>HDL ("Good"):</strong> 40 mg/dL or higher for men, 50 mg/dL or higher for women</li>
      </ul>
      
      <h4>Other Important Numbers</h4>
      <ul>
        <li><strong>BMI:</strong> 18.5-24.9 (healthy range)</li>
        <li><strong>Blood Sugar:</strong> Less than 100 mg/dL (fasting)</li>
        <li><strong>Waist Circumference:</strong> Less than 40 inches for men, 35 inches for women</li>
      </ul>
      
      <h3>Heart-Healthy Lifestyle Changes</h3>
      <p>Small changes can make a big difference:</p>
      
      <h4>Diet Modifications</h4>
      <ul>
        <li>Increase fruits and vegetables to 5-9 servings daily</li>
        <li>Choose whole grains over refined grains</li>
        <li>Limit saturated fats and trans fats</li>
        <li>Reduce sodium intake to less than 2,300 mg daily</li>
        <li>Include omega-3 rich fish twice weekly</li>
      </ul>
      
      <h4>Physical Activity</h4>
      <ul>
        <li>Aim for 150 minutes of moderate exercise weekly</li>
        <li>Include strength training twice per week</li>
        <li>Take regular breaks from sitting</li>
        <li>Find activities you enjoy for sustainability</li>
      </ul>
      
      <h3>Risk Factors You Can Control</h3>
      <ul>
        <li><strong>Smoking:</strong> Quitting is the best thing you can do for your heart</li>
        <li><strong>Stress:</strong> Practice stress management techniques</li>
        <li><strong>Sleep:</strong> Aim for 7-9 hours nightly</li>
        <li><strong>Alcohol:</strong> Limit to moderate consumption</li>
      </ul>
      
      <h3>Schedule Your Heart Health Screening</h3>
      <p>Regular check-ups are essential for early detection and prevention. At Garcia Family Medicine, we offer comprehensive cardiovascular risk assessments including:</p>
      <ul>
        <li>Blood pressure monitoring</li>
        <li>Cholesterol screening</li>
        <li>EKG testing when indicated</li>
        <li>Personalized risk assessment</li>
        <li>Lifestyle counseling</li>
      </ul>
      
      <p>This February, make your heart health a priority. Call 816-427-5320 to schedule your cardiovascular health screening with Dr. Garcia.</p>
    `,
    author: 'Dr. Tess Garcia',
    publishedDate: '2025-07-01',
    category: 'Preventive Care',
    tags: ['heart health', 'prevention', 'cardiovascular', 'screening'],
    featured: true,
    image: '/images/blog/heart-health.jpg'
  },
  {
    id: 6,
    slug: 'new-patient-portal-launch',
    title: 'Introducing Our New Patient Portal: Healthcare at Your Fingertips',
    excerpt: 'Access your health records, schedule appointments, and communicate with our team through our new secure patient portal.',
    content: `
      <p>We're excited to announce the launch of our new patient portal, designed to make managing your healthcare easier and more convenient than ever before.</p>
      
      <h3>Portal Features</h3>
      <p>Our secure patient portal offers numerous features to enhance your healthcare experience:</p>
      
      <h4>24/7 Access to Your Health Information</h4>
      <ul>
        <li>View test results as soon as they're available</li>
        <li>Access your complete medical history</li>
        <li>Review medications and allergies</li>
        <li>Track immunization records</li>
        <li>Download and print health summaries</li>
      </ul>
      
      <h4>Convenient Communication</h4>
      <ul>
        <li>Send secure messages to Dr. Garcia and our team</li>
        <li>Request prescription refills</li>
        <li>Ask non-urgent medical questions</li>
        <li>Receive appointment reminders</li>
      </ul>
      
      <h4>Appointment Management</h4>
      <ul>
        <li>Schedule appointments online</li>
        <li>View upcoming appointments</li>
        <li>Cancel or reschedule as needed</li>
        <li>Complete pre-visit paperwork</li>
      </ul>
      
      <h3>Getting Started</h3>
      <p>Activating your patient portal account is simple:</p>
      <ol>
        <li>Look for your activation email from Garcia Family Medicine</li>
        <li>Click the secure link to create your password</li>
        <li>Log in using your email and new password</li>
        <li>Complete your profile setup</li>
      </ol>
      
      <h3>Security and Privacy</h3>
      <p>Your privacy is our priority. Our patient portal features:</p>
      <ul>
        <li>Bank-level encryption for all data</li>
        <li>Secure authentication protocols</li>
        <li>HIPAA-compliant platform</li>
        <li>Automatic logout for inactivity</li>
      </ul>
      
      <h3>Mobile Access</h3>
      <p>Take your health information with you:</p>
      <ul>
        <li>Access the portal from any smartphone or tablet</li>
        <li>Mobile-optimized interface</li>
        <li>Push notifications for new messages</li>
        <li>Touch ID/Face ID support on compatible devices</li>
      </ul>
      
      <h3>Need Help?</h3>
      <p>Our team is here to support you:</p>
      <ul>
        <li>Call 816-427-5320 for portal assistance</li>
        <li>Visit during office hours for in-person help</li>
        <li>Access our portal FAQ section</li>
        <li>Watch tutorial videos for common tasks</li>
      </ul>
      
      <p>The patient portal is another way we're working to provide you with exceptional, patient-centered care. Sign up today and experience the convenience of managing your health online!</p>
    `,
    author: 'Garcia Family Medicine Team',
    publishedDate: '2025-06-15',
    category: 'Technology',
    tags: ['patient portal', 'technology', 'convenience', 'digital health'],
    featured: false,
    image: '/images/blog/patient-portal.jpg'
  },
  {
    id: 7,
    slug: 'new-website-news-portal-launch',
    title: 'Exciting News: Our New Website & News Portal is Live!',
    excerpt: 'We are thrilled to announce the launch of our completely redesigned website featuring our new News & Events Portal.',
    content: `
      <p>Welcome to the new Garcia Family Medicine website! We're excited to share our completely redesigned digital experience, featuring our brand new News & Events Portal that brings together all the latest updates from our practice in one convenient location.</p>
      
      <h3>What's New?</h3>
      <p>Our website redesign focuses on making it easier for you to:</p>
      <ul>
        <li><strong>Stay Informed:</strong> Our new News & Events Portal combines blog posts, practice updates, and community events</li>
        <li><strong>Navigate with Ease:</strong> Improved menu system with quick access to all services</li>
        <li><strong>Access Care Information:</strong> Detailed pages for all our specialized services</li>
        <li><strong>Connect with Us:</strong> Enhanced contact options and telehealth information</li>
      </ul>
      
      <h3>Introducing the News & Events Portal</h3>
      <p>Our new portal is your one-stop destination for:</p>
      <ul>
        <li>Health and wellness articles from Dr. Garcia</li>
        <li>Practice announcements and updates</li>
        <li>Upcoming community health events</li>
        <li>Past event highlights and photos</li>
        <li>Seasonal health tips and reminders</li>
      </ul>
      
      <h3>Enhanced Features</h3>
      <h4>Smart Navigation</h4>
      <p>Browse content by category, view recent posts, or explore our comprehensive event calendar - all from one integrated portal page.</p>
      
      <h4>Mobile-Friendly Design</h4>
      <p>Access our website seamlessly from any device. Whether you're on your phone, tablet, or computer, you'll enjoy the same great experience.</p>
      
      <h4>Interactive Calendar</h4>
      <p>Never miss an important health event or screening. Our interactive calendar shows all upcoming events at a glance.</p>
      
      <h3>Your Feedback Matters</h3>
      <p>This new website was designed with you in mind. We'd love to hear your thoughts on the new design and features. Feel free to share your feedback during your next visit or by calling our office.</p>
      
      <h3>Stay Connected</h3>
      <p>Make sure to bookmark our new News & Events Portal and check back regularly for:</p>
      <ul>
        <li>Weekly health tips</li>
        <li>Monthly wellness challenges</li>
        <li>Seasonal health reminders</li>
        <li>Community event announcements</li>
        <li>Practice updates and new services</li>
      </ul>
      
      <p>Thank you for being part of the Garcia Family Medicine family. We're committed to providing you with not just excellent healthcare, but also valuable health information and resources through our new digital platform.</p>
      
      <p>Explore the new website and let us know what you think!</p>
    `,
    author: 'Garcia Family Medicine Team',
    publishedDate: '2025-08-03',
    category: 'Practice News',
    tags: ['website launch', 'news portal', 'digital health', 'announcements'],
    featured: true,
    image: '/images/blog/website-launch.jpg'
  }
];

// Helper functions for blog management
export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured);
};

export const getRecentPosts = (limit = 5) => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate))
    .slice(0, limit);
};

export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category) => {
  return blogPosts.filter(post => post.category === category);
};

export const getAllCategories = () => {
  const categories = [...new Set(blogPosts.map(post => post.category))];
  return categories;
};

export const getAllTags = () => {
  const tags = [...new Set(blogPosts.flatMap(post => post.tags))];
  return tags;
};

export const searchPosts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

export const getReadingTime = (content) => {
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

export const getAdjacentPosts = (currentSlug) => {
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
  const currentIndex = sortedPosts.findIndex(post => post.slug === currentSlug);
  
  return {
    previous: currentIndex > 0 ? sortedPosts[currentIndex - 1] : null,
    next: currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null
  };
};