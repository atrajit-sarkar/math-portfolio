// Hero section animations and interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
        // Create floating particles
        createFloatingParticles();
        
        // Add interactive cursor following effect
        addCursorEffect();
        
        // Add scroll parallax effect
        addParallaxEffect();
    }
    
    // Always add typing animation (less intensive)
    addTypingAnimation();
});

function createFloatingParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
    `;
    
    hero.appendChild(particleContainer);
    
    // Simple mathematical symbols for floating
    const mathSymbols = ['∑', '∫', 'π', '∞', '∂', 'α', 'λ', 'Δ', 'φ'];
    
    // Create fewer, more subtle mathematical symbol particles
    for (let i = 0; i < 8; i++) {
        createMathParticle(particleContainer, mathSymbols);
    }
}

function createMathParticle(container, mathSymbols) {
    const particle = document.createElement('div');
    const symbol = mathSymbols[Math.floor(Math.random() * mathSymbols.length)];
    const size = Math.random() * 15 + 12; // Smaller size
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight + 50; // Start from bottom
    const duration = Math.random() * 30 + 20; // Much slower
    const delay = Math.random() * 15;
    const opacity = Math.random() * 0.05 + 0.01; // Very subtle
    
    particle.innerHTML = symbol;
    particle.style.cssText = `
        position: absolute;
        font-size: ${size}px;
        color: rgba(255, 255, 255, ${opacity});
        font-family: 'Times New Roman', serif;
        font-weight: normal;
        left: ${startX}px;
        top: ${startY}px;
        animation: floatMathSymbolGentle ${duration}s infinite linear;
        animation-delay: ${delay}s;
        user-select: none;
        pointer-events: none;
    `;
    
    container.appendChild(particle);
    
    // Add gentle floating animation without rotation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatMathSymbolGentle {
            0% {
                transform: translateY(0px) translateX(0px);
                opacity: 0;
            }
            10% {
                opacity: ${opacity};
            }
            90% {
                opacity: ${opacity};
            }
            100% {
                transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

function addTypingAnimation() {
    const nameElement = document.querySelector('.hero h1');
    if (!nameElement) return;
    
    const originalText = nameElement.textContent;
    nameElement.textContent = '';
    nameElement.style.opacity = '1';
    
    // Add typing cursor
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.style.cssText = `
        animation: blink 1s infinite;
        color: #7c64ff;
    `;
    
    // Add blinking cursor animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    nameElement.appendChild(cursor);
    
    // Type out the text
    let i = 0;
    function typeText() {
        if (i < originalText.length) {
            nameElement.textContent = originalText.slice(0, i + 1);
            nameElement.appendChild(cursor);
            i++;
            setTimeout(typeText, 100);
        } else {
            // Remove cursor after typing is complete
            setTimeout(() => {
                cursor.style.display = 'none';
            }, 2000);
        }
    }
    
    // Start typing after initial delay
    setTimeout(typeText, 1000);
}

function addCursorEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(124, 100, 255, 0.8) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursor);
    
    hero.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
    });
    
    hero.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    
    hero.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Add hover effect to interactive elements
    const interactiveElements = hero.querySelectorAll('a, .btn, .profile-image, .status-bubble');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.background = 'radial-gradient(circle, rgba(255, 107, 157, 0.8) 0%, transparent 70%)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'radial-gradient(circle, rgba(124, 100, 255, 0.8) 0%, transparent 70%)';
        });
    });
}

function addParallaxEffect() {
    // Removed parallax effect to prevent content hiding issues
    // The hero section should not have parallax scrolling
}

// Add smooth scrolling for navigation links
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

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.hero-content > *').forEach(el => {
    observer.observe(el);
});
