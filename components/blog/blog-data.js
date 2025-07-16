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