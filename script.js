// ===================================
// NAVBAR SCROLL EFFECT
// ===================================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===================================
// SMOOTH SCROLL
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// SCROLL ANIMATION (AOS Alternative)
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// ===================================
// CONTACT FORM HANDLING
// ===================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you can integrate EmailJS or send to your backend
    // For now, we'll just show an alert
    console.log('Form submitted:', { name, email, message });
    
    // You can integrate EmailJS like this:
    /*
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(() => {
        alert('Message sent successfully!');
        contactForm.reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send message. Please try again.');
    });
    */
    
    // Placeholder success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// ===================================
// DOWNLOAD CV BUTTON
// ===================================
const downloadCV = document.getElementById('downloadCV');

downloadCV.addEventListener('click', (e) => {
    e.preventDefault();
    // Replace with your actual CV file path
    const cvPath = 'assets/cv/Muhammad_Faisal_CV.pdf';
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Muhammad_Faisal_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // If file doesn't exist, show alert
    fetch(cvPath)
        .then(response => {
            if (!response.ok) {
                alert('CV file not found. Please contact me directly.');
            }
        })
        .catch(() => {
            alert('CV file not found. Please contact me directly.');
        });
});

// ===================================
// LET'S TALK BUTTON
// ===================================
const letsTalkBtn = document.querySelector('.btn-talk');

letsTalkBtn.addEventListener('click', () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// ===================================
// ENHANCED FLOATING ANIMATION
// ===================================
// Add random delay variations to floating icons for more natural movement
document.querySelectorAll('.icon-orbital').forEach((icon, index) => {
    const randomDelay = Math.random() * 2;
    icon.style.setProperty('--delay', `${randomDelay}s`);
    
    // Add hover pause effect
    icon.addEventListener('mouseenter', () => {
        icon.style.animationPlayState = 'paused';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.animationPlayState = 'running';
    });
});

// ===================================
// PARALLAX EFFECT FOR HERO SECTION
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 500;
    }
});

// ===================================
// TYPING EFFECT (Optional Enhancement)
// ===================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect on hero title
// const heroTitle = document.querySelector('.hero-title');
// if (heroTitle) {
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 50);
// }

// ===================================
// ACTIVE NAV LINK HIGHLIGHTING
// ===================================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// ===================================
// CURSOR GLOW EFFECT (Optional)
// ===================================
// Create a custom cursor glow effect
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.style.cssText = `
    width: 20px;
    height: 20px;
    border: 2px solid rgba(99, 102, 241, 0.5);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    display: none;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
    cursor.style.display = 'block';
});

// Add glow on hover for interactive elements
document.querySelectorAll('a, button, .tech-icon, .skill-item, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.borderColor = 'rgba(99, 102, 241, 1)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.borderColor = 'rgba(99, 102, 241, 0.5)';
    });
});

// Hide default cursor on desktop (optional)
// document.body.style.cursor = 'none';

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================
// Throttle scroll events for better performance
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const optimizedScroll = throttle(() => {
    // Scroll-based animations here
}, 10);

window.addEventListener('scroll', optimizedScroll);

// ===================================
// LOADING ANIMATION (Optional)
// ===================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Fade in hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transition = 'opacity 1s ease';
        setTimeout(() => {
            heroContent.style.opacity = '1';
        }, 100);
    }
});

