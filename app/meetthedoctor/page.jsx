// app/meetthedoctor/page.jsx – two‑column layout with integrated quotes & bio
'use client';

import Image  from 'next/image';
import styles from './meetthedoctor.module.css';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';

export default function Page() {
  return (
    <>
      <Header />

      <div className={`${styles.vars} ${styles.page}`}>
        <main className={styles.main}>
          {/* ============= Story Section ============= */}
          <section className={styles.softSection}>
            <div className={styles.storyGrid}>
              {/* left column – portrait + pull quotes */}
              <div className={styles.leftCol}>
                <Image
                  src="/images/doctor-tess-garcia-blue-springs.jpg"   /* replace with real path */
                  alt="Dr. Tess Garcia caring for an infant"
                  width={400}
                  height={400}
                  priority
                  className={styles.portrait}
                />

                <blockquote className={styles.quote}>
                  “I think my most important characteristic as a doctor is the
                  fact that I listen, when so many others don’t have the time or
                  worse, don’t take the time.”
                  <cite>— Dr. Tess Garcia</cite>
                </blockquote>

                <blockquote className={styles.quote}>
                  “I am a Sun Dancer, and I had never understood why I was
                  called to be a dancer when I was doing my secular life. Then
                  it dawned on me —the Native American Sun Dance is a healing
                  ceremony.”
                  <cite>— Dr. Tess Garcia</cite>
                </blockquote>

                <blockquote className={styles.quote}>
                  “My mission is simple: to listen, to heal, and to serve.”
                  <cite>— Dr. Tess Garcia</cite>
                </blockquote>
              </div>

              {/* right column – heading + full bio */}
              <div className={styles.rightCol}>
                <h2 className={styles.h2}>Hi, I’m Dr.&nbsp;Tess.</h2>

                <p>
                  I am Mexican American and Native American. I think my most
                  important characteristic as a doctor is the fact that I
                  listen, when so many others don’t have the time or worse,
                  don’t take the time. I take tremendous pride in what I do, and
                  this is my story.
                </p>

                <p>
                  Believe it or not, my undergraduate degree was in music
                  education and my first career was as an elementary school
                  music teacher. I went to music school in New Mexico, where my
                  parents are from, and later taught on the Blackfeet
                  Reservation in northern Montana, then ended up in the DC
                  metropolitan area until I moved to Richmond, Virginia, to
                  attend the Medical College of Virginia. I ended up in Missouri
                  by matching for residency training at Truman Lakewood. I
                  graduated in 2002 and became a board‑certified Family
                  Physician. I worked five years at Samuel Rogers Community
                  Health Center before opening my own practice—first in
                  Grain Valley in 2007 and now in Blue Springs.
                </p>

                <p>
                  The leap from music teacher to physician began on Halloween
                  1993 when my mother asked why I wasn’t in medical school.
                  Within a week I was enrolled in prerequisite courses, sat the
                  MCAT in 1994, and started medical school in 1995. Realizing
                  the Sun Dance is a healing ceremony, becoming a doctor felt
                  like the natural culmination of my path and spiritual calling.
                </p>

                <p>
                  My parents’ dedication to underserved communities ignited the
                  same passion in me. Today in Blue Springs, you’ll find a
                  family physician, an obesity‑medicine specialist, a
                  compassionate primary‑care provider, and a proud Mexican
                  American / Native American doctor—all in one convenient
                  location.
                </p>

                <p>
                  As a Direct Primary Care physician, I’m proud to offer
                  patient‑first medicine—eliminating insurance hurdles and
                  giving my patients the time, attention, and personalized care
                  they deserve.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
