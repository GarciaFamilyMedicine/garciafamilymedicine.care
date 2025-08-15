'use client'

import styles from '../learn-article.module.css'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function WeightManagementPage() {
  return (
    <>
      <Header />
      <div className={styles.articlePage}>
        <div className={styles.articleContainer}>
          {/* Header */}
          <header className={styles.articleHeader}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link> / <Link href="/learn">Health Education</Link> / Weight Management
            </nav>
            <h1 className={styles.articleTitle}>Weight Management: Science-Based Approaches to Healthy Weight</h1>
            <div className={styles.articleMeta}>
              <span>Last Updated: January 2025</span>
              <span>Reviewed by: Dr. Tess Garcia, MD</span>
              <span>Reading Time: 15 minutes</span>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className={styles.tableOfContents}>
            <h2 className={styles.tocTitle}>On This Page</h2>
            <ul className={styles.tocList}>
              <li><a href="#overview">Understanding Weight & Health</a></li>
              <li><a href="#statistics">Current Obesity Statistics</a></li>
              <li><a href="#assessment">Weight Assessment & Goals</a></li>
              <li><a href="#nutrition">Nutrition Strategies</a></li>
              <li><a href="#physical-activity">Exercise & Movement</a></li>
              <li><a href="#behavioral">Behavioral Approaches</a></li>
              <li><a href="#medications">Medical Interventions</a></li>
              <li><a href="#childhood">Pediatric Weight Management</a></li>
              <li><a href="#maintenance">Long-Term Success</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#resources">Additional Resources</a></li>
            </ul>
          </nav>

          {/* Main Content */}
          <section id="overview" className={styles.section}>
            <h2 className={styles.sectionTitle}>Understanding Weight & Health</h2>
            <p className={styles.leadText}>
              Weight management is about achieving and maintaining a healthy weight through sustainable lifestyle changes rather than quick fixes. While obesity affects 42% of US adults and increases risk for numerous health conditions, effective management strategies have evolved significantly. The 2025 guidelines emphasize personalized, comprehensive approaches combining behavioral interventions, medical therapy when appropriate, and addressing underlying metabolic health rather than focusing solely on the number on the scale.
            </p>
            
            <div className={styles.keyPoints}>
              <h3>Key Concepts in Weight Science</h3>
              <ul className={styles.keyPointsList}>
                <li>Weight regulation involves complex interactions between genetics, hormones, environment, and behavior</li>
                <li>Set point theory suggests the body defends against weight loss through metabolic adaptation</li>
                <li>95% of diets fail long-term due to unsustainable approaches and metabolic changes</li>
                <li>Weight cycling ("yo-yo dieting") can be more harmful than stable higher weight</li>
                <li>Non-scale victories (energy, fitness, health markers) often precede weight changes</li>
                <li>Metabolic health can improve independent of significant weight loss</li>
                <li>Sustainable loss of 5-10% body weight provides substantial health benefits</li>
              </ul>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h4>42%</h4>
                <p>US adults with obesity</p>
              </div>
              <div className={styles.statCard}>
                <h4>$260B</h4>
                <p>Annual obesity-related medical costs</p>
              </div>
              <div className={styles.statCard}>
                <h4>5-10%</h4>
                <p>Weight loss for health benefits</p>
              </div>
            </div>
          </section>

          <section id="statistics" className={styles.section}>
            <h2 className={styles.sectionTitle}>2025 Obesity Statistics & Trends</h2>
            <p className={styles.sectionText}>
              The obesity epidemic continues to grow, with rates tripling since 1975. Current data reveals concerning trends across all age groups, with particular disparities among racial, ethnic, and socioeconomic populations.
            </p>

            <div className={styles.warningBox}>
              <h4>Alarming Pediatric Trends</h4>
              <p>
                Childhood obesity affects 1 in 5 children (19.7%), with rates highest among Hispanic (26.2%) and Black (24.8%) youth. Projections indicate 254 million children will have obesity by 2030 without immediate intervention. Early onset obesity increases lifetime disease risk and healthcare costs.
              </p>
            </div>

            <h3 className={styles.subsectionTitle}>Adult Obesity Prevalence</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>By BMI Category</h3>
                <ul>
                  <li><strong>Overweight (BMI 25-29.9):</strong> 31.1% of adults</li>
                  <li><strong>Obesity (BMI ≥30):</strong> 42.5% of adults</li>
                  <li><strong>Severe obesity (BMI ≥40):</strong> 9.2% of adults</li>
                  <li>Combined overweight/obesity: 73.6% of adults</li>
                  <li>Projected to reach 50% obesity by 2030</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Health Impact</h3>
                <ul>
                  <li>Leading risk factor for type 2 diabetes (90% of cases)</li>
                  <li>Increases heart disease risk by 28%</li>
                  <li>Linked to 13 types of cancer</li>
                  <li>Reduces life expectancy by 5-20 years</li>
                  <li>Major cause of preventable death</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Disparities & Social Determinants</h3>
            <div className={styles.keyPoints}>
              <h3>Factors Influencing Obesity Risk</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Income:</strong> Obesity prevalence 25.8% in lowest income vs 11.5% in highest</li>
                <li><strong>Education:</strong> Lower education correlates with higher obesity rates</li>
                <li><strong>Food environment:</strong> Food deserts affect 23.5 million Americans</li>
                <li><strong>Built environment:</strong> Walkability and green space access impact weight</li>
                <li><strong>Stress & trauma:</strong> ACEs increase obesity risk by 46%</li>
                <li><strong>Sleep deprivation:</strong> Less than 7 hours increases obesity risk 30%</li>
                <li><strong>Medication effects:</strong> 20+ common drugs cause weight gain</li>
              </ul>
            </div>
          </section>

          <section id="assessment" className={styles.section}>
            <h2 className={styles.sectionTitle}>Weight Assessment & Goal Setting</h2>
            <p className={styles.sectionText}>
              Comprehensive weight assessment goes beyond BMI to evaluate overall health status, metabolic function, and individualized risk factors. The 2025 guidelines emphasize patient-centered goals focusing on health improvement rather than arbitrary weight targets.
            </p>

            <h3 className={styles.subsectionTitle}>Assessment Tools</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Body Mass Index (BMI)</h3>
                <ul>
                  <li><strong>Underweight:</strong> BMI less than 18.5 kg/m²</li>
                  <li><strong>Normal:</strong> 18.5-24.9 kg/m²</li>
                  <li><strong>Overweight:</strong> 25-29.9 kg/m²</li>
                  <li><strong>Obesity Class I:</strong> 30-34.9 kg/m²</li>
                  <li><strong>Obesity Class II:</strong> 35-39.9 kg/m²</li>
                  <li><strong>Obesity Class III:</strong> ≥40 kg/m²</li>
                  <li>Note: Doesn't distinguish muscle vs fat</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Additional Measurements</h3>
                <ul>
                  <li><strong>Waist circumference:</strong> Greater than 40" men, greater than 35" women indicates risk</li>
                  <li><strong>Waist-to-hip ratio:</strong> Central obesity assessment</li>
                  <li><strong>Body composition:</strong> DEXA, BIA for fat percentage</li>
                  <li><strong>Metabolic markers:</strong> Glucose, lipids, liver enzymes</li>
                  <li><strong>Inflammatory markers:</strong> CRP, IL-6</li>
                  <li><strong>Fitness assessment:</strong> VO2 max, strength testing</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Setting Realistic Goals</h3>
            <div className={styles.keyPoints}>
              <h3>Evidence-Based Goal Setting</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Initial target:</strong> 5-10% weight loss over 6 months</li>
                <li><strong>Rate of loss:</strong> 1-2 pounds per week maximum</li>
                <li><strong>Calorie deficit:</strong> 500-750 calories/day for 1-1.5 lb/week loss</li>
                <li><strong>Process goals:</strong> Focus on behaviors not just outcomes</li>
                <li><strong>SMART goals:</strong> Specific, measurable, achievable, relevant, time-bound</li>
                <li><strong>Non-scale victories:</strong> Energy, sleep, mood, fitness improvements</li>
                <li><strong>Maintenance planning:</strong> Transition strategies from day one</li>
              </ul>
            </div>
          </section>

          <section id="nutrition" className={styles.section}>
            <h2 className={styles.sectionTitle}>Evidence-Based Nutrition Strategies</h2>
            <p className={styles.sectionText}>
              No single diet works for everyone. The best eating pattern is one you can maintain long-term while meeting nutritional needs. Research shows similar weight loss across different approaches when calories are controlled, but adherence is the strongest predictor of success.
            </p>

            <h3 className={styles.subsectionTitle}>Dietary Approaches</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Mediterranean Pattern</h3>
                <ul>
                  <li>Emphasizes whole foods, olive oil, fish</li>
                  <li>High in fruits, vegetables, whole grains</li>
                  <li>Moderate dairy, poultry, eggs</li>
                  <li>Limited red meat and sweets</li>
                  <li>Average 6% weight loss at 12 months</li>
                  <li>Improves cardiovascular health</li>
                  <li>Most sustainable long-term</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Low-Carbohydrate</h3>
                <ul>
                  <li>20-50g carbs daily (ketogenic)</li>
                  <li>Or less than 130g daily (low-carb)</li>
                  <li>Initial rapid weight loss (water)</li>
                  <li>Average 8% loss at 6 months</li>
                  <li>May improve insulin sensitivity</li>
                  <li>Difficult long-term adherence</li>
                  <li>Monitor kidney function, lipids</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Practical Nutrition Strategies</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Portion Control</h3>
                <ul>
                  <li>Use smaller plates (9-10 inch)</li>
                  <li>Pre-portion snacks and meals</li>
                  <li>Follow plate method: 1/2 vegetables, 1/4 protein, 1/4 grains</li>
                  <li>Eat slowly, takes 20 minutes for satiety signals</li>
                  <li>Stop eating at 80% full</li>
                  <li>Measure oils and dressings</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Mindful Eating</h3>
                <ul>
                  <li>Eat without distractions (TV, phone)</li>
                  <li>Check hunger/fullness before and during meals</li>
                  <li>Identify emotional vs physical hunger</li>
                  <li>Keep a food journal or use apps</li>
                  <li>Plan meals and snacks in advance</li>
                  <li>Practice self-compassion with slip-ups</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>Key Nutritional Principles</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Protein:</strong> 0.8-1.2g per kg body weight to preserve muscle during weight loss</li>
                <li><strong>Fiber:</strong> 25-35g daily increases satiety and improves gut health</li>
                <li><strong>Water:</strong> Half your body weight in ounces daily minimum</li>
                <li><strong>Limit ultra-processed foods:</strong> Account for 60% of US calories</li>
                <li><strong>Sugar-sweetened beverages:</strong> Eliminate or minimize (major calorie source)</li>
                <li><strong>Meal timing:</strong> Regular patterns better than grazing</li>
                <li><strong>Don't skip meals:</strong> Leads to overeating later</li>
              </ul>
            </div>
          </section>

          <section id="physical-activity" className={styles.section}>
            <h2 className={styles.sectionTitle}>Exercise & Physical Activity for Weight Management</h2>
            <p className={styles.sectionText}>
              While diet drives weight loss, exercise is crucial for maintaining loss, preserving muscle mass, and improving metabolic health. The combination of aerobic and resistance training provides optimal benefits for body composition and overall health.
            </p>

            <h3 className={styles.subsectionTitle}>Exercise Guidelines for Weight Loss</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Aerobic Exercise</h3>
                <ul>
                  <li><strong>For health:</strong> 150 min/week moderate intensity</li>
                  <li><strong>For weight loss:</strong> 250-300 min/week</li>
                  <li><strong>For maintenance:</strong> 200-300 min/week</li>
                  <li>Examples: brisk walking, cycling, swimming</li>
                  <li>Can break into 10-minute sessions</li>
                  <li>Gradually increase duration and intensity</li>
                  <li>Burns 200-600 calories per hour</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Resistance Training</h3>
                <ul>
                  <li>2-3 days per week, all major muscle groups</li>
                  <li>Preserves lean mass during weight loss</li>
                  <li>Increases resting metabolic rate</li>
                  <li>Improves insulin sensitivity</li>
                  <li>8-12 repetitions, 2-3 sets per exercise</li>
                  <li>Progressive overload for continued benefits</li>
                  <li>Bodyweight, bands, or weights</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Starting & Progressing Safely</h3>
            <div className={styles.keyPoints}>
              <h3>Exercise Progression Principles</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Start where you are:</strong> Even 5 minutes daily helps</li>
                <li><strong>Progress gradually:</strong> Increase by 10% weekly</li>
                <li><strong>Listen to your body:</strong> Rest days are important</li>
                <li><strong>Find enjoyable activities:</strong> Adherence is key</li>
                <li><strong>NEAT matters:</strong> Non-exercise activity (stairs, parking farther)</li>
                <li><strong>Break up sitting:</strong> Stand/move every hour</li>
                <li><strong>Track progress:</strong> Steps, minutes, or fitness improvements</li>
              </ul>
            </div>

            <div className={styles.warningBox}>
              <h4>Medical Clearance</h4>
              <p>
                Consult your provider before starting exercise if you have heart disease, diabetes, joint problems, are over 40 and sedentary, or have BMI greater than 40. Start with supervised programs or physical therapy if needed.
              </p>
            </div>
          </section>

          <section id="behavioral" className={styles.section}>
            <h2 className={styles.sectionTitle}>Behavioral & Psychological Approaches</h2>
            <p className={styles.sectionText}>
              Behavioral interventions are the foundation of weight management, addressing the habits, thoughts, and environmental factors that influence eating and activity. Intensive behavioral therapy (IBT) is covered by Medicare and most insurance plans.
            </p>

            <h3 className={styles.subsectionTitle}>Core Behavioral Strategies</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Self-Monitoring</h3>
                <ul>
                  <li>Daily weight or weekly at same time</li>
                  <li>Food diary or tracking app</li>
                  <li>Activity and step tracking</li>
                  <li>Mood and hunger patterns</li>
                  <li>Sleep quality and duration</li>
                  <li>Identify triggers and patterns</li>
                  <li>Regular review and adjustment</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Stimulus Control</h3>
                <ul>
                  <li>Remove tempting foods from sight</li>
                  <li>Pre-portion healthy snacks</li>
                  <li>Keep fruits/vegetables visible</li>
                  <li>Designate eating areas</li>
                  <li>Use smaller dishes and utensils</li>
                  <li>Plan for high-risk situations</li>
                  <li>Create activity-friendly environment</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Psychological Considerations</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Emotional Eating</h3>
                <ul>
                  <li>Identify triggers (stress, boredom, loneliness)</li>
                  <li>Develop non-food coping strategies</li>
                  <li>Practice urge surfing techniques</li>
                  <li>Address underlying mental health</li>
                  <li>Consider therapy or support groups</li>
                  <li>Mindfulness and meditation help</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Cognitive Restructuring</h3>
                <ul>
                  <li>Challenge all-or-nothing thinking</li>
                  <li>Reframe setbacks as learning</li>
                  <li>Focus on process not perfection</li>
                  <li>Celebrate non-scale victories</li>
                  <li>Practice self-compassion</li>
                  <li>Set realistic expectations</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>Intensive Behavioral Therapy (IBT) Components</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Frequency:</strong> Weekly for first month, biweekly months 2-6</li>
                <li><strong>Duration:</strong> Minimum 6 months, ideally 12+ months</li>
                <li><strong>Format:</strong> Individual or group (groups often more effective)</li>
                <li><strong>Contact hours:</strong> ≥14 sessions in 6 months for insurance coverage</li>
                <li><strong>Provider:</strong> RD, psychologist, or trained healthcare professional</li>
                <li><strong>Expected loss:</strong> 5-10% body weight over 6 months</li>
                <li><strong>Maintenance:</strong> Monthly contact improves long-term success</li>
              </ul>
            </div>
          </section>

          <section id="medications" className={styles.section}>
            <h2 className={styles.sectionTitle}>Medical Interventions: Medications & Surgery</h2>
            <p className={styles.sectionText}>
              The landscape of obesity treatment has transformed with new GLP-1 medications showing unprecedented effectiveness. The 2025 guidelines recommend considering medical therapy for BMI ≥30 or ≥27 with weight-related conditions when lifestyle interventions alone are insufficient.
            </p>

            <h3 className={styles.subsectionTitle}>FDA-Approved Weight Loss Medications</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>GLP-1/GIP Agonists</h3>
                <ul>
                  <li><strong>Semaglutide (Wegovy):</strong> 15-17% weight loss</li>
                  <li><strong>Tirzepatide (Zepbound):</strong> 21% weight loss</li>
                  <li><strong>Liraglutide (Saxenda):</strong> 8-10% weight loss</li>
                  <li>Weekly or daily injections</li>
                  <li>Work by reducing appetite, slowing gastric emptying</li>
                  <li>Also improve blood sugar, blood pressure</li>
                  <li>Side effects: nausea, constipation (usually improve)</li>
                  <li>Cost: $1,000-1,500/month without insurance</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Other Medications</h3>
                <ul>
                  <li><strong>Phentermine-topiramate:</strong> 8-10% loss</li>
                  <li><strong>Naltrexone-bupropion:</strong> 5-9% loss</li>
                  <li><strong>Orlistat:</strong> 3-5% loss (OTC available)</li>
                  <li><strong>Phentermine alone:</strong> Short-term use only</li>
                  <li>Each has specific contraindications</li>
                  <li>Require lifestyle modification for best results</li>
                  <li>Weight regain common if stopped</li>
                </ul>
              </div>
            </div>

            <div className={styles.warningBox}>
              <h4>2025 Medication Updates</h4>
              <p>
                Over 2% of US adults used GLP-1 medications in 2024. Retatrutide (triple agonist) showing 24% weight loss in trials. Oral GLP-1 formulations in development. Insurance coverage expanding but remains variable. Supply shortages improving but persist for some medications.
              </p>
            </div>

            <h3 className={styles.subsectionTitle}>Bariatric Surgery</h3>
            <div className={styles.infoCard}>
              <h3>Surgical Options & Outcomes</h3>
              <ul>
                <li><strong>Eligibility:</strong> BMI ≥40 or ≥35 with comorbidities</li>
                <li><strong>Sleeve gastrectomy:</strong> 25-30% total weight loss, most common</li>
                <li><strong>Gastric bypass:</strong> 30-35% loss, more complex</li>
                <li><strong>Adjustable band:</strong> 15-20% loss, less common now</li>
                <li><strong>Benefits:</strong> Diabetes remission 60-80%, reduced mortality</li>
                <li><strong>Risks:</strong> 1-3% major complications, nutritional deficiencies</li>
                <li><strong>Requirements:</strong> Psychological evaluation, nutrition counseling</li>
                <li><strong>Long-term:</strong> Lifelong vitamin supplementation, follow-up</li>
              </ul>
            </div>
          </section>

          <section id="childhood" className={styles.section}>
            <h2 className={styles.sectionTitle}>Pediatric Weight Management</h2>
            <p className={styles.sectionText}>
              Childhood obesity affects 1 in 5 US children, with rates continuing to rise. The 2023 AAP guidelines emphasize early, intensive intervention with family-based approaches. Unlike adults, children's treatment focuses on slowing weight gain rather than weight loss to allow growth to improve BMI percentile.
            </p>

            <h3 className={styles.subsectionTitle}>Pediatric Assessment</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>BMI Percentiles (Ages 2-19)</h3>
                <ul>
                  <li><strong>Underweight:</strong> Below 5th percentile</li>
                  <li><strong>Healthy weight:</strong> 5th-84th percentile</li>
                  <li><strong>Overweight:</strong> 85th-94th percentile</li>
                  <li><strong>Obesity:</strong> ≥95th percentile</li>
                  <li><strong>Severe obesity:</strong> ≥120% of 95th percentile</li>
                  <li>Use CDC growth charts for assessment</li>
                  <li>Track trajectory over time</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Risk Factors</h3>
                <ul>
                  <li>Parental obesity (strongest predictor)</li>
                  <li>Excessive screen time (more than 2 hours/day)</li>
                  <li>Sugar-sweetened beverages</li>
                  <li>Inadequate sleep (less than 9-12 hours)</li>
                  <li>Limited physical activity</li>
                  <li>Food insecurity paradoxically increases risk</li>
                  <li>Adverse childhood experiences (ACEs)</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Family-Based Interventions</h3>
            <div className={styles.keyPoints}>
              <h3>Evidence-Based Pediatric Strategies</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Whole family approach:</strong> Parents as role models and agents of change</li>
                <li><strong>5-2-1-0 guidelines:</strong> 5 fruits/vegetables, ≤2 hours screen, 1 hour activity, 0 sugary drinks</li>
                <li><strong>Structured meals:</strong> Family meals 5+ times weekly reduces obesity risk 25%</li>
                <li><strong>No food restrictions:</strong> Focus on adding healthy foods vs eliminating</li>
                <li><strong>Positive reinforcement:</strong> Praise efforts not weight changes</li>
                <li><strong>Intensive programs:</strong> ≥26 contact hours over 3-12 months most effective</li>
                <li><strong>Medications:</strong> Consider for age 12+ if lifestyle insufficient</li>
              </ul>
            </div>

            <div className={styles.warningBox}>
              <h4>Avoiding Harm</h4>
              <p>
                Never put children on restrictive diets. Avoid weight-focused language that can trigger eating disorders. Focus on health behaviors not appearance. Address weight bias and bullying. Ensure adequate nutrition for growth and development.
              </p>
            </div>
          </section>

          <section id="maintenance" className={styles.section}>
            <h2 className={styles.sectionTitle}>Long-Term Weight Maintenance</h2>
            <p className={styles.sectionText}>
              Maintaining weight loss is often harder than losing weight due to metabolic adaptation, hormonal changes, and environmental pressures. The National Weight Control Registry has identified key behaviors of successful maintainers who've kept off 30+ pounds for over a year.
            </p>

            <h3 className={styles.subsectionTitle}>Maintenance Strategies</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Successful Maintainer Habits</h3>
                <ul>
                  <li>78% eat breakfast daily</li>
                  <li>75% weigh themselves weekly</li>
                  <li>62% watch less than 10 hours TV weekly</li>
                  <li>90% exercise average 1 hour daily</li>
                  <li>Track food intake regularly</li>
                  <li>Maintain consistent eating patterns</li>
                  <li>Plan for and manage lapses</li>
                  <li>Have strong support systems</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Metabolic Adaptation</h3>
                <ul>
                  <li>Metabolism slows 15-30% beyond predicted</li>
                  <li>Hunger hormones increase, satiety decreases</li>
                  <li>Body becomes more efficient at storing fat</li>
                  <li>Requires 80-100 fewer calories per 10% lost</li>
                  <li>Effects can persist for years</li>
                  <li>Resistance training helps preserve metabolism</li>
                  <li>Adequate protein crucial (1-1.2g/kg)</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>Preventing Weight Regain</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Transition gradually:</strong> Don't stop behaviors that led to loss</li>
                <li><strong>Set maintenance range:</strong> 3-5 pound fluctuation is normal</li>
                <li><strong>Continue monitoring:</strong> Regular weighing catches regain early</li>
                <li><strong>Stay active:</strong> 200-300 minutes weekly for maintenance</li>
                <li><strong>Address emotional eating:</strong> Ongoing challenge for many</li>
                <li><strong>Plan for high-risk times:</strong> Holidays, stress, life changes</li>
                <li><strong>Seek support:</strong> Groups, counseling, or coaching help long-term</li>
              </ul>
            </div>
          </section>

          <section id="faq" className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>What's the best diet for weight loss?</h3>
                <p>
                  The best diet is one you can follow long-term. Research shows similar weight loss across different approaches when calories are controlled. Mediterranean and DASH patterns have the most health benefits and sustainability. Focus on whole foods, portion control, and creating a moderate calorie deficit.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Should I try the new GLP-1 medications?</h3>
                <p>
                  GLP-1 agonists are appropriate for BMI ≥30 or ≥27 with weight-related conditions. They're highly effective (15-21% weight loss) but expensive ($1,000+/month), may have side effects, and require long-term use. Discuss benefits, risks, and insurance coverage with your provider.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Why do I keep regaining weight?</h3>
                <p>
                  Weight regain is common due to metabolic adaptation, where your body burns fewer calories and increases hunger after weight loss. This isn't a personal failure but biology. Long-term success requires permanent lifestyle changes, ongoing monitoring, and possibly medical support.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I be healthy at a higher weight?</h3>
                <p>
                  Yes, metabolic health is possible across a range of body sizes. Regular physical activity, balanced nutrition, stress management, and good sleep can improve health markers regardless of weight. Focus on healthy behaviors rather than just the number on the scale.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>How much exercise do I really need?</h3>
                <p>
                  For health: 150 minutes moderate or 75 minutes vigorous weekly. For weight loss: 250-300 minutes weekly. For maintenance: 200-300 minutes weekly. Any movement is better than none - start where you are and gradually increase.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>What about weight loss supplements?</h3>
                <p>
                  Most over-the-counter supplements lack evidence for significant weight loss and aren't regulated by FDA. Some can be dangerous or interact with medications. Focus on proven strategies: balanced diet, physical activity, behavior changes, and FDA-approved medications if needed.
                </p>
              </div>
            </div>
          </section>

          <section id="resources" className={styles.resourcesSection}>
            <h2 className={styles.sectionTitle}>Additional Resources</h2>
            <div className={styles.resourcesGrid}>
              <div className={styles.resourceCard}>
                <h4>Professional Guidelines</h4>
                <ul className={styles.resourceLinks}>
                  <li><a href="https://www.cdc.gov/healthyweight" target="_blank" rel="noopener">CDC Healthy Weight Resources</a></li>
                  <li><a href="https://www.nhlbi.nih.gov/health/educational/lose_wt" target="_blank" rel="noopener">NIH Weight Management</a></li>
                  <li><a href="https://obesitymedicine.org" target="_blank" rel="noopener">Obesity Medicine Association</a></li>
                  <li><a href="https://asmbs.org" target="_blank" rel="noopener">Bariatric Surgery Information</a></li>
                </ul>
              </div>
              <div className={styles.resourceCard}>
                <h4>Support & Tools</h4>
                <ul className={styles.resourceLinks}>
                  <li><a href="https://www.nwcr.ws" target="_blank" rel="noopener">National Weight Control Registry</a></li>
                  <li><a href="https://www.eatright.org" target="_blank" rel="noopener">Academy of Nutrition and Dietetics</a></li>
                  <li><a href="https://www.hsph.harvard.edu/nutritionsource" target="_blank" rel="noopener">Harvard Nutrition Source</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className={styles.relatedLinks}>
            <h3 className={styles.relatedLinksTitle}>Related Health Topics</h3>
            <div className={styles.relatedGrid}>
              <Link href="/learn/chronic-disease" className={styles.relatedCard}>
                <h4>Chronic Disease</h4>
                <p>Managing weight-related conditions</p>
              </Link>
              <Link href="/learn/preventive-care" className={styles.relatedCard}>
                <h4>Preventive Care</h4>
                <p>Screening and prevention</p>
              </Link>
              <Link href="/learn/mental-health" className={styles.relatedCard}>
                <h4>Mental Health</h4>
                <p>Emotional aspects of weight</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}