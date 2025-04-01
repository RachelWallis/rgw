import React from 'react';
import aboutHeader from '../../assets/images/about-header.jpg';
import Image from 'next/image';

function About() {
  return (
    <>
      <div className="page-header position-relative about-page">
        <div className="page-header-bottom">
          <div className="single-image">
            <p>
              RGW Heating & Plumbing is a family-run business with over 20 years of expertise.
              Specialising in heating solutions, we offer comprehensive services in both heating
              and plumbing to meet all your needs. Our deep-rooted family values ensure personalised
              care and dedicated service for every project. From routine maintenance to complex
              installations, our experienced team is equipped to handle all aspects of heating and
              plumbing with unmatched professionalism. Trust us to bring warmth and comfort to your
              home with our reliable and efficient services.
            </p>
            <Image src={aboutHeader} alt="about-header" />
          </div>
        </div>
      </div>

      <div className="about-text-section">
        <div className="about-text-section-wrapper text-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="card-contain">
                <div className="about-text-section-inner">
                  <div className="about-card">
                    <h2 className="heading heading-medium light-1">Fast Service</h2>
                    <p className="light-1">
                      We always aim to get to you as quickly as we can. Emergency cover is available 24/7 with no call out charge.
                    </p>
                  </div>

                  <div className="about-card">
                    <h2 className="heading heading-medium light-1">Gas Safe Registered</h2>
                    <p className="light-1">
                      Our engineers are certified Gas Safe for your assurance of safe and compliant heating services. Trust in our accredited professionals for your peace of mind.
                    </p>
                  </div>

                  <div className="about-card">
                    <h2 className="heading heading-medium light-1">Available 24 Hours</h2>
                    <p className="light-1">
                      Around the clock, our dedicated team is ready to assist you. Experience the convenience of 24/7 support for all your heating and plumbing needs.
                    </p>
                  </div>
                </div>
                <div className="info-card">
                    <p>
                      For more information about the services we offer, please <a href="mailto:richard@rgwplumbing.co.uk">email us</a> or give us a call on 07969 110 679.
                      You can also <a href="/quote">get a free instant online quote</a> – finance available subject to credit checks.
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;