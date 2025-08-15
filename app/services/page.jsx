'use client';

import styles from './services.module.css';
import Header from '../../components/header';
import Footer from '../../components/footer/footer';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FaHeart, 
  FaUserMd, 
  FaShieldAlt, 
  FaStethoscope, 
  FaCalendarCheck, 
  FaHandsHelping,
  FaClock,
  FaPhone,
  FaArrowRight,
  FaStar,
  FaCheckCircle,
  FaClinicMedical
} from 'react-icons/fa';

const services = {
  premium: [
    {
      icon: FaHeart,
      title: "Faith & Family Medicine™",
      description: "Whole-person care honoring body, soul, and spirit",
      link: "/services/faith-family-medicine",
      color: "#e11d48",
      features: ["Spiritual integration", "Family-centered care", "Holistic approach"]
    },
    {
      icon: FaStethoscope,
      title: "CoreLift™ Program",
      description: "Revolutionary pelvic floor strengthening",
      link: "/services/corelift",
      color: "#8b5cf6",
      features: ["Non-invasive treatment", "FDA-cleared technology", "Long-lasting results"]
    },
    {
      icon: FaHandsHelping,
      title: "Nourish & Thrive™ Journey",
      description: "12-month wellness transformation",
      link: "/services/nourish-thrive-journey",
      color: "#10b981",
      features: ["Personalized nutrition", "Lifestyle coaching", "Sustainable results"]
    },
    {
      icon: FaShieldAlt,
      title: "TrueRelief™ Therapy",
      description: "Non-opioid pain management",
      link: "/services/truerelief-therapy",
      color: "#f59e0b",
      features: ["Drug-free relief", "Advanced technology", "Proven effectiveness"]
    },
    {
      icon: FaHeart,
      title: "PeaceWithin™ Life Coaching",
      description: "Trauma-informed healing",
      link: "/services/peacewithin-life-coaching",
      color: "#3b82f6",
      features: ["Emotional healing", "Personal growth", "Faith-based support"]
    }
  ],
  professional: [
    {
      icon: FaUserMd,
      title: "ClearRoad™ DOT Exams",
      description: "Commercial driver physicals",
      link: "/services/clearroad-dot-exams",
      color: "#059669",
      features: ["Same-day service", "FMCSA certified", "Fast results"]
    },
    {
      icon: FaStethoscope,
      title: "ValorView™ IME",
      description: "Independent medical exams",
      link: "/services/valorview-ime",
      color: "#7c3aed",
      features: ["Comprehensive exams", "Detailed reports", "Expert assessment"]
    },
    {
      icon: FaShieldAlt,
      title: "ValorLink™ Letters",
      description: "Veteran disability support",
      link: "/services/valorlink-letter",
      color: "#dc2626",
      features: ["VA nexus letters", "DBQ assistance", "Veteran advocacy"]
    },
    {
      icon: FaCalendarCheck,
      title: "MyClinic365™",
      description: "Workplace healthcare",
      link: "/services/myclinic365",
      color: "#2563eb",
      features: ["On-site care", "Employee wellness", "Cost savings"]
    },
    {
      icon: FaHandsHelping,
      title: "CareBridge™",
      description: "24/7 healthcare platform",
      link: "/services/carebridge",
      color: "#ec4899",
      features: ["Always available", "Virtual visits", "Comprehensive care"]
    }
  ]
};

export default function ServicesMainPage() {
  return (
    <>
      <Header />
      <main className={styles.servicesMain}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroBackground}>
            <div className={styles.heroPattern}></div>
            <div className={styles.heroGradient}></div>
          </div>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                <span className={styles.titleAccent}>Transformative</span>
                <br />Healthcare Services
              </h1>
              <p className={styles.heroSubtitle}>
                Experience healthcare that goes beyond treating symptoms. 
                Our innovative services address your complete wellness journey.
              </p>
              <div className={styles.heroActions}>
                <Link href="/contact" className={styles.primaryButton}>
                  <FaPhone /> Schedule Consultation
                </Link>
                <Link href="#services" className={styles.secondaryButton}>
                  Explore Services <FaArrowRight />
                </Link>
              </div>
            </div>
            <div className={styles.heroImage}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/services/hero-doctor.jpg"
                  alt="Dr. Garcia providing compassionate care"
                  width={600}
                  height={400}
                  className={styles.heroImg}
                  unoptimized
                />
                <div className={styles.imageAccent}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.statsSection}>
          <div className={styles.container}>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statIcon}><FaStar /></div>
                <div className={styles.statNumber}>15+</div>
                <div className={styles.statLabel}>Years of Excellence</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statIcon}><FaHeart /></div>
                <div className={styles.statNumber}>10,000+</div>
                <div className={styles.statLabel}>Lives Transformed</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statIcon}><FaCheckCircle /></div>
                <div className={styles.statNumber}>98%</div>
                <div className={styles.statLabel}>Patient Satisfaction</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statIcon}><FaClinicMedical /></div>
                <div className={styles.statNumber}>20+</div>
                <div className={styles.statLabel}>Specialized Services</div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Services Section */}
        <section id="services" className={styles.servicesSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Premium Healthcare</span>
              <h2 className={styles.sectionTitle}>Innovative Wellness Programs</h2>
              <p className={styles.sectionDescription}>
                Our signature programs combine cutting-edge technology with 
                compassionate care to deliver transformative health outcomes.
              </p>
            </div>

            <div className={styles.servicesGrid}>
              {services.premium.map((service, index) => (
                <Link href={service.link} key={index} className={styles.serviceCard}>
                  <div className={styles.cardHeader}>
                    <div 
                      className={styles.iconWrapper} 
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <service.icon 
                        className={styles.serviceIcon} 
                        style={{ color: service.color }}
                      />
                    </div>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                  </div>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <ul className={styles.featureList}>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <FaCheckCircle className={styles.featureIcon} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.cardFooter}>
                    <span className={styles.learnMore}>
                      Learn More <FaArrowRight />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Services Section */}
        <section className={`${styles.servicesSection} ${styles.altBackground}`}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Professional Services</span>
              <h2 className={styles.sectionTitle}>Specialized Medical Care</h2>
              <p className={styles.sectionDescription}>
                From workplace wellness to veteran support, our professional 
                services meet diverse healthcare needs with expertise and compassion.
              </p>
            </div>

            <div className={styles.servicesGrid}>
              {services.professional.map((service, index) => (
                <Link href={service.link} key={index} className={styles.serviceCard}>
                  <div className={styles.cardHeader}>
                    <div 
                      className={styles.iconWrapper} 
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <service.icon 
                        className={styles.serviceIcon} 
                        style={{ color: service.color }}
                      />
                    </div>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                  </div>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <ul className={styles.featureList}>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <FaCheckCircle className={styles.featureIcon} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className={styles.cardFooter}>
                    <span className={styles.learnMore}>
                      Learn More <FaArrowRight />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className={styles.whySection}>
          <div className={styles.container}>
            <div className={styles.whyContent}>
              <div className={styles.whyText}>
                <h2 className={styles.whyTitle}>Why Choose Garcia Family Medicine?</h2>
                <p className={styles.whyDescription}>
                  We're not just another medical practice. We're your partners in achieving 
                  lasting health and wellness through innovative, personalized care.
                </p>
                <div className={styles.whyFeatures}>
                  <div className={styles.whyFeature}>
                    <FaClock className={styles.whyIcon} />
                    <div>
                      <h4>Extended Appointments</h4>
                      <p>60-minute visits ensure thorough, unhurried care</p>
                    </div>
                  </div>
                  <div className={styles.whyFeature}>
                    <FaHeart className={styles.whyIcon} />
                    <div>
                      <h4>Whole-Person Approach</h4>
                      <p>Addressing physical, mental, and spiritual health</p>
                    </div>
                  </div>
                  <div className={styles.whyFeature}>
                    <FaShieldAlt className={styles.whyIcon} />
                    <div>
                      <h4>Advanced Technology</h4>
                      <p>State-of-the-art treatments for optimal results</p>
                    </div>
                  </div>
                </div>
                <Link href="/meetthedoctor" className={styles.meetDoctorButton}>
                  Meet Dr. Garcia <FaArrowRight />
                </Link>
              </div>
              <div className={styles.whyImage}>
                <Image
                  src="/images/doctor-consultation.jpg"
                  alt="Dr. Garcia in consultation"
                  width={500}
                  height={600}
                  className={styles.whyImg}
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}