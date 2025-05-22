// app/meetthedoctor/page.jsx – simplified single‑file version
'use client';

import styles  from './meetthedoctor.module.css';
import Header  from '../../components/header/header.jsx';
import Footer  from '../../components/footer/footer.jsx';

export default function Page() {
  return (
    <>
      <Header />

      {/* global vars + base styling wrapper */}
      <div className={`${styles.vars} ${styles.page}`}>
        <main className={styles.main}>
          {/* ───────────── Hero / quotes ───────────── */}
          <section className={styles.hero}>
            <h1 className={styles.h2}>Meet Dr. Theresa “Tess” Garcia</h1>

            <blockquote className={styles.lead}>
              “I think my most important characteristic as a doctor is the fact
              that I listen, when so many others don’t have the time or worse,
              don’t take the time.”
            </blockquote>
            <cite>— Dr.&nbsp;Tess Garcia</cite>

            <blockquote className={styles.lead} style={{marginTop:'1.75rem'}}>
              “I am a Sun Dancer, and I had never understood why I was called
              to be a dancer when I was doing my secular life. Then it dawned
              on me —the Native American Sun Dance is a healing ceremony.”
            </blockquote>
            <cite>— Dr.&nbsp;Tess Garcia</cite>

            <blockquote className={styles.lead} style={{marginTop:'1.75rem'}}>
              “My mission is simple: to listen, to heal, and to serve.”
            </blockquote>
            <cite>— Dr.&nbsp;Tess Garcia</cite>
          </section>

          {/* ───────────── Biography / story ───────────── */}
          <section className={styles.softSection}>
            <h2 className={styles.h2}>My Story</h2>

            <div className={styles.card}>
              <p>
                Hi, I’m Dr.&nbsp;Tess. I am Mexican American and Native American.
                I think my most important characteristic as a doctor is the
                fact that I listen, when so many others don’t have the time or
                worse, don’t take the time. I take tremendous pride in what I
                do, and this is my story.
              </p>

              <p>
                Believe it or not, my undergraduate degree was in music
                education and my first career was as an elementary school music
                teacher. I went to music school in New Mexico, where my parents
                are from, and later taught on the Blackfeet Reservation in
                northern Montana, then ended up in the DC metropolitan area
                until I moved to Richmond, Virginia, to attend the Medical
                College of Virginia. I ended up in Missouri by matching for
                residency training at Truman Lakewood. I graduated in 2002 and
                became a board‑certified Family Physician. After five years at
                Samuel Rogers Community Health Center, I opened my own practice
                in Grain Valley in 2007, now located in Blue Springs.
              </p>

              <p>
                How did I get from music teacher to family doctor? It began on
                Halloween 1993 when my mother called and asked why I wasn’t in
                medical school. Within a week I was enrolled in prerequisite
                coursework, took the MCAT in 1994, and started medical school
                in 1995. As a Sun Dancer, the realization that the Sun Dance is
                a healing ceremony resonated deeply—becoming a doctor felt like
                the natural culmination of my life’s calling.
              </p>

              <p>
                My parents came from humble Spanish families in northern
                New Mexico. Their dedication to serving underserved
                communities influenced me greatly; you could say my desire to
                care for underserved patients was born in me. Today, in Blue Springs,
                you’ll find a family physician, an obesity‑medicine
                specialist, a compassionate primary‑care provider, and a proud
                Mexican American / Native American doctor—all in one
                convenient location.
              </p>

              <p>
                As a Direct Primary Care physician, I’m proud to offer
                patient‑first medicine—eliminating insurance hurdles and giving
                my patients the time, attention, and personalized care they
                deserve.
              </p>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
