import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const skillsRef = useRef(null);

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

    const skillItems = skillsRef.current?.querySelectorAll('.skill-item');
    skillItems?.forEach((item) => observer.observe(item));

    return () => {
      skillItems?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const skills = [
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fab fa-react', name: 'React' },
    { icon: 'DJ', name: 'Django', isText: true },
    { icon: 'fab fa-js', name: 'JavaScript' },
    { icon: 'fab fa-node-js', name: 'Node.js' },
    { icon: 'fab fa-html5', name: 'HTML5' },
    { icon: 'fab fa-css3-alt', name: 'CSS3' },
    { icon: 'fas fa-database', name: 'MySQL' },
    { icon: 'fab fa-firebase', name: 'Firebase' },
    { icon: 'fab fa-git-alt', name: 'Git' },
    { icon: 'fab fa-github', name: 'GitHub' },
    { icon: 'fab fa-wordpress', name: 'WordPress' },
  ];

  return (
    <section className="skills" id="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-item" 
              data-aos="fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon">
                {skill.isText ? <span>{skill.icon}</span> : <i className={skill.icon}></i>}
              </div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

