'use client';

import styles from './payment-plans.module.css';
import Script from 'next/script';
import Header from '../../../components/header';
import Footer from '../../../components/footer/footer';

export default function PaymentPlansPage() {
  return (
    <>
      <Header />
      {/* Cherry Widget Scripts and Fonts */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Slabo+27px&family=Lato&family=Raleway&family=Montserrat&family=Oswald&family=Poppins&family=Source+Sans+Pro&family=PT+Sans&family=Open+Sans&display=swap" 
        rel="stylesheet"
      />
      <Script
        id="cherry-widget"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (function (w, d, s, o, f, js, fjs) {
              w[o] = w[o] || function () {
                (w[o].q = w[o].q || []).push(arguments);
              };
              (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
              js.id = o;
              js.src = f;
              js.async = 1;
              fjs.parentNode.insertBefore(js, fjs);
            })(window, document, "script", "_hw", 'https://files.withcherry.com/widgets/widget.js');
            _hw(
              "init",
              {
                debug: false,
                variables: {
                  slug: 'garcia-family-medicine-llc',
                  name: "Garcia Family Medicine LLC",
                },
                styles: {
                  primaryColor: '#0066cc',
                  secondaryColor: '#0066cc10',
                  fontFamily: 'Open Sans',
                },
              },
              ["all", "hero", "howitworks", "testimony", "faq", "calculator"]
            );
          `
        }}
      />
      <div className={styles.container}>
        {/* Cherry Widget Container */}
        <div className={styles.cherryWidget}>
          <div id="all"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}