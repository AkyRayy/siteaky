// AkyDev - Professional Minecraft Development Studio
// Interactive JavaScript functionality

class AkyDevSite {
    constructor() {
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupScrollEffects();
        this.setupAnimations();
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupIntersectionObserver();
        this.setupCustomCursor();
        this.setupMarquee();
        this.setupServiceAccordions();
        this.setupTestimonialSlider();
        this.setupFormValidation();
    }

    // Navigation functionality
    setupNavigation() {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelectorAll('.nav-link');
        let lastScrollY = window.scrollY;

        // Hide/show navbar on scroll
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                if (currentScrollY > lastScrollY) {
                    navbar.style.transform = 'translateY(-100%)';
                } else {
                    navbar.style.transform = 'translateY(0)';
                }
            }
            
            lastScrollY = currentScrollY;
        });

        // Active link highlighting
        const sections = document.querySelectorAll('section[id]');
        
        const highlightActiveLink = () => {
            const scrollY = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        };

        window.addEventListener('scroll', highlightActiveLink);
        highlightActiveLink(); // Initial call
    }

    // Mobile menu functionality
    setupMobileMenu() {
        const navToggle = document.querySelector('.nav-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

        navToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = navToggle.querySelectorAll('span');
            if (mobileMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navToggle.classList.remove('active');
                
                // Reset hamburger menu
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    }

    // Smooth scrolling for anchor links
    setupSmoothScrolling() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 72; // Navbar height
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Scroll animations
    setupScrollEffects() {
        // Parallax effects
        const parallaxElements = document.querySelectorAll('.glow-effect');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });

        // Scroll indicator animation
        const scrollLine = document.querySelector('.scroll-line');
        if (scrollLine) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPercent = (scrolled / maxScroll) * 100;
                scrollLine.style.height = `${scrollPercent}%`;
            });
        }
    }

    // Intersection Observer for animations
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Trigger stagger animations
                    if (entry.target.classList.contains('stagger-animation')) {
                        const children = entry.target.children;
                        Array.from(children).forEach((child, index) => {
                            setTimeout(() => {
                                child.classList.add('visible');
                            }, index * 100);
                        });
                    }
                }
            });
        }, observerOptions);

        // Observe elements
        const animatedElements = document.querySelectorAll('.fade-in, .stagger-animation');
        animatedElements.forEach(element => {
            observer.observe(element);
        });

        // Add animation classes to elements
        this.addAnimationClasses();
    }

    // Add animation classes to elements
    addAnimationClasses() {
        const elementsToAnimate = [
            '.hero-title',
            '.hero-subtitle',
            '.hero-actions',
            '.about-description',
            '.stat-item',
            '.service-item',
            '.work-item',
            '.process-item',
            '.tech-tag',
            '.testimonial-item'
        ];

        elementsToAnimate.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.classList.add('fade-in');
            });
        });

        // Add stagger animation to containers
        const staggerContainers = [
            '.about-stats',
            '.services-list',
            '.works-grid',
            '.process-timeline',
            '.tech-list',
            '.testimonials-slider'
        ];

        staggerContainers.forEach(selector => {
            const containers = document.querySelectorAll(selector);
            containers.forEach(container => {
                container.classList.add('stagger-animation');
            });
        });
    }

    // Custom cursor
    setupCustomCursor() {
        // Only on desktop
        if (window.innerWidth > 768) {
            const cursor = document.createElement('div');
            cursor.className = 'cursor';
            document.body.appendChild(cursor);

            let mouseX = 0, mouseY = 0;
            let cursorX = 0, cursorY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            const animateCursor = () => {
                cursorX += (mouseX - cursorX) * 0.1;
                cursorY += (mouseY - cursorY) * 0.1;
                
                cursor.style.left = cursorX + 'px';
                cursor.style.top = cursorY + 'px';
                
                requestAnimationFrame(animateCursor);
            };
            animateCursor();

            // Hover effects
            const interactiveElements = document.querySelectorAll('a, button, .service-item, .work-item');
            interactiveElements.forEach(element => {
                element.addEventListener('mouseenter', () => cursor.classList.add('hover'));
                element.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
            });

            // Hide cursor when leaving window
            document.addEventListener('mouseleave', () => {
                cursor.style.display = 'none';
            });
            document.addEventListener('mouseenter', () => {
                cursor.style.display = 'block';
            });
        }
    }

    // Marquee animation
    setupMarquee() {
        const marqueeContent = document.querySelector('.marquee-content');
        if (marqueeContent) {
            // Clone content for infinite loop
            const clone = marqueeContent.cloneNode(true);
            marqueeContent.appendChild(clone);
        }
    }

    // Service accordions
    setupServiceAccordions() {
        const serviceItems = document.querySelectorAll('.service-item');
        
        serviceItems.forEach(item => {
            item.addEventListener('click', () => {
                // Close other items
                serviceItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('expanded');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('expanded');
            });
        });

        // Add keyboard support
        serviceItems.forEach(item => {
            item.setAttribute('tabindex', '0');
            item.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    item.click();
                }
            });
        });
    }

    // Testimonial slider
    setupTestimonialSlider() {
        const slider = document.querySelector('.testimonials-slider');
        if (!slider) return;

        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            slider.style.cursor = 'grabbing';
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.style.cursor = 'grab';
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.style.cursor = 'grab';
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });

        // Touch support
        let touchStartX = 0;
        slider.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
        });

        slider.addEventListener('touchmove', (e) => {
            const touchX = e.touches[0].clientX;
            const diff = touchStartX - touchX;
            slider.scrollLeft += diff;
            touchStartX = touchX;
        });
    }

    // Form validation
    setupFormValidation() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.validateForm(form);
            });
        });
    }

    validateForm(form) {
        const inputs = form.querySelectorAll('input, textarea, select');
        let isValid = true;
        const errors = [];

        inputs.forEach(input => {
            const value = input.value.trim();
            const isRequired = input.hasAttribute('required');
            
            if (isRequired && !value) {
                isValid = false;
                errors.push(`${input.name || input.type} is required`);
                this.showInputError(input, 'This field is required');
            } else if (value) {
                this.clearInputError(input);
            }

            // Email validation
            if (input.type === 'email' && value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    errors.push('Invalid email format');
                    this.showInputError(input, 'Please enter a valid email');
                }
            }
        });

        if (isValid) {
            this.showNotification('Form submitted successfully!', 'success');
            form.reset();
        } else {
            this.showNotification('Please fix the errors and try again.', 'error');
        }
    }

    showInputError(input, message) {
        input.classList.add('error');
        
        // Remove existing error message
        const existingError = input.parentNode.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }
        
        // Add error message
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            color: var(--accent-primary);
            font-size: 12px;
            margin-top: 4px;
            font-family: var(--font-body);
        `;
        input.parentNode.appendChild(errorElement);
    }

    clearInputError(input) {
        input.classList.remove('error');
        const errorMessage = input.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }

    // Notification system
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        const styles = {
            position: 'fixed',
            top: '100px',
            right: '20px',
            background: type === 'success' ? 'var(--accent-primary)' : 
                        type === 'error' ? '#ff4444' : 'var(--text-primary)',
            color: type === 'success' || type === 'error' ? 'var(--bg-primary)' : 'var(--bg-primary)',
            padding: '16px 24px',
            borderRadius: 'var(--radius-sm)',
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            fontWeight: '500',
            zIndex: '10000',
            transform: 'translateX(400px)',
            transition: 'transform 0.3s ease',
            maxWidth: '300px',
            wordWrap: 'break-word'
        };
        
        Object.assign(notification.style, styles);
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Performance monitoring
    setupPerformanceMonitoring() {
        // Monitor page load performance
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
            
            // Log performance metrics
            if ('performance' in window && 'getEntriesByType' in performance) {
                const navigation = performance.getEntriesByType('navigation')[0];
                console.log('Performance metrics:', {
                    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
                    loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
                    firstPaint: performance.getEntriesByType('paint')[0]?.startTime,
                    firstContentfulPaint: performance.getEntriesByType('paint')[1]?.startTime
                });
            }
        });
    }

    // Analytics tracking
    setupAnalytics() {
        // Track page views
        this.trackEvent('page_view', {
            page: window.location.pathname,
            title: document.title,
            timestamp: new Date().toISOString()
        });

        // Track scroll depth
        let maxScroll = 0;
        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
            if (scrollPercent > maxScroll) {
                maxScroll = scrollPercent;
                
                // Track milestones
                if (maxScroll === 25 || maxScroll === 50 || maxScroll === 75 || maxScroll === 90) {
                    this.trackEvent('scroll_depth', {
                        depth: maxScroll,
                        page: window.location.pathname
                    });
                }
            }
        });

        // Track link clicks
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link) {
                this.trackEvent('link_click', {
                    href: link.href,
                    text: link.textContent.trim(),
                    page: window.location.pathname
                });
            }
        });
    }

    trackEvent(eventName, data) {
        // Simple analytics tracking (replace with real analytics service)
        console.log('Analytics Event:', eventName, data);
        
        // Store in localStorage for demo purposes
        const events = JSON.parse(localStorage.getItem('akydev_analytics') || '[]');
        events.push({
            event: eventName,
            data: data,
            timestamp: new Date().toISOString()
        });
        
        // Keep only last 100 events
        if (events.length > 100) {
            events.splice(0, events.length - 100);
        }
        
        localStorage.setItem('akydev_analytics', JSON.stringify(events));
    }

    // Utility functions
    debounce(func, wait) {
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

    throttle(func, limit) {
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

    // Initialize advanced features
    setupAdvancedFeatures() {
        this.setupPerformanceMonitoring();
        this.setupAnalytics();
        
        // Add loading states
        this.addLoadingStates();
        
        // Setup keyboard shortcuts
        this.setupKeyboardShortcuts();
        
        // Setup print styles
        this.setupPrintStyles();
        
        // Setup portfolio filters
        this.setupPortfolioFilters();
        
        // Setup contact form
        this.setupContactForm();
        
        // Setup FAQ
        this.setupFAQ();
    }
    
    // Contact form functionality
    setupContactForm() {
        const contactForm = document.getElementById('contactForm');
        const clearFormBtn = document.getElementById('clearForm');
        
        if (!contactForm) return;
        
        // Form submission
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleContactFormSubmit(contactForm);
        });
        
        // Clear form
        if (clearFormBtn) {
            clearFormBtn.addEventListener('click', () => {
                contactForm.reset();
                this.clearFormErrors(contactForm);
                this.showNotification('Форма очищена', 'info');
            });
        }
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    this.clearFieldError(input);
                }
            });
        });
    }
    
    // Handle contact form submission
    handleContactFormSubmit(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validate all fields
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            this.showNotification('Пожалуйста, заполните все обязательные поля', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Отправка...';
        submitBtn.disabled = true;
        
        // Simulate form submission (in real app, this would send to server)
        setTimeout(() => {
            // Store submission in localStorage for demo
            const submissions = JSON.parse(localStorage.getItem('akydev_submissions') || '[]');
            submissions.push({
                ...data,
                timestamp: new Date().toISOString(),
                id: Date.now()
            });
            localStorage.setItem('akydev_submissions', JSON.stringify(submissions));
            
            // Reset form
            form.reset();
            this.clearFormErrors(form);
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Show success message
            this.showNotification('Заявка успешно отправлена! Мы свяжемся с вами в течение 24 часов.', 'success');
            
            // Track analytics
            this.trackEvent('contact_form_submit', {
                projectType: data.projectType,
                budget: data.budget,
                hasNewsletter: data.newsletter === 'on'
            });
        }, 2000);
    }
    
    // Validate individual field
    validateField(field) {
        const value = field.value.trim();
        const isRequired = field.hasAttribute('required');
        
        // Clear previous errors
        this.clearFieldError(field);
        
        // Required validation
        if (isRequired && !value) {
            this.showFieldError(field, 'Это поле обязательно для заполнения');
            return false;
        }
        
        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                this.showFieldError(field, 'Введите корректный email адрес');
                return false;
            }
        }
        
        // Discord validation (username#1234 format)
        if (field.id === 'discord' && value) {
            const discordRegex = /^.{2,32}#\d{4}$/;
            if (!discordRegex.test(value)) {
                this.showFieldError(field, 'Введите Discord в формате username#1234');
                return false;
            }
        }
        
        // URL validation
        if (field.type === 'url' && value) {
            try {
                new URL(value);
            } catch {
                this.showFieldError(field, 'Введите корректный URL');
                return false;
            }
        }
        
        // Textarea length validation
        if (field.tagName === 'TEXTAREA' && value.length > 1000) {
            this.showFieldError(field, 'Описание не должно превышать 1000 символов');
            return false;
        }
        
        return true;
    }
    
    // Show field error
    showFieldError(field, message) {
        field.classList.add('error');
        
        // Remove existing error message
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Add error message
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.textContent = message;
        errorElement.style.cssText = `
            color: var(--accent-primary);
            font-size: 12px;
            margin-top: 4px;
            font-family: var(--font-body);
        `;
        field.parentNode.appendChild(errorElement);
    }
    
    // Clear field error
    clearFieldError(field) {
        field.classList.remove('error');
        const errorMessage = field.parentNode.querySelector('.field-error');
        if (errorMessage) {
            errorMessage.remove();
        }
    }
    
    // Clear all form errors
    clearFormErrors(form) {
        const errorMessages = form.querySelectorAll('.field-error');
        const errorFields = form.querySelectorAll('.error');
        
        errorMessages.forEach(msg => msg.remove());
        errorFields.forEach(field => field.classList.remove('error'));
    }
    
    // FAQ functionality
    setupFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        if (faqItems.length === 0) return;
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                if (!isActive) {
                    item.classList.add('active');
                    
                    // Track analytics
                    const questionText = item.querySelector('.faq-title').textContent;
                    this.trackEvent('faq_open', {
                        question: questionText
                    });
                }
            });
        });
        
        // Add keyboard support
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.setAttribute('tabindex', '0');
            
            question.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    question.click();
                }
            });
        });
    }
    
    // Portfolio filtering functionality
    setupPortfolioFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectItems = document.querySelectorAll('.project-item');
        
        console.log('Portfolio filters setup:', {
            filterButtons: filterButtons.length,
            projectItems: projectItems.length
        });
        
        if (filterButtons.length === 0 || projectItems.length === 0) {
            console.log('No filter buttons or project items found');
            return;
        }
        
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const filter = button.dataset.filter;
                
                console.log('Filter clicked:', filter);
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter projects
                projectItems.forEach(item => {
                    const category = item.dataset.category;
                    
                    if (filter === 'all' || category === filter) {
                        item.classList.remove('hidden');
                        // Add animation
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        item.classList.add('hidden');
                    }
                });
                
                // Update analytics
                this.trackEvent('portfolio_filter', {
                    filter: filter,
                    visibleProjects: document.querySelectorAll('.project-item:not(.hidden)').length
                });
            });
        });
        
        // Load more functionality
        const loadMoreBtn = document.querySelector('.load-more-btn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.loadMoreProjects();
            });
        }
    }
    
    // Load more projects (simulated)
    loadMoreProjects() {
        const loadMoreBtn = document.querySelector('.load-more-btn');
        const projectsGrid = document.querySelector('.projects-grid');
        
        if (!loadMoreBtn || !projectsGrid) return;
        
        // Show loading state
        loadMoreBtn.textContent = 'Загрузка...';
        loadMoreBtn.disabled = true;
        
        // Simulate loading delay
        setTimeout(() => {
            // Add more projects (in real app, this would load from API)
            const newProjects = this.generateMoreProjects(3);
            
            newProjects.forEach(project => {
                const projectElement = this.createProjectElement(project);
                projectsGrid.appendChild(projectElement);
                
                // Animate in
                setTimeout(() => {
                    projectElement.style.opacity = '1';
                    projectElement.style.transform = 'translateY(0)';
                }, 100);
            });
            
            // Reset button
            loadMoreBtn.textContent = 'Загрузить ещё';
            loadMoreBtn.disabled = false;
            
            // Hide button if no more projects (simulated)
            if (projectsGrid.children.length >= 12) {
                loadMoreBtn.style.display = 'none';
            }
            
            this.trackEvent('portfolio_load_more', {
                totalProjects: projectsGrid.children.length
            });
        }, 1000);
    }
    
    // Generate more projects (simulated)
    generateMoreProjects(count) {
        const projectTemplates = [
            {
                title: 'CustomAPI',
                tags: ['API', 'Framework', 'Developer Tools'],
                description: 'Мощный API для разработки кастомных плагинов с удобными инструментами.',
                category: 'plugins',
                date: 'Июнь 2023',
                duration: '1 месяц',
                icon: '🔧'
            },
            {
                title: 'SkyBlock Pro',
                tags: ['SkyBlock', 'Экономика', 'Прогрессия'],
                description: 'Продвинутый режим SkyBlock с уникальными механиками и прогрессией.',
                category: 'gamemodes',
                date: 'Май 2023',
                duration: '2 месяца',
                icon: '☁️'
            },
            {
                title: 'ChatBridge',
                tags: ['Чат', 'Мосты', 'Синхронизация'],
                description: 'Система моста для синхронизации чата между несколькими серверами.',
                category: 'integrations',
                date: 'Апрель 2023',
                duration: '2 недели',
                icon: '💬'
            }
        ];
        
        const projects = [];
        for (let i = 0; i < count; i++) {
            const template = projectTemplates[i % projectTemplates.length];
            projects.push({
                ...template,
                id: Date.now() + i,
                title: template.title + ' #' + (Math.floor(Math.random() * 100) + 1)
            });
        }
        
        return projects;
    }
    
    // Create project element
    createProjectElement(project) {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-item';
        projectDiv.dataset.category = project.category;
        projectDiv.style.cssText = 'opacity: 0; transform: translateY(20px); transition: all 0.3s ease;';
        
        projectDiv.innerHTML = `
            <div class="project-image">
                <div class="project-placeholder">
                    <div class="placeholder-content">
                        <span class="placeholder-icon">${project.icon}</span>
                        <span class="placeholder-text">${project.title}</span>
                    </div>
                </div>
                <div class="project-overlay">
                    <a href="/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}" class="project-link">Смотреть кейс →</a>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-meta">
                    <div class="project-date">${project.date}</div>
                    <div class="project-duration">${project.duration}</div>
                </div>
            </div>
        `;
        
        return projectDiv;
    }

    addLoadingStates() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-outline');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                if (!button.classList.contains('loading')) {
                    button.classList.add('loading');
                    button.disabled = true;
                    
                    const originalText = button.textContent;
                    button.textContent = 'Loading...';
                    
                    // Reset after 2 seconds (demo)
                    setTimeout(() => {
                        button.classList.remove('loading');
                        button.disabled = false;
                        button.textContent = originalText;
                    }, 2000);
                }
            });
        });
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K for search (if search is implemented)
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                console.log('Search shortcut pressed');
            }
            
            // ESC to close modals/menus
            if (e.key === 'Escape') {
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                }
            }
        });
    }

    setupPrintStyles() {
        window.addEventListener('beforeprint', () => {
            document.body.classList.add('printing');
        });
        
        window.addEventListener('afterprint', () => {
            document.body.classList.remove('printing');
        });
    }
}

// Initialize the site
document.addEventListener('DOMContentLoaded', () => {
    new AkyDevSite();
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AkyDevSite;
}
