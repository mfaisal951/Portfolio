import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { icon: 'fas fa-briefcase', number: '50+', label: 'Projects' },
    { icon: 'fas fa-certificate', number: '15+', label: 'Certifications' },
    { icon: 'fas fa-calendar-alt', number: '5+', label: 'Years Experience' },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="/assets/img/me.png" alt="Muhammad Faisal" />
            <div className="image-glow"></div>
          </div>
          <div className="about-text">
            <p className="about-description">
              I'm a passionate Full Stack Developer with expertise in building modern web applications 
              using Python, Django, React, and various cutting-edge technologies. I specialize in 
              creating AI-powered tools and automation solutions that solve real-world problems. 
              With a strong foundation in both frontend and backend development, I bring ideas to 
              life through clean, efficient, and scalable code.
            </p>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">
                    <i className={stat.icon}></i>
                  </div>
                  <div className="stat-info">
                    <h3 className="stat-number">{stat.number}</h3>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

