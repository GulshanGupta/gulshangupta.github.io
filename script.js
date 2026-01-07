// ==========================================
// GULSHAN GUPTA - PORTFOLIO SCRIPTS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initNavbarScroll();
    initSkillBarsAnimation();
});

// ==========================================
// MOBILE MENU
// ==========================================

function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }
}

// ==========================================
// SMOOTH SCROLL
// ==========================================

function initSmoothScroll() {
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
}

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            navbar.style.background = 'rgba(10, 14, 23, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 14, 23, 0.85)';
            navbar.style.boxShadow = 'none';
        }

        lastScrollY = currentScrollY;
    });
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    document.querySelectorAll('.skill-category, .timeline-item, .contact-method, .highlight, .project-card, .certification-card').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// ==========================================
// SKILL BARS ANIMATION
// ==========================================

function initSkillBarsAnimation() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.skill-progress');
                progressBars.forEach(bar => {
                    bar.style.animationPlayState = 'running';
                });
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-category').forEach(category => {
        // Initially pause the animation
        category.querySelectorAll('.skill-progress').forEach(bar => {
            bar.style.animationPlayState = 'paused';
        });
        observer.observe(category);
    });
}

// ==========================================
// TYPING EFFECT (Optional Enhancement)
// ==========================================

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

// ==========================================
// CONSOLE EASTER EGG
// ==========================================

console.log(`
%c╔══════════════════════════════════════════╗
%c║                                          ║
%c║    👋 Hey there, curious developer!      ║
%c║                                          ║
%c║    Thanks for checking out my code!      ║
%c║                                          ║
%c║    💼 Looking to hire?                   ║
%c║    📧 gulshangupta111@gmail.com          ║
%c║                                          ║
%c╚══════════════════════════════════════════╝
`,
'color: #00ff88; font-weight: bold',
'color: #00ff88',
'color: #00d4ff',
'color: #00ff88',
'color: #00d4ff',
'color: #00ff88',
'color: #00d4ff',
'color: #ffd93d',
'color: #00ff88',
'color: #00ff88; font-weight: bold'
);

