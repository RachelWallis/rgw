import React from 'react';
import aboutHeader from '../../assets/images/about-header.jpg';
import Image from 'next/image';

function About() {
  return (
    <div className="about-page">
      {/* Header section */}
      <div className="about-header">
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

      {/* Services tiles */}
      <div className="services-tiles">
        <div className="service-tile">
          <h2>Fast Service</h2>
          <p>
            We always aim to get to you as quickly as we can. Emergency cover is available 24/7 with no call out charge.
          </p>
        </div>

        <div className="service-tile">
          <h2>Gas Safe Registered</h2>
          <p>
            Our engineers are certified Gas Safe for your assurance of safe and compliant heating services. Trust in our accredited professionals for your peace of mind.
          </p>
        </div>

        <div className="service-tile">
          <h2>Available 24 Hours</h2>
          <p>
            Around the clock, our dedicated team is ready to assist you. Experience the convenience of 24/7 support for all your heating and plumbing needs.
          </p>
        </div>
      </div>

      {/* Contact info */}
      <div className="contact-info">
        <p>
          For more information about the services we offer, please <a href="mailto:richard@rgwplumbing.co.uk">email us</a> or give us a call on 07969 110 679.
          You can also <a href="/quote">get a free instant online quote</a> – finance available subject to credit checks.
        </p>
      </div>
    </div>
  );
}

export default About;