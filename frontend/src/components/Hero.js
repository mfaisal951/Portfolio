import React, { useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  useEffect(() => {
    // Add animation delay variations
    const icons = document.querySelectorAll('.icon-orbital');
    icons.forEach((icon, index) => {
      const randomDelay = Math.random() * 2;
      icon.style.setProperty('--delay', `${randomDelay}s`);
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Replace with your actual CV path
    alert('CV download functionality - Add your CV file path');
  };

  const techIcons = [
    { icon: 'fab fa-html5', class: 'html', delay: '0s', angle: '0deg' },
    { icon: 'fab fa-css3-alt', class: 'css', delay: '0.5s', angle: '45deg' },
    { icon: 'fab fa-js', class: 'js', delay: '1s', angle: '90deg' },
    { icon: 'fab fa-python', class: 'python', delay: '1.5s', angle: '135deg' },
    { icon: 'DJ', class: 'django', delay: '2s', angle: '180deg', isText: true },
    { icon: 'fab fa-react', class: 'react', delay: '2.5s', angle: '225deg' },
    { icon: 'fab fa-github', class: 'github', delay: '3s', angle: '270deg' },
    { icon: 'fab fa-git-alt', class: 'git', delay: '3.5s', angle: '315deg' },
    { icon: 'fas fa-database', class: 'mysql', delay: '4s', angle: '30deg' },
    { icon: 'fab fa-firebase', class: 'firebase', delay: '4.5s', angle: '60deg' },
    { icon: 'fab fa-node-js', class: 'nodejs', delay: '5s', angle: '120deg' },
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="profile-wrapper">
            <div className="profile-image-container">
              <img src="/assets/img/me.png" alt="Muhammad Faisal" className="profile-image" />
              <div className="glow-effect"></div>
            </div>
            
            <div className="floating-icons">
              {techIcons.map((tech, index) => (
                <div 
                  key={index}
                  className="icon-orbital" 
                  style={{ '--delay': tech.delay, '--angle': tech.angle }}
                >
                  <div className={`tech-icon ${tech.class}`}>
                    {tech.isText ? <span>{tech.icon}</span> : <i className={tech.icon}></i>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Muhammad Faisal</span>
            </h1>
            <p className="hero-subtitle">
              Full Stack Developer | AI Tools Builder | Digital Creator
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Hire Me
              </a>
              <button className="btn btn-secondary" onClick={downloadCV}>
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

