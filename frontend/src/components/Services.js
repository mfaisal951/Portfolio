import React, { useEffect, useRef } from 'react';
import './Services.css';

const Services = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const serviceCards = servicesRef.current?.querySelectorAll('.service-card');
    serviceCards?.forEach((card) => observer.observe(card));

    return () => {
      serviceCards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const services = [
    {
      icon: 'fas fa-code',
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks like React, Django, and Node.js. Responsive, fast, and scalable solutions.'
    },
    {
      icon: 'fas fa-robot',
      title: 'AI Automation / AI Tools',
      description: 'Intelligent automation solutions and AI-powered tools to streamline workflows and enhance productivity.'
    },
    {
      icon: 'fab fa-wordpress',
      title: 'WordPress Development',
      description: 'Custom themes, plugins, and full WordPress solutions tailored to your business needs.'
    },
    {
      icon: 'fas fa-plug',
      title: 'API Integration',
      description: 'Seamless integration of third-party APIs and services to extend your application\'s capabilities.'
    },
  ];

  return (
    <section className="services" id="services" ref={servicesRef}>
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card" 
              data-aos="fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

