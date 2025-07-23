'use client';

import styles from '../service.module.css';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';
import { FaAppleAlt, FaHeartbeat, FaBrain, FaChartLine, FaBalanceScale, FaRunning } from 'react-icons/fa';

export default function WeightManagementPage() {
  return (
    <>
      <Header />
      <div className={styles.servicePage}>
        <div className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Understanding Weight Management</h1>
            <p className={styles.heroSubtitle}>Essential Health Information About Healthy Weight and Wellness</p>
          </div>
        </div>

        <div className={styles.mainContent}>
          <section className={styles.introSection}>
            <div className={styles.container}>
              <p className={styles.leadText}>
                Healthy weight management is about much more than appearance—it's a key component of overall health and well-being. Understanding the science of weight, nutrition, and lifestyle factors can help you make informed decisions about your health journey.
              </p>
            </div>
          </section>

          <section className={styles.servicesSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Understanding Healthy Weight</h2>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                  <FaBalanceScale className={styles.serviceIcon} />
                  <h3>Body Mass Index (BMI)</h3>
                  <ul className={styles.serviceList}>
                    <li>BMI of 18.5-24.9 considered healthy range</li>
                    <li>Calculated using height and weight</li>
                    <li>Not perfect but useful screening tool</li>
                    <li>Doesn't account for muscle mass or body composition</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <FaChartLine className={styles.serviceIcon} />
                  <h3>Metabolism Basics</h3>
                  <ul className={styles.serviceList}>
                    <li>Basal metabolic rate accounts for 60-70% of calories burned</li>
                    <li>Physical activity burns 15-30% of daily calories</li>
                    <li>Thermic effect of food burns about 10%</li>
                    <li>Metabolism slows with age and dieting</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <FaAppleAlt className={styles.serviceIcon} />
                  <h3>Calorie Balance</h3>
                  <ul className={styles.serviceList}>
                    <li>Weight loss requires calorie deficit</li>
                    <li>3,500 calories equals approximately 1 pound</li>
                    <li>Gradual weight loss (1-2 lbs/week) is safest</li>
                    <li>Very low-calorie diets can slow metabolism</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <FaHeartbeat className={styles.serviceIcon} />
                  <h3>Health Benefits of Healthy Weight</h3>
                  <ul className={styles.serviceList}>
                    <li>Reduced risk of diabetes and heart disease</li>
                    <li>Lower blood pressure and cholesterol</li>
                    <li>Improved joint health and mobility</li>
                    <li>Better sleep quality and energy levels</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.servicesSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Nutrition Science & Healthy Eating</h2>
              <div className={styles.servicesGrid}>
                <div className={styles.serviceCard}>
                  <FaAppleAlt className={styles.serviceIcon} />
                  <h3>Macronutrients</h3>
                  <ul className={styles.serviceList}>
                    <li>Carbohydrates: 4 calories per gram, body's preferred fuel</li>
                    <li>Proteins: 4 calories per gram, builds and repairs tissue</li>
                    <li>Fats: 9 calories per gram, essential for hormone production</li>
                    <li>Balanced intake supports healthy metabolism</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <FaBrain className={styles.serviceIcon} />
                  <h3>Portion Control</h3>
                  <ul className={styles.serviceList}>
                    <li>Use smaller plates to control portion sizes</li>
                    <li>Fill half your plate with vegetables</li>
                    <li>Palm-sized portion of protein at meals</li>
                    <li>Eat slowly and pay attention to hunger cues</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <FaHeartbeat className={styles.serviceIcon} />
                  <h3>Nutrient Density</h3>
                  <ul className={styles.serviceList}>
                    <li>Choose foods high in nutrients per calorie</li>
                    <li>Fruits and vegetables are nutrient-dense</li>
                    <li>Processed foods often calorie-dense but nutrient-poor</li>
                    <li>Quality of calories matters as much as quantity</li>
                  </ul>
                </div>
                <div className={styles.serviceCard}>
                  <FaRunning className={styles.serviceIcon} />
                  <h3>Meal Timing</h3>
                  <ul className={styles.serviceList}>
                    <li>Regular meal times help regulate metabolism</li>
                    <li>Eating breakfast may support weight management</li>
                    <li>Late-night eating may disrupt sleep and metabolism</li>
                    <li>Listen to your body's natural hunger rhythms</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.approachSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Sustainable Weight Management Strategies</h2>
              <div className={styles.benefitsGrid}>
                <div className={styles.benefitCard}>
                  <h3>Set Realistic Goals</h3>
                  <p>Aim for 1-2 pounds of weight loss per week. Small, consistent changes are more sustainable than drastic restrictions that are hard to maintain long-term.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Focus on Habits, Not Just Weight</h3>
                  <p>Build healthy habits like regular meals, daily movement, and adequate sleep. These behaviors naturally support healthy weight over time.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Include Physical Activity</h3>
                  <p>Combine cardiovascular exercise with strength training. Muscle tissue burns more calories at rest, supporting long-term weight management.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Manage Stress</h3>
                  <p>Chronic stress increases cortisol, which can promote weight gain, especially around the midsection. Practice stress-reduction techniques regularly.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Prioritize Sleep</h3>
                  <p>Poor sleep disrupts hormones that regulate hunger and satiety. Aim for 7-9 hours of quality sleep per night to support healthy weight.</p>
                </div>
                <div className={styles.benefitCard}>
                  <h3>Stay Hydrated</h3>
                  <p>Drinking water before meals can help with portion control. Sometimes thirst is mistaken for hunger. Aim for 8 glasses of water daily.</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.faqSection}>
            <div className={styles.container}>
              <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
              <div className={styles.faqGrid}>
                <div className={styles.faqItem}>
                  <h3>What's the healthiest rate of weight loss?</h3>
                  <p>Generally 1-2 pounds per week is considered safe and sustainable. Rapid weight loss often results in muscle loss and is harder to maintain.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>Do I need to cut out entire food groups?</h3>
                  <p>Most people don't need to eliminate entire food groups unless they have specific medical conditions. Balance and moderation are typically more sustainable.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>Why do I regain weight after dieting?</h3>
                  <p>Restrictive diets can slow metabolism and are hard to maintain. Focus on sustainable lifestyle changes rather than temporary restrictions.</p>
                </div>
                <div className={styles.faqItem}>
                  <h3>How important is exercise for weight management?</h3>
                  <p>While diet plays a bigger role in weight loss, exercise is crucial for maintaining weight loss and overall health. It also helps preserve muscle mass during weight loss.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}