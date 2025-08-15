'use client'

import styles from '../learn-article.module.css'
import Link from 'next/link'
import Header from '../../../components/header'
import Footer from '../../../components/footer/footer'

export default function PediatricCarePage() {
  return (
    <>
      <Header />
      <div className={styles.articlePage}>
        <div className={styles.articleContainer}>
          {/* Header */}
          <header className={styles.articleHeader}>
            <nav className={styles.breadcrumb}>
              <Link href="/">Home</Link> / <Link href="/learn">Health Education</Link> / Pediatric Care
            </nav>
            <h1 className={styles.articleTitle}>Pediatric Care: Nurturing Healthy Children from Birth to Adulthood</h1>
            <div className={styles.articleMeta}>
              <span>Last Updated: January 2025</span>
              <span>Reviewed by: Dr. Tess Garcia, MD</span>
              <span>Reading Time: 18 minutes</span>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className={styles.tableOfContents}>
            <h2 className={styles.tocTitle}>On This Page</h2>
            <ul className={styles.tocList}>
              <li><a href="#overview">Understanding Pediatric Care</a></li>
              <li><a href="#well-child">Well-Child Visits Schedule</a></li>
              <li><a href="#immunizations">2025 Vaccination Guidelines</a></li>
              <li><a href="#milestones">Developmental Milestones</a></li>
              <li><a href="#growth">Growth & Nutrition</a></li>
              <li><a href="#obesity">Childhood Obesity Prevention</a></li>
              <li><a href="#common-conditions">Common Childhood Conditions</a></li>
              <li><a href="#mental-health">Child & Adolescent Mental Health</a></li>
              <li><a href="#safety">Injury Prevention & Safety</a></li>
              <li><a href="#adolescent">Adolescent Health</a></li>
              <li><a href="#faq">Frequently Asked Questions</a></li>
              <li><a href="#resources">Additional Resources</a></li>
            </ul>
          </nav>

          {/* Main Content */}
          <section id="overview" className={styles.section}>
            <h2 className={styles.sectionTitle}>Understanding Pediatric Care</h2>
            <p className={styles.leadText}>
              Pediatric care encompasses comprehensive healthcare for infants, children, and adolescents from birth through age 21. This specialized field addresses the unique physical, emotional, and developmental needs of growing children. With childhood obesity affecting 14.4 million US children and projected to reach 254 million globally by 2030, along with evolving vaccination schedules and increasing mental health concerns, pediatric care has never been more critical for establishing lifelong health foundations.
            </p>
            
            <div className={styles.keyPoints}>
              <h3>Core Components of Pediatric Care</h3>
              <ul className={styles.keyPointsList}>
                <li>Preventive care through regular well-child visits and immunizations</li>
                <li>Growth and developmental monitoring with early intervention when needed</li>
                <li>Nutrition guidance and obesity prevention strategies</li>
                <li>Acute illness management and chronic disease care</li>
                <li>Mental health screening and behavioral support</li>
                <li>Safety counseling and injury prevention education</li>
                <li>Family-centered care involving parents and caregivers</li>
                <li>Transition planning to adult healthcare</li>
              </ul>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <h4>14.4M</h4>
                <p>US children with obesity</p>
              </div>
              <div className={styles.statCard}>
                <h4>95%</h4>
                <p>Vaccine coverage goal</p>
              </div>
              <div className={styles.statCard}>
                <h4>1 in 6</h4>
                <p>Children with developmental disability</p>
              </div>
            </div>
          </section>

          <section id="well-child" className={styles.section}>
            <h2 className={styles.sectionTitle}>Well-Child Visits Schedule</h2>
            <p className={styles.sectionText}>
              Well-child visits are essential preventive care appointments that monitor growth, development, and overall health. The American Academy of Pediatrics (AAP) Bright Futures guidelines recommend specific visit schedules to ensure optimal child health outcomes.
            </p>

            <h3 className={styles.subsectionTitle}>Recommended Visit Schedule</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>First Year (7 visits)</h3>
                <ul>
                  <li><strong>3-5 days:</strong> Newborn check after hospital discharge</li>
                  <li><strong>1 month:</strong> Growth, feeding, jaundice assessment</li>
                  <li><strong>2 months:</strong> First major vaccine series</li>
                  <li><strong>4 months:</strong> Development check, vaccines</li>
                  <li><strong>6 months:</strong> Solid food introduction, vaccines</li>
                  <li><strong>9 months:</strong> Developmental screening</li>
                  <li><strong>12 months:</strong> Milestone assessment, vaccines</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Toddler Years (5 visits)</h3>
                <ul>
                  <li><strong>15 months:</strong> Language development, vaccines</li>
                  <li><strong>18 months:</strong> Autism screening, development</li>
                  <li><strong>24 months:</strong> Two-year assessment, autism screen</li>
                  <li><strong>30 months:</strong> Behavioral assessment</li>
                  <li><strong>3 years:</strong> School readiness evaluation</li>
                </ul>
              </div>
            </div>

            <div className={styles.infoCard}>
              <h3>School Age & Adolescence (Annual)</h3>
              <ul>
                <li><strong>4-5 years:</strong> Kindergarten readiness, vision/hearing, vaccines</li>
                <li><strong>6-10 years:</strong> Annual checks, growth monitoring, school performance</li>
                <li><strong>11-14 years:</strong> Puberty discussion, HPV vaccine, mental health screening</li>
                <li><strong>15-17 years:</strong> Risk assessment, driving safety, college preparation</li>
                <li><strong>18-21 years:</strong> Transition to adult care, independence skills</li>
              </ul>
            </div>

            <div className={styles.keyPoints}>
              <h3>What Happens During Well-Child Visits</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Physical exam:</strong> Complete head-to-toe assessment</li>
                <li><strong>Growth measurements:</strong> Height, weight, head circumference (infants), BMI</li>
                <li><strong>Vital signs:</strong> Blood pressure (age 3+), heart rate, temperature</li>
                <li><strong>Development screening:</strong> Milestones, autism screening, school readiness</li>
                <li><strong>Behavioral assessment:</strong> ADHD screening, depression screening (12+)</li>
                <li><strong>Anticipatory guidance:</strong> Safety, nutrition, sleep, behavior</li>
                <li><strong>Immunizations:</strong> Per CDC schedule</li>
                <li><strong>Laboratory tests:</strong> Lead, anemia, cholesterol as indicated</li>
              </ul>
            </div>
          </section>

          <section id="immunizations" className={styles.section}>
            <h2 className={styles.sectionTitle}>2025 CDC Vaccination Guidelines</h2>
            <p className={styles.sectionText}>
              Immunizations are one of the greatest public health achievements, preventing millions of deaths annually. The CDC's 2025 immunization schedule, updated August 7, 2025, provides comprehensive guidance for protecting children against vaccine-preventable diseases.
            </p>

            <div className={styles.warningBox}>
              <h4>Important Update</h4>
              <p>
                The 2025 CDC schedule includes updates to RSV prevention recommendations and revised catch-up schedules. Vaccines can be given even if a child has mild illness. Series never need restarting regardless of time between doses.
              </p>
            </div>

            <h3 className={styles.subsectionTitle}>Birth to 6 Years Vaccines</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Essential Early Vaccines</h3>
                <ul>
                  <li><strong>Hepatitis B:</strong> Birth, 1-2 months, 6-18 months</li>
                  <li><strong>Rotavirus:</strong> 2, 4, 6 months (oral vaccine)</li>
                  <li><strong>DTaP:</strong> 2, 4, 6, 15-18 months, 4-6 years</li>
                  <li><strong>Hib:</strong> 2, 4, 6, 12-15 months</li>
                  <li><strong>PCV15:</strong> 2, 4, 6, 12-15 months</li>
                  <li><strong>IPV (Polio):</strong> 2, 4, 6-18 months, 4-6 years</li>
                  <li><strong>Influenza:</strong> Annual starting at 6 months</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>12-23 Months Vaccines</h3>
                <ul>
                  <li><strong>MMR:</strong> 12-15 months, 4-6 years</li>
                  <li><strong>Varicella:</strong> 12-15 months, 4-6 years</li>
                  <li><strong>Hepatitis A:</strong> 12-23 months (2 doses)</li>
                  <li><strong>COVID-19:</strong> 6 months+ (updated formulation)</li>
                  <li><strong>RSV:</strong> Seasonal for high-risk infants</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>School Age & Adolescent Vaccines</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>7-10 Years</h3>
                <ul>
                  <li>Annual influenza vaccine</li>
                  <li>COVID-19 boosters as recommended</li>
                  <li>Catch-up vaccines if behind schedule</li>
                  <li>Travel vaccines as needed</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>11-18 Years</h3>
                <ul>
                  <li><strong>Tdap:</strong> Age 11-12</li>
                  <li><strong>HPV:</strong> Age 11-12 (2-3 doses)</li>
                  <li><strong>Meningococcal:</strong> Age 11-12, booster at 16</li>
                  <li><strong>MenB:</strong> Age 16-18 (preferred)</li>
                  <li>Annual flu and COVID updates</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>Catch-Up Vaccination Principles</h3>
              <ul className={styles.keyPointsList}>
                <li>Never restart a vaccine series - continue where left off</li>
                <li>Use minimum intervals between doses for catch-up</li>
                <li>Live vaccines can be given together or 4 weeks apart</li>
                <li>Most vaccines can be given simultaneously at different sites</li>
                <li>Document all vaccines in state immunization registry</li>
                <li>Provide Vaccine Information Statements (VIS) for each vaccine</li>
                <li>Screen for contraindications and precautions</li>
              </ul>
            </div>
          </section>

          <section id="milestones" className={styles.section}>
            <h2 className={styles.sectionTitle}>Developmental Milestones</h2>
            <p className={styles.sectionText}>
              Developmental milestones are skills most children achieve by certain ages. The CDC updated milestones in 2022 and added checklists for 15 and 30 months. Early identification of delays enables timely intervention, significantly improving outcomes.
            </p>

            <h3 className={styles.subsectionTitle}>Infant Milestones (0-12 months)</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>2 Months</h3>
                <ul>
                  <li><strong>Social:</strong> Smiles at people, calms when spoken to</li>
                  <li><strong>Language:</strong> Makes sounds other than crying</li>
                  <li><strong>Cognitive:</strong> Watches you move, looks at toys</li>
                  <li><strong>Movement:</strong> Holds head up, moves arms and legs</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>6 Months</h3>
                <ul>
                  <li><strong>Social:</strong> Knows familiar people, likes to look in mirror</li>
                  <li><strong>Language:</strong> Takes turns making sounds, blows raspberries</li>
                  <li><strong>Cognitive:</strong> Puts things in mouth, reaches for toys</li>
                  <li><strong>Movement:</strong> Rolls both ways, sits without support</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>9 Months</h3>
                <ul>
                  <li><strong>Social:</strong> Is shy with strangers, has favorite toys</li>
                  <li><strong>Language:</strong> Makes different sounds like "mamamama"</li>
                  <li><strong>Cognitive:</strong> Looks for things that fall, bangs things together</li>
                  <li><strong>Movement:</strong> Gets to sitting position, crawls</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>12 Months</h3>
                <ul>
                  <li><strong>Social:</strong> Plays games like pat-a-cake</li>
                  <li><strong>Language:</strong> Says "mama" and "dada", waves bye-bye</li>
                  <li><strong>Cognitive:</strong> Puts things in containers, looks for hidden things</li>
                  <li><strong>Movement:</strong> Pulls to stand, may take steps</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Toddler & Preschool Milestones</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>18 Months</h3>
                <ul>
                  <li>Says several single words</li>
                  <li>Points to show what they want</li>
                  <li>Walks alone, may run</li>
                  <li>Shows affection to familiar people</li>
                  <li>Plays simple pretend</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>2 Years</h3>
                <ul>
                  <li>Says 2-4 word sentences</li>
                  <li>Follows simple instructions</li>
                  <li>Kicks ball, runs well</li>
                  <li>Shows independence</li>
                  <li>Sorts shapes and colors</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>3 Years</h3>
                <ul>
                  <li>Speaks in sentences</li>
                  <li>Plays make-believe</li>
                  <li>Climbs well, pedals tricycle</li>
                  <li>Shows affection for friends</li>
                  <li>Does puzzles with 3-4 pieces</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>4-5 Years</h3>
                <ul>
                  <li>Tells stories, speaks clearly</li>
                  <li>Counts, knows colors</li>
                  <li>Hops, stands on one foot</li>
                  <li>Plays cooperatively</li>
                  <li>Draws person with 2-4 body parts</li>
                </ul>
              </div>
            </div>

            <div className={styles.warningBox}>
              <h4>When to Be Concerned</h4>
              <p>
                Talk to your pediatrician if your child: loses skills they once had, doesn't meet milestones, has unusual movements or behaviors, doesn't make eye contact, or doesn't respond to their name by 12 months. Early intervention services are free and effective.
              </p>
            </div>
          </section>

          <section id="growth" className={styles.section}>
            <h2 className={styles.sectionTitle}>Growth & Nutrition</h2>
            <p className={styles.sectionText}>
              Proper nutrition during childhood establishes lifelong healthy eating patterns and supports optimal growth and development. Nutritional needs vary significantly across pediatric age groups.
            </p>

            <h3 className={styles.subsectionTitle}>Infant Nutrition (0-12 months)</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Breastfeeding & Formula</h3>
                <ul>
                  <li>Exclusive breastfeeding recommended for 6 months</li>
                  <li>Continue breastfeeding with solids to 12+ months</li>
                  <li>Formula-fed infants need iron-fortified formula</li>
                  <li>No cow's milk before 12 months</li>
                  <li>Vitamin D supplement for breastfed infants</li>
                  <li>No honey before 12 months (botulism risk)</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Starting Solids (6 months)</h3>
                <ul>
                  <li>Single-grain cereals fortified with iron</li>
                  <li>Pureed vegetables and fruits</li>
                  <li>Introduce allergenic foods early (peanuts, eggs)</li>
                  <li>Progress textures as tolerated</li>
                  <li>No added salt or sugar</li>
                  <li>Offer water in cup with meals</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Toddler & Preschool Nutrition</h3>
            <div className={styles.keyPoints}>
              <h3>Healthy Eating Guidelines Ages 1-5</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Milk:</strong> Whole milk 12-24 months, then low-fat; 16-24 oz daily max</li>
                <li><strong>Fruits/Vegetables:</strong> 5 servings daily, variety of colors</li>
                <li><strong>Grains:</strong> Half should be whole grains</li>
                <li><strong>Protein:</strong> 2-3 servings; include fish, beans, nuts</li>
                <li><strong>Limit juice:</strong> 4 oz daily maximum, no juice before 12 months</li>
                <li><strong>Avoid:</strong> Sugar-sweetened beverages, excessive snacks</li>
                <li><strong>Family meals:</strong> Eat together, no screens during meals</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>School-Age & Adolescent Nutrition</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Daily Requirements</h3>
                <ul>
                  <li><strong>Calories:</strong> 1,600-3,200 depending on age, sex, activity</li>
                  <li><strong>Calcium:</strong> 1,300mg for bone development</li>
                  <li><strong>Iron:</strong> 8-15mg, higher for menstruating teens</li>
                  <li><strong>Fiber:</strong> Age + 5 grams daily</li>
                  <li><strong>Water:</strong> 6-8 cups daily, more with activity</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Common Nutritional Issues</h3>
                <ul>
                  <li>Skipping breakfast (affects concentration)</li>
                  <li>Excessive fast food consumption</li>
                  <li>Energy drinks and excessive caffeine</li>
                  <li>Inadequate fruits and vegetables</li>
                  <li>Disordered eating patterns</li>
                  <li>Sports nutrition misinformation</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="obesity" className={styles.section}>
            <h2 className={styles.sectionTitle}>Childhood Obesity: A Growing Crisis</h2>
            <p className={styles.sectionText}>
              Childhood obesity has reached epidemic proportions, affecting 14.4 million US children with rates projected to nearly double globally by 2030. The World Obesity Federation predicts 254 million children will have obesity by 2030, with healthcare costs reaching $45 billion in the US alone.
            </p>

            <div className={styles.warningBox}>
              <h4>Pandemic Impact</h4>
              <p>
                COVID-19 significantly worsened childhood obesity rates. Children gained weight at accelerated rates during lockdowns due to disrupted routines, increased screen time, reduced physical activity, and stress eating. These effects persist in 2025.
              </p>
            </div>

            <h3 className={styles.subsectionTitle}>Defining & Measuring Obesity</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>BMI Percentiles for Children</h3>
                <ul>
                  <li><strong>Underweight:</strong> Less than 5th percentile</li>
                  <li><strong>Healthy weight:</strong> 5th to 84th percentile</li>
                  <li><strong>Overweight:</strong> 85th to 94th percentile</li>
                  <li><strong>Obesity:</strong> 95th percentile or greater</li>
                  <li><strong>Severe obesity:</strong> 120% of 95th percentile</li>
                  <li>BMI varies with age and sex in children</li>
                  <li>Use CDC growth charts for assessment</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Contributing Factors</h3>
                <ul>
                  <li>Excessive screen time (more than 2 hours daily)</li>
                  <li>Sugar-sweetened beverages consumption</li>
                  <li>Energy-dense, nutrient-poor foods</li>
                  <li>Decreased physical activity (declines at ages 6 and 13)</li>
                  <li>Sleep deprivation (less than recommended hours)</li>
                  <li>Family habits and genetics</li>
                  <li>Food marketing to children</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Health Consequences</h3>
            <div className={styles.keyPoints}>
              <h3>Immediate & Long-Term Effects</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Type 2 diabetes:</strong> Increasing in children, previously adult-only disease</li>
                <li><strong>Cardiovascular:</strong> High blood pressure, high cholesterol</li>
                <li><strong>Respiratory:</strong> Sleep apnea, asthma</li>
                <li><strong>Liver disease:</strong> Non-alcoholic fatty liver disease</li>
                <li><strong>Orthopedic:</strong> Joint problems, fractures</li>
                <li><strong>Psychological:</strong> Depression, low self-esteem, bullying</li>
                <li><strong>Future risk:</strong> 80% of obese adolescents become obese adults</li>
              </ul>
            </div>

            <h3 className={styles.subsectionTitle}>Prevention & Treatment</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>5-2-1-0 Guidelines</h3>
                <ul>
                  <li><strong>5:</strong> Servings of fruits and vegetables daily</li>
                  <li><strong>2:</strong> Hours or less of screen time</li>
                  <li><strong>1:</strong> Hour of physical activity</li>
                  <li><strong>0:</strong> Sugar-sweetened beverages</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Family-Based Interventions</h3>
                <ul>
                  <li>Parents as role models</li>
                  <li>Family meals 5+ times weekly</li>
                  <li>No TV in bedrooms</li>
                  <li>Active family activities</li>
                  <li>Positive reinforcement</li>
                  <li>Professional support when needed</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="common-conditions" className={styles.section}>
            <h2 className={styles.sectionTitle}>Common Childhood Conditions</h2>
            <p className={styles.sectionText}>
              Understanding common pediatric conditions helps parents recognize when to seek care and how to manage minor illnesses at home. Most childhood illnesses are self-limiting but require appropriate monitoring.
            </p>

            <h3 className={styles.subsectionTitle}>Respiratory Conditions</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Common Cold & URI</h3>
                <ul>
                  <li>Children average 6-8 colds per year</li>
                  <li>Symptoms: runny nose, cough, mild fever</li>
                  <li>Treatment: rest, fluids, humidifier</li>
                  <li>Antibiotics not effective for viruses</li>
                  <li>See doctor if: high fever, difficulty breathing, dehydration</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Asthma</h3>
                <ul>
                  <li>Affects 1 in 12 children</li>
                  <li>Symptoms: wheezing, coughing, chest tightness</li>
                  <li>Triggers: allergens, exercise, infections</li>
                  <li>Management: controller and rescue medications</li>
                  <li>Action plan essential for all patients</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Gastrointestinal Issues</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Gastroenteritis</h3>
                <ul>
                  <li>Common cause of vomiting/diarrhea</li>
                  <li>Usually viral (rotavirus, norovirus)</li>
                  <li>Focus on hydration</li>
                  <li>Oral rehydration solutions preferred</li>
                  <li>BRAT diet outdated - regular diet when tolerated</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Constipation</h3>
                <ul>
                  <li>Very common in children</li>
                  <li>Often behavioral withholding</li>
                  <li>Increase fiber, fluids, activity</li>
                  <li>May need stool softeners</li>
                  <li>Address toilet training issues</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Skin Conditions</h3>
            <div className={styles.keyPoints}>
              <h3>Common Pediatric Skin Issues</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Eczema:</strong> 10-20% of children; moisturize, avoid triggers, topical steroids</li>
                <li><strong>Diaper rash:</strong> Frequent changes, barrier creams, air drying</li>
                <li><strong>Impetigo:</strong> Highly contagious; requires antibiotics</li>
                <li><strong>Molluscum:</strong> Viral bumps; usually self-resolves</li>
                <li><strong>Fifth disease:</strong> "Slapped cheek" rash; self-limiting</li>
                <li><strong>Hand-foot-mouth:</strong> Viral; supportive care only</li>
              </ul>
            </div>
          </section>

          <section id="mental-health" className={styles.section}>
            <h2 className={styles.sectionTitle}>Child & Adolescent Mental Health</h2>
            <p className={styles.sectionText}>
              Mental health conditions affect 1 in 6 children aged 2-8 years. Early identification and intervention are crucial for preventing long-term consequences. The pandemic significantly increased anxiety and depression rates in youth.
            </p>

            <h3 className={styles.subsectionTitle}>Common Mental Health Conditions</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>ADHD</h3>
                <ul>
                  <li>Affects 6 million US children (9.8%)</li>
                  <li>Symptoms: inattention, hyperactivity, impulsivity</li>
                  <li>Diagnosis requires symptoms in multiple settings</li>
                  <li>Treatment: behavioral therapy, medication, school support</li>
                  <li>Often coexists with learning disabilities</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Anxiety Disorders</h3>
                <ul>
                  <li>Most common mental health issue in children</li>
                  <li>Types: separation, social, generalized anxiety</li>
                  <li>Physical symptoms common (stomachaches, headaches)</li>
                  <li>CBT highly effective</li>
                  <li>May need medication for severe cases</li>
                </ul>
              </div>
            </div>

            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Depression</h3>
                <ul>
                  <li>Can occur as young as preschool age</li>
                  <li>Symptoms: irritability, withdrawal, sleep changes</li>
                  <li>Screen annually starting age 12</li>
                  <li>Therapy first-line for mild-moderate</li>
                  <li>Suicide risk assessment critical</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Autism Spectrum Disorder</h3>
                <ul>
                  <li>Affects 1 in 36 children</li>
                  <li>Screen at 18 and 24 months</li>
                  <li>Early intervention improves outcomes</li>
                  <li>Wide range of abilities and needs</li>
                  <li>Behavioral therapies cornerstone of treatment</li>
                </ul>
              </div>
            </div>

            <div className={styles.warningBox}>
              <h4>Warning Signs Requiring Immediate Help</h4>
              <p>
                Seek emergency care for: suicidal thoughts or behaviors, self-harm, aggressive behavior endangering others, psychotic symptoms (hallucinations, delusions), severe mood swings, or sudden dramatic behavior changes.
              </p>
            </div>
          </section>

          <section id="safety" className={styles.section}>
            <h2 className={styles.sectionTitle}>Injury Prevention & Safety</h2>
            <p className={styles.sectionText}>
              Injuries are the leading cause of death in children over age 1. Most injuries are predictable and preventable through proper safety measures and supervision.
            </p>

            <h3 className={styles.subsectionTitle}>Age-Specific Safety Guidelines</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Infant Safety</h3>
                <ul>
                  <li>Back to sleep, alone, in crib</li>
                  <li>No loose bedding or toys in crib</li>
                  <li>Never leave unattended on elevated surfaces</li>
                  <li>Rear-facing car seat until 2 years</li>
                  <li>Baby-proof before mobility begins</li>
                  <li>Water heater below 120°F</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Toddler Safety</h3>
                <ul>
                  <li>Gates at stairs top and bottom</li>
                  <li>Lock away medications and cleaners</li>
                  <li>Window guards and locks</li>
                  <li>Never leave alone near water</li>
                  <li>Poison control number visible</li>
                  <li>Outlet covers and cabinet locks</li>
                </ul>
              </div>
            </div>

            <div className={styles.keyPoints}>
              <h3>Universal Safety Measures</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Car seats:</strong> Use appropriate seat for age/size until 4'9" tall</li>
                <li><strong>Helmets:</strong> Required for bikes, scooters, skateboarding</li>
                <li><strong>Water safety:</strong> Swim lessons, constant supervision, life jackets</li>
                <li><strong>Fire safety:</strong> Working smoke detectors, escape plan, fire extinguisher</li>
                <li><strong>Gun safety:</strong> Store locked, unloaded, ammunition separate</li>
                <li><strong>Internet safety:</strong> Parental controls, monitor use, discuss risks</li>
                <li><strong>Sports safety:</strong> Proper equipment, conditioning, concussion awareness</li>
              </ul>
            </div>
          </section>

          <section id="adolescent" className={styles.section}>
            <h2 className={styles.sectionTitle}>Adolescent Health</h2>
            <p className={styles.sectionText}>
              Adolescence brings unique health challenges including puberty, risk-taking behaviors, and the need for increasing autonomy. Confidential care and honest communication are essential for this age group.
            </p>

            <h3 className={styles.subsectionTitle}>Puberty & Development</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>Normal Puberty Timing</h3>
                <ul>
                  <li><strong>Girls:</strong> Typically begins 8-13 years</li>
                  <li>Breast development first sign</li>
                  <li>Menarche average age 12.5</li>
                  <li><strong>Boys:</strong> Typically begins 9-14 years</li>
                  <li>Testicular enlargement first sign</li>
                  <li>Growth spurt later than girls</li>
                </ul>
              </div>
              <div className={styles.infoCard}>
                <h3>Precocious & Delayed Puberty</h3>
                <ul>
                  <li>Early: Before age 8 (girls) or 9 (boys)</li>
                  <li>Delayed: No signs by 13 (girls) or 14 (boys)</li>
                  <li>Both require evaluation</li>
                  <li>Consider bone age, hormone levels</li>
                  <li>Treatment depends on cause</li>
                </ul>
              </div>
            </div>

            <h3 className={styles.subsectionTitle}>Risk Behaviors & Prevention</h3>
            <div className={styles.keyPoints}>
              <h3>Adolescent Risk Assessment</h3>
              <ul className={styles.keyPointsList}>
                <li><strong>Substance use:</strong> Screen annually; vaping epidemic continues</li>
                <li><strong>Sexual health:</strong> Confidential STI/pregnancy prevention counseling</li>
                <li><strong>Mental health:</strong> Depression and suicide screening essential</li>
                <li><strong>Eating disorders:</strong> Screen for disordered eating patterns</li>
                <li><strong>Violence:</strong> Dating violence, bullying assessment</li>
                <li><strong>Driving safety:</strong> No texting, seat belts, passenger limits</li>
                <li><strong>Academic stress:</strong> Balance achievement with wellbeing</li>
              </ul>
            </div>
          </section>

          <section id="faq" className={styles.faqSection}>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              <div className={styles.faqItem}>
                <h3>When should I call the pediatrician vs go to the ER?</h3>
                <p>
                  Call your pediatrician for: fever in older children, mild injuries, persistent symptoms, behavioral concerns. Go to ER for: difficulty breathing, dehydration, high fever in infants under 3 months, head injuries with loss of consciousness, severe pain, or any life-threatening symptoms.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Are vaccines really safe for my child?</h3>
                <p>
                  Yes. Vaccines are among the safest medical interventions available. They undergo rigorous testing and continuous monitoring. Serious side effects are extremely rare, while vaccine-preventable diseases can be deadly. The vaccine-autism myth has been thoroughly debunked by numerous large studies.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>How much screen time is appropriate for children?</h3>
                <p>
                  AAP recommends: No screens under 18 months (except video calls), 18-24 months high-quality programming with parents, 2-5 years limit to 1 hour daily of quality content, 6+ years consistent limits ensuring adequate sleep, activity, and family time. No screens during meals or 1 hour before bed.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>When should my child see a dentist?</h3>
                <p>
                  First dental visit by age 1 or within 6 months of first tooth. Early visits establish a dental home, prevent cavities, and reduce dental anxiety. Clean teeth twice daily with fluoride toothpaste (rice grain amount under 3, pea-size after 3).
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is my child's behavior normal or concerning?</h3>
                <p>
                  Some challenging behavior is normal at each developmental stage. Concerning signs include: regression in skills, extreme tantrums past age 4, aggression causing injury, social withdrawal, sleep problems affecting function, or any sudden dramatic changes. Trust your instincts and discuss concerns with your pediatrician.
                </p>
              </div>
              <div className={styles.faqItem}>
                <h3>How can I help my overweight child without causing harm?</h3>
                <p>
                  Focus on health not weight. Make changes for the whole family. Increase activity together, offer healthy foods, limit sugary drinks, reduce screen time, ensure adequate sleep. Never shame or restrict food. Praise healthy choices. Work with your pediatrician for professional guidance.
                </p>
              </div>
            </div>
          </section>

          <section id="resources" className={styles.resourcesSection}>
            <h2 className={styles.sectionTitle}>Additional Resources</h2>
            <div className={styles.resourcesGrid}>
              <div className={styles.resourceCard}>
                <h4>Parent Resources</h4>
                <ul className={styles.resourceLinks}>
                  <li><a href="https://www.healthychildren.org" target="_blank" rel="noopener">AAP HealthyChildren.org</a></li>
                  <li><a href="https://www.cdc.gov/ncbddd/actearly" target="_blank" rel="noopener">CDC Milestone Tracker</a></li>
                  <li><a href="https://kidshealth.org" target="_blank" rel="noopener">KidsHealth from Nemours</a></li>
                  <li><a href="https://www.zerotothree.org" target="_blank" rel="noopener">Zero to Three</a></li>
                </ul>
              </div>
              <div className={styles.resourceCard}>
                <h4>Emergency Resources</h4>
                <ul className={styles.resourceLinks}>
                  <li><a href="https://www.poison.org" target="_blank" rel="noopener">Poison Control: 1-800-222-1222</a></li>
                  <li><a href="https://suicidepreventionlifeline.org" target="_blank" rel="noopener">988 Suicide & Crisis Lifeline</a></li>
                  <li><a href="https://www.childhelp.org/hotline" target="_blank" rel="noopener">Childhelp Hotline: 1-800-422-4453</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className={styles.relatedLinks}>
            <h3 className={styles.relatedLinksTitle}>Related Health Topics</h3>
            <div className={styles.relatedGrid}>
              <Link href="/learn/preventive-care" className={styles.relatedCard}>
                <h4>Preventive Care</h4>
                <p>Comprehensive prevention guidelines</p>
              </Link>
              <Link href="/learn/mental-health" className={styles.relatedCard}>
                <h4>Mental Health</h4>
                <p>Supporting emotional wellbeing</p>
              </Link>
              <Link href="/learn/weight-management" className={styles.relatedCard}>
                <h4>Weight Management</h4>
                <p>Healthy lifestyle strategies</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}