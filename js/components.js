/**
 * components.js
 * Injects common layout components (Header and Footer)
 * This method works both on servers and when viewing locally via file://
 */

const components = {
    header: `
    <!-- MENU BAR -->
    <nav class="navbar navbar-expand-lg fixed-top shadow-sm" id="main-navbar">
        <div class="container">

            <a class="navbar-brand" href="index.html">
                <img src="images/logo.png" alt="Bestow Group" height="50" id="nav-logo">
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-lg-center">
           
                     <li class="nav-item">
                        <a href="INDEX.html" class="nav-link">SUMAN LATA</a>
                    </li>
                    
                    <li class="nav-item">
                        <a href="about.html" class="nav-link">ABOUT US</a>
                    </li>

                  

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="programsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            PRACTICAL LEARNING PROGRAMS
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="index.html#courses">AI Professional</a></li>
                          
                            <li><hr class="dropdown-divider mx-3 opacity-10"></li>
                            <li><a class="dropdown-item fw-bold text-danger" href="double-your-profits.html">PROFIT GROWTH 2026</a></li>
                        </ul>
                    </li>
                       <li class="nav-item">
                        <a href="workshops.html" class="nav-link">WORKSHOP</a>
                    </li>
                    
                    <li class="nav-item">
                        <a href="about.html#enroll" class="nav-link btn-primary">INQUIRY</a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
    `,
    footer: `
    <footer class="site-footer">
        <div class="container">
            <div class="row">
                <!-- Company Info -->
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <h4 class="mb-4 text-white fw-bold" style="letter-spacing: 1px;">BESTOW <span style="color: #38bdf8;">GROUP</span></h4>
                    <p class="footer-text">One-Stop Solution Partner and a trusted coach for end-to-end people and business development. We help people and organizations scale sustainably, improve performance, and build future-ready capabilities.</p>
                    <div class="social-icons">
                        <a href="#" class="social-icon-btn"><i class="fa fa-facebook"></i></a>
                        <a href="#" class="social-icon-btn"><i class="fa fa-linkedin"></i></a>
                        <a href="#" class="social-icon-btn"><i class="fa fa-instagram"></i></a>
                        <a href="#" class="social-icon-btn"><i class="fa fa-twitter"></i></a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="col-lg-2 col-md-4 col-sm-6 mb-4 mb-lg-0">
                    <h5 class="footer-title">Quick Links</h5>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="index.html">Suman Lata</a></li>
                        <li><a href="double-your-profits.html">Growth Program</a></li>
                        <li><a href="about.html#enroll">Contact Us</a></li>
                    </ul>
                </div>

                <!-- Programs -->
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4 mb-lg-0">
                    <h5 class="footer-title">Our Programs</h5>
                    <ul class="footer-links">
                        <li><a href="double-your-profits.html">AI Professional</a></li>
                        <li><a href="double-your-profits.html">HR Generalist</a></li>
                        <li><a href="double-your-profits.html">Accounts & Finance</a></li>
                        <li><a href="double-your-profits.html">Sales & Marketing</a></li>
                        <li><a href="workshops.html">Workshops</a></li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div class="col-lg-3 col-md-4 col-sm-12">
                    <h5 class="footer-title">Get In Touch</h5>
                    <div class="contact-info">
                        <div class="contact-item">
                            <i class="fa fa-phone"></i>
                            <div class="contact-content">
                                <h6>Call / WhatsApp</h6>
                                <p>8950336844</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fa fa-envelope"></i>
                            <div class="contact-content">
                                <h6>Email Us</h6>
                                <p>info@bestowgroup.com</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <i class="fa fa-globe"></i>
                            <div class="contact-content">
                                <h6>Our Website</h6>
                                <p>bestowgroup.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="row">
                <div class="col-12">
                    <div class="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
                        <p class="mb-md-0">&copy; 2026 <strong>Bestow Group</strong>. All Rights Reserved.</p>
                        <p class="mb-0">Powered by <a href="https://bestowindia.com" target="_blank">Bestow Development India</a></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `
};

document.addEventListener("DOMContentLoaded", function () {
    // Inject Header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = components.header;
        highlightActiveLink();

        // MANUALLY INITIALIZE BOOTSTRAP COMPONENTS (Required for dynamic injection)
        const navbarToggler = headerPlaceholder.querySelector('.navbar-toggler');
        const navbarCollapse = headerPlaceholder.querySelector('.navbar-collapse');
        const dropdownToggles = headerPlaceholder.querySelectorAll('.dropdown-toggle');

        if (navbarToggler && navbarCollapse && typeof bootstrap !== 'undefined') {
            new bootstrap.Collapse(navbarCollapse, { toggle: false });
        }

        if (dropdownToggles.length > 0 && typeof bootstrap !== 'undefined') {
            dropdownToggles.forEach(toggle => {
                new bootstrap.Dropdown(toggle);
            });
        }

        // Scroll listener for professional sticky effect
        const navbar = document.getElementById('main-navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }

    // Inject Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = components.footer;
    }

    // Re-initialize smooth scroll if function exists
    if (window.jQuery && typeof jQuery.localScroll === 'function') {
        jQuery.localScroll({ filter: '.smoothScroll' });
    }

    // Helper to highlight current page in nav
    function highlightActiveLink() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && (currentPath.endsWith(href) || (href === 'index.html' && (currentPath === '/' || currentPath === '' || currentPath.endsWith('/'))))) {
                link.classList.add('active');
            }
        });
    }
});
