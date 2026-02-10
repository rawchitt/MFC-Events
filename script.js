// ============================================
// Mozilla Firefox Club - Event Registration Portal
// JavaScript - Interactive Functionality
// ============================================

// ============================================
// State Management
// ============================================
const appState = {
    currentStep: 1,
    formData: {},
    eventDate: new Date('2026-03-15T10:00:00'),
    countdownInterval: null
};

// ============================================
// DOM Elements
// ============================================
const elements = {
    header: document.getElementById('header'),
    navMenu: document.getElementById('navMenu'),
    mobileMenuToggle: document.getElementById('mobileMenuToggle'),
    navLinks: document.querySelectorAll('.nav-link'),
    registrationForm: document.getElementById('registrationForm'),
    formSteps: document.querySelectorAll('.form-step'),
    progressSteps: document.querySelectorAll('.progress-step'),
    successModal: document.getElementById('successModal'),
    closeModal: document.getElementById('closeModal'),
    countdownTimer: {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    }
};

// ============================================
// Initialization
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initScrollEffects();
    initNavigation();
    initCountdown();
    initFormValidation();
    initFormNavigation();
    initStatCounters();
    initModalHandlers();
});

// ============================================
// Scroll Effects
// ============================================
function initScrollEffects() {
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Header scroll effect
        if (currentScroll > 50) {
            elements.header.classList.add('scrolled');
        } else {
            elements.header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// ============================================
// Navigation
// ============================================
function initNavigation() {
    // Mobile menu toggle
    elements.mobileMenuToggle.addEventListener('click', () => {
        elements.navMenu.classList.toggle('active');
        elements.mobileMenuToggle.classList.toggle('active');
    });

    // Smooth scroll and active link
    elements.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Close mobile menu if open
                elements.navMenu.classList.remove('active');
                elements.mobileMenuToggle.classList.remove('active');

                // Smooth scroll
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Update active link
                elements.navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        elements.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// Countdown Timer
// ============================================
function initCountdown() {
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = appState.eventDate.getTime() - now;

        if (distance < 0) {
            clearInterval(appState.countdownInterval);
            elements.countdownTimer.days.textContent = '00';
            elements.countdownTimer.hours.textContent = '00';
            elements.countdownTimer.minutes.textContent = '00';
            elements.countdownTimer.seconds.textContent = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        elements.countdownTimer.days.textContent = String(days).padStart(2, '0');
        elements.countdownTimer.hours.textContent = String(hours).padStart(2, '0');
        elements.countdownTimer.minutes.textContent = String(minutes).padStart(2, '0');
        elements.countdownTimer.seconds.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    appState.countdownInterval = setInterval(updateCountdown, 1000);
}

// ============================================
// Stat Counters
// ============================================
function initStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    statNumbers.forEach(stat => observer.observe(stat));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// ============================================
// Form Validation
// ============================================
const validationRules = {
    fullName: {
        required: true,
        minLength: 3,
        pattern: /^[a-zA-Z\s]+$/,
        message: 'Please enter a valid name (letters only, minimum 3 characters)'
    },
    email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Please enter a valid email address'
    },
    phone: {
        required: true,
        pattern: /^[\+]?[0-9\s\-\(\)]{10,}$/,
        message: 'Please enter a valid phone number (minimum 10 digits)'
    },
    rollNumber: {
        required: true,
        minLength: 3,
        message: 'Please enter a valid roll number'
    },
    department: {
        required: true,
        message: 'Please select your department'
    },
    year: {
        required: true,
        message: 'Please select your year'
    },
    terms: {
        required: true,
        message: 'You must agree to the terms and conditions'
    }
};

function initFormValidation() {
    const inputs = elements.registrationForm.querySelectorAll('input, select, textarea');

    inputs.forEach(input => {
        // Real-time validation on blur
        input.addEventListener('blur', () => {
            validateField(input);
        });

        // Clear error on input
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                clearFieldError(input);
            }
        });
    });
}

function validateField(field) {
    const fieldName = field.name;
    const fieldValue = field.type === 'checkbox' ? field.checked : field.value.trim();
    const rules = validationRules[fieldName];

    if (!rules) return true;

    // Required validation
    if (rules.required && !fieldValue) {
        showFieldError(field, rules.message || 'This field is required');
        return false;
    }

    // Skip other validations if field is empty and not required
    if (!fieldValue) {
        clearFieldError(field);
        return true;
    }

    // Pattern validation
    if (rules.pattern && !rules.pattern.test(fieldValue)) {
        showFieldError(field, rules.message);
        return false;
    }

    // Min length validation
    if (rules.minLength && fieldValue.length < rules.minLength) {
        showFieldError(field, rules.message);
        return false;
    }

    // Field is valid
    showFieldSuccess(field);
    return true;
}

function showFieldError(field, message) {
    field.classList.add('error');
    field.classList.remove('success');

    const validationMessage = field.parentElement.querySelector('.validation-message');
    if (validationMessage) {
        validationMessage.textContent = message;
        validationMessage.classList.add('show');
        validationMessage.classList.remove('success');
    }
}

function showFieldSuccess(field) {
    field.classList.remove('error');
    field.classList.add('success');

    const validationMessage = field.parentElement.querySelector('.validation-message');
    if (validationMessage) {
        validationMessage.textContent = '✓ Looks good!';
        validationMessage.classList.add('show', 'success');
    }
}

function clearFieldError(field) {
    field.classList.remove('error', 'success');

    const validationMessage = field.parentElement.querySelector('.validation-message');
    if (validationMessage) {
        validationMessage.textContent = '';
        validationMessage.classList.remove('show', 'success');
    }
}

function validateStep(stepNumber) {
    const currentStepElement = document.querySelector(`.form-step[data-step="${stepNumber}"]`);
    const inputs = currentStepElement.querySelectorAll('input[required], select[required]');

    let isValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    return isValid;
}

// ============================================
// Form Navigation
// ============================================
function initFormNavigation() {
    // Next buttons
    const nextButtons = document.querySelectorAll('.btn-next');
    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            const nextStep = parseInt(button.getAttribute('data-next'));

            if (validateStep(appState.currentStep)) {
                saveStepData(appState.currentStep);
                goToStep(nextStep);
            }
        });
    });

    // Previous buttons
    const prevButtons = document.querySelectorAll('.btn-prev');
    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            const prevStep = parseInt(button.getAttribute('data-prev'));
            goToStep(prevStep);
        });
    });

    // Form submission
    elements.registrationForm.addEventListener('submit', handleFormSubmit);
}

function goToStep(stepNumber) {
    // Update form steps
    elements.formSteps.forEach(step => {
        step.classList.remove('active');
        if (parseInt(step.getAttribute('data-step')) === stepNumber) {
            step.classList.add('active');
        }
    });

    // Update progress indicator
    elements.progressSteps.forEach((step, index) => {
        const stepNum = index + 1;
        step.classList.remove('active', 'completed');

        if (stepNum < stepNumber) {
            step.classList.add('completed');
        } else if (stepNum === stepNumber) {
            step.classList.add('active');
        }
    });

    // Update current step
    appState.currentStep = stepNumber;

    // Update review section if on step 3
    if (stepNumber === 3) {
        updateReviewSection();
    }

    // Scroll to form
    document.getElementById('register').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function saveStepData(stepNumber) {
    const currentStepElement = document.querySelector(`.form-step[data-step="${stepNumber}"]`);
    const inputs = currentStepElement.querySelectorAll('input, select, textarea');

    inputs.forEach(input => {
        if (input.type === 'checkbox') {
            appState.formData[input.name] = input.checked;
        } else {
            appState.formData[input.name] = input.value;
        }
    });
}

function updateReviewSection() {
    // Update personal information
    document.getElementById('reviewName').textContent = appState.formData.fullName || '-';
    document.getElementById('reviewEmail').textContent = appState.formData.email || '-';
    document.getElementById('reviewPhone').textContent = appState.formData.phone || '-';

    // Update academic details
    document.getElementById('reviewRoll').textContent = appState.formData.rollNumber || '-';

    // Get department text from select option
    const deptSelect = document.getElementById('department');
    const deptText = deptSelect.options[deptSelect.selectedIndex]?.text || '-';
    document.getElementById('reviewDept').textContent = deptText;

    // Get year text from select option
    const yearSelect = document.getElementById('year');
    const yearText = yearSelect.options[yearSelect.selectedIndex]?.text || '-';
    document.getElementById('reviewYear').textContent = yearText;
}

// ============================================
// Form Submission
// ============================================
function handleFormSubmit(e) {
    e.preventDefault();

    // Validate terms checkbox
    const termsCheckbox = document.getElementById('terms');
    if (!validateField(termsCheckbox)) {
        return;
    }

    // Save final step data
    saveStepData(appState.currentStep);

    // Simulate form submission
    submitForm();
}

function submitForm() {
    // Show loading state
    const submitButton = document.querySelector('.btn-submit');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = '<span>Processing...</span>';
    submitButton.disabled = true;
    submitButton.classList.add('loading');

    // Simulate API call
    setTimeout(() => {
        // Log form data (in production, this would be sent to a server)
        console.log('Form submitted with data:', appState.formData);

        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
        submitButton.classList.remove('loading');

        // Show success modal
        showSuccessModal();

        // Reset form after a delay
        setTimeout(() => {
            resetForm();
        }, 3000);
    }, 2000);
}

// ============================================
// Modal Handlers
// ============================================
function initModalHandlers() {
    // Close modal button
    elements.closeModal.addEventListener('click', hideSuccessModal);

    // Close on overlay click
    const modalOverlay = document.querySelector('.modal-overlay');
    modalOverlay.addEventListener('click', hideSuccessModal);

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.successModal.classList.contains('show')) {
            hideSuccessModal();
        }
    });
}

function showSuccessModal() {
    elements.successModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function hideSuccessModal() {
    elements.successModal.classList.remove('show');
    document.body.style.overflow = '';
}

// ============================================
// Form Reset
// ============================================
function resetForm() {
    // Reset form
    elements.registrationForm.reset();

    // Clear validation states
    const inputs = elements.registrationForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        clearFieldError(input);
    });

    // Reset state
    appState.formData = {};

    // Go back to step 1
    goToStep(1);
}

// ============================================
// Utility Functions
// ============================================
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

// ============================================
// Error Handling
// ============================================
window.addEventListener('error', (e) => {
    console.error('An error occurred:', e.error);
});

// ============================================
// Performance Optimization
// ============================================
// Lazy load images if any are added
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Accessibility Enhancements
// ============================================
// Trap focus in modal
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    });
}

// Apply focus trap to modal
const modalContent = document.querySelector('.modal-content');
if (modalContent) {
    trapFocus(modalContent);
}

// ============================================
// Console Message
// ============================================
console.log('%c🎉 Mozilla Firefox Club Event Portal', 'color: #FF7139; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with ❤️ for the Open Web', 'color: #5F2E83; font-size: 14px;');
console.log('%cEvent Date:', 'color: #0060DF; font-weight: bold;', appState.eventDate.toLocaleDateString());
