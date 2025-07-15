'use client';

import styles from './page.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function WeightManagementPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Weight Management Services
              </h1>
              <p className={styles.heroSubtitle}>
                Comprehensive weight loss and wellness programs at Garcia Family Medicine
              </p>
              <div className={styles.heroButtons}>
                <a href="tel:816-427-5320" className={styles.primaryButton}>
                  Start Your Journey: 816-427-5320
                </a>
                <a href="#programs" className={styles.secondaryButton}>
                  Weight Programs
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.certificationBadge}>
                <div className={styles.badgeIcon}>⚖️</div>
                <div className={styles.badgeText}>
                  <span>Weight</span>
                  <span>Wellness</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Section */}
        <section className={styles.quickInfo}>
          <div className={styles.container}>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🎯</div>
                <h3>Personalized Plans</h3>
                <p>Customized weight loss strategies</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>👨‍⚕️</div>
                <h3>Medical Supervision</h3>
                <p>Safe, doctor-monitored programs</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🍎</div>
                <h3>Nutrition Guidance</h3>
                <p>Evidence-based dietary support</p>
              </div>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📈</div>
                <h3>Long-term Success</h3>
                <p>Sustainable lifestyle changes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2>Weight Management Programs</h2>
              <p>Comprehensive medical weight loss programs tailored to your individual needs and health goals</p>
            </div>
            <div className={styles.programsGrid}>
              <div className={styles.programCard}>
                <div className={styles.programIcon}>🩺</div>
                <h3>Medical Weight Loss</h3>
                <p>Physician-supervised weight loss with medical interventions</p>
                <ul>
                  <li>Comprehensive health evaluation</li>
                  <li>Prescription weight loss medications</li>
                  <li>Regular medical monitoring</li>
                  <li>Metabolic testing</li>
                </ul>
              </div>
              <div className={styles.programCard}>
                <div className={styles.programIcon}>🍽️</div>
                <h3>Nutritional Counseling</h3>
                <p>Expert nutrition guidance for sustainable eating habits</p>
                <ul>
                  <li>Personalized meal planning</li>
                  <li>Nutritional education</li>
                  <li>Food diary analysis</li>
                  <li>Healthy cooking tips</li>
                </ul>
              </div>
              <div className={styles.programCard}>
                <div className={styles.programIcon}>🏃</div>
                <h3>Exercise Planning</h3>
                <p>Safe, effective exercise programs for all fitness levels</p>
                <ul>
                  <li>Fitness assessments</li>
                  <li>Customized workout plans</li>
                  <li>Activity tracking</li>
                  <li>Injury prevention guidance</li>
                </ul>
              </div>
              <div className={styles.programCard}>
                <div className={styles.programIcon}>🧠</div>
                <h3>Behavioral Support</h3>
                <p>Psychological support for lasting lifestyle changes</p>
                <ul>
                  <li>Habit modification strategies</li>
                  <li>Stress eating management</li>
                  <li>Motivation counseling</li>
                  <li>Support group referrals</li>
                </ul>
              </div>
              <div className={styles.programCard}>
                <div className={styles.programIcon}>⚖️</div>
                <h3>Bariatric Support</h3>
                <p>Pre and post-surgical weight management care</p>
                <ul>
                  <li>Pre-surgical preparation</li>
                  <li>Post-operative follow-up</li>
                  <li>Nutritional monitoring</li>
                  <li>Complication prevention</li>
                </ul>
              </div>
              <div className={styles.programCard}>
                <div className={styles.programIcon}>🔄</div>
                <h3>Maintenance Programs</h3>
                <p>Long-term weight maintenance and lifestyle support</p>
                <ul>
                  <li>Weight maintenance strategies</li>
                  <li>Regular check-ins</li>
                  <li>Lifestyle reinforcement</li>
                  <li>Relapse prevention</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className={styles.approachSection}>
          <div className={styles.container}>
            <h2>Our Comprehensive Approach</h2>
            <div className={styles.approachGrid}>
              <div className={styles.approachCard}>
                <div className={styles.approachNumber}>1</div>
                <h3>Initial Assessment</h3>
                <p>Comprehensive medical and lifestyle evaluation to understand your unique needs</p>
              </div>
              <div className={styles.approachCard}>
                <div className={styles.approachNumber}>2</div>
                <h3>Personalized Plan</h3>
                <p>Custom weight management strategy based on your health, preferences, and goals</p>
              </div>
              <div className={styles.approachCard}>
                <div className={styles.approachNumber}>3</div>
                <h3>Medical Support</h3>
                <p>Ongoing medical supervision with medications and interventions as needed</p>
              </div>
              <div className={styles.approachCard}>
                <div className={styles.approachNumber}>4</div>
                <h3>Lifestyle Coaching</h3>
                <p>Continuous support for nutrition, exercise, and behavioral changes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Section */}
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.conditionsContent}>
              <h2>Weight-Related Health Conditions</h2>
              <p>Our weight management programs can help improve and prevent various obesity-related health conditions:</p>
              <div className={styles.conditionsGrid}>
                <div className={styles.conditionCategory}>
                  <h4>Metabolic Conditions</h4>
                  <ul>
                    <li>Type 2 diabetes</li>
                    <li>Pre-diabetes</li>
                    <li>Metabolic syndrome</li>
                    <li>Insulin resistance</li>
                  </ul>
                </div>
                <div className={styles.conditionCategory}>
                  <h4>Cardiovascular Health</h4>
                  <ul>
                    <li>High blood pressure</li>
                    <li>High cholesterol</li>
                    <li>Heart disease risk</li>
                    <li>Stroke prevention</li>
                  </ul>
                </div>
                <div className={styles.conditionCategory}>
                  <h4>Other Health Issues</h4>
                  <ul>
                    <li>Sleep apnea</li>
                    <li>Joint pain and arthritis</li>
                    <li>Fatty liver disease</li>
                    <li>Depression and anxiety</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Options Section */}
        <section className={styles.treatmentSection}>
          <div className={styles.container}>
            <div className={styles.treatmentContent}>
              <h2>Weight Loss Treatment Options</h2>
              <div className={styles.treatmentGrid}>
                <div className={styles.treatmentCard}>
                  <div className={styles.treatmentIcon}>💊</div>
                  <h3>Prescription Medications</h3>
                  <p>FDA-approved weight loss medications when appropriate, with careful monitoring</p>
                </div>
                <div className={styles.treatmentCard}>
                  <div className={styles.treatmentIcon}>🍽️</div>
                  <h3>Meal Replacement Programs</h3>
                  <p>Structured meal replacement plans for rapid, safe initial weight loss</p>
                </div>
                <div className={styles.treatmentCard}>
                  <div className={styles.treatmentIcon}>📱</div>
                  <h3>Digital Health Tools</h3>
                  <p>Apps and devices for tracking progress, calories, and physical activity</p>
                </div>
                <div className={styles.treatmentCard}>
                  <div className={styles.treatmentIcon}>👥</div>
                  <h3>Group Support</h3>
                  <p>Group sessions and peer support for motivation and accountability</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Section */}
        <section className={styles.successSection}>
          <div className={styles.container}>
            <div className={styles.successContent}>
              <h2>Your Weight Loss Success</h2>
              <p>We're committed to helping you achieve and maintain your weight loss goals through:</p>
              <div className={styles.successGrid}>
                <div className={styles.successCard}>
                  <div className={styles.successIcon}>🎯</div>
                  <h3>Realistic Goals</h3>
                  <p>Setting achievable, sustainable weight loss targets</p>
                </div>
                <div className={styles.successCard}>
                  <div className={styles.successIcon}>📊</div>
                  <h3>Progress Tracking</h3>
                  <p>Regular monitoring of weight, health markers, and lifestyle changes</p>
                </div>
                <div className={styles.successCard}>
                  <div className={styles.successIcon}>🔄</div>
                  <h3>Plan Adjustments</h3>
                  <p>Flexible programs that adapt to your progress and changing needs</p>
                </div>
                <div className={styles.successCard}>
                  <div className={styles.successIcon}>💪</div>
                  <h3>Long-term Support</h3>
                  <p>Ongoing care to maintain your weight loss achievements</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2>Ready to Transform Your Health?</h2>
              <p>Start your weight management journey with medical supervision and personalized support</p>
              <div className={styles.ctaButtons}>
                <a href="tel:816-427-5320" className={styles.ctaButton}>
                  Begin Today: 816-427-5320
                </a>
              </div>
              <div className={styles.ctaInfo}>
                <div className={styles.clinicInfo}>
                  <h4>Garcia Family Medicine</h4>
                  <p>801 NW St. Mary Drive</p>
                  <p>Medical Weight Management Programs</p>
                  <p>Your journey to better health starts with a single step</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}