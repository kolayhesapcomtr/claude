// ==========================================
// BULUT SOĞUK HAVA TESİSİ - MAIN SCRIPT
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initMobileMenu();
    initSmoothScroll();
    initNavbarScroll();
    initContactForm();
    initAnimations();
    initStatsCounter();
});

// ==========================================
// MOBILE MENU
// ==========================================

function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');

            // Animate hamburger
            const spans = hamburger.querySelectorAll('span');
            if (hamburger.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');

                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);

            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');

                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
}

// ==========================================
// SMOOTH SCROLL
// ==========================================

function initSmoothScroll() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

function initNavbarScroll() {
    const navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.2)';
            } else {
                navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
            }
        });
    }
}

// ==========================================
// CONTACT FORM - EmailJS Integration
// ==========================================

function initContactForm() {
    // EmailJS Initialization
    // TODO: Aşağıdaki YOUR_PUBLIC_KEY değerini EmailJS'den aldığınız Public Key ile değiştirin
    emailjs.init("YOUR_PUBLIC_KEY");

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name')?.value || '';
            const email = document.getElementById('email')?.value || '';
            const phone = document.getElementById('phone')?.value || '';
            const company = document.getElementById('company')?.value || '';
            const subject = document.getElementById('subject')?.value || '';
            const message = document.getElementById('message')?.value || '';

            // Basic validation
            if (!name || !email || !phone || !message) {
                alert('Lütfen zorunlu alanları doldurun.');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Lütfen geçerli bir e-posta adresi girin.');
                return;
            }

            // Disable submit button and show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Gönderiliyor...';

            // EmailJS parameters
            const templateParams = {
                from_name: name,
                from_email: email,
                phone: phone,
                company: company || 'Belirtilmedi',
                subject: subject,
                message: message
            };

            // TODO: YOUR_SERVICE_ID ve YOUR_TEMPLATE_ID değerlerini EmailJS'den aldığınız değerlerle değiştirin
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);

                    // Show success message
                    alert(`Teşekkürler ${name}!\n\nMesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.\n\nİletişim bilgileriniz:\nE-posta: ${email}\nTelefon: ${phone}`);

                    // Reset form
                    contactForm.reset();

                    // Re-enable submit button
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }, function(error) {
                    console.log('FAILED...', error);

                    // Show error message
                    alert('Üzgünüz, mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin veya doğrudan telefon ile iletişime geçin.\n\nHata: ' + error.text);

                    // Re-enable submit button
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                });
        });
    }
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    // Observe product cards
    const productCards = document.querySelectorAll('.product-card, .product-detail-card');
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    // Observe value cards
    const valueCards = document.querySelectorAll('.value-card, .cert-card, .why-card');
    valueCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    // Observe contact cards
    const contactCards = document.querySelectorAll('.contact-info-card');
    contactCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    // Observe gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.9)';
        item.style.transition = `all 0.5s ease ${index * 0.05}s`;
        observer.observe(item);
    });
}

// ==========================================
// STATS COUNTER ANIMATION
// ==========================================

function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');

    if (statNumbers.length > 0) {
        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    entry.target.classList.add('counted');
                    animateCounter(entry.target);
                }
            });
        }, observerOptions);

        statNumbers.forEach(stat => {
            observer.observe(stat);
        });
    }
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(function() {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString('tr-TR');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString('tr-TR');
        }
    }, stepTime);
}

// ==========================================
// TEMPERATURE ANIMATION (Home Page)
// ==========================================

// Temperature display animation for hero section
const tempDisplay = document.querySelector('.temp-display .temp-number');
if (tempDisplay) {
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !tempDisplay.classList.contains('animated')) {
                tempDisplay.classList.add('animated');
                animateTemperature(tempDisplay);
            }
        });
    }, observerOptions);

    observer.observe(tempDisplay);
}

function animateTemperature(element) {
    let current = 0;
    const target = -18;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(function() {
        current += increment;
        if (current <= target) {
            element.textContent = target + '°C';
            clearInterval(timer);
        } else {
            element.textContent = Math.round(current) + '°C';
        }
    }, stepTime);
}

// ==========================================
// GALLERY LIGHTBOX (Optional Enhancement)
// ==========================================

function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Placeholder for lightbox functionality
            // You can add a lightbox library here if needed
            console.log('Gallery item clicked');
        });
    });
}

// ==========================================
// FORM VALIDATION HELPERS
// ==========================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    // Turkish phone number validation
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// ==========================================
// PAGE LOAD ANIMATIONS
// ==========================================

window.addEventListener('load', function() {
    // Remove any loading states
    document.body.classList.add('loaded');

    // Initialize gallery lightbox if on gallery page
    if (document.querySelector('.gallery-grid')) {
        initGalleryLightbox();
    }
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Debounce function for performance
function debounce(func, wait) {
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

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log('%c🧊 Bulut Soğuk Hava Tesisi', 'font-size: 20px; color: #2563eb; font-weight: bold;');
console.log('%cProfesyonel Soğutma ve Depolama Çözümleri', 'font-size: 12px; color: #0ea5e9;');
