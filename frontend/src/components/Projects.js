import React, { useEffect, useRef } from 'react';
import './Projects.css';

const Projects = () => {
  const projectsRef = useRef(null);

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

    const projectCards = projectsRef.current?.querySelectorAll('.project-card');
    projectCards?.forEach((card) => observer.observe(card));

    return () => {
      projectCards?.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution built with Django and React, featuring payment integration and admin dashboard.',
      tags: ['Python', 'Django', 'React'],
      image: 'https://via.placeholder.com/400x250/6366f1/ffffff?text=Project+1',
      live: '#',
      github: '#'
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered tool for generating and optimizing content using advanced NLP and machine learning algorithms.',
      tags: ['Python', 'AI/ML', 'React'],
      image: 'https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Project+2',
      live: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, built with React and Firebase.',
      tags: ['React', 'Firebase', 'Node.js'],
      image: 'https://via.placeholder.com/400x250/ec4899/ffffff?text=Project+3',
      live: '#',
      github: '#'
    },
    {
      title: 'API Integration Platform',
      description: 'RESTful API service with comprehensive documentation and automated testing suite.',
      tags: ['Python', 'Django', 'REST API'],
      image: 'https://via.placeholder.com/400x250/14b8a6/ffffff?text=Project+4',
      live: '#',
      github: '#'
    },
    {
      title: 'WordPress Custom Theme',
      description: 'Custom WordPress theme with modern design, optimized for performance and SEO.',
      tags: ['WordPress', 'PHP', 'CSS'],
      image: 'https://via.placeholder.com/400x250/f59e0b/ffffff?text=Project+5',
      live: '#',
      github: '#'
    },
    {
      title: 'Automation Dashboard',
      description: 'Business process automation tool with workflow management and reporting features.',
      tags: ['Python', 'React', 'MySQL'],
      image: 'https://via.placeholder.com/400x250/06b6d4/ffffff?text=Project+6',
      live: '#',
      github: '#'
    },
  ];

  return (
    <section className="projects" id="projects" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card" 
              data-aos="fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

