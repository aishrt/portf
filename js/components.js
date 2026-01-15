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

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto ml-auto align-items-lg-center">
                 
                    <li class="nav-item">
                        <a href="about.html" class="nav-link">About Us</a>
                    </li>

                    <li class="nav-item">
                        <a href="about.html#coach" class="nav-link">About Suman Lata</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="programsDropdown">Programs</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="about.html#courses">AI Professional</a></li>
                            <li><a class="dropdown-item" href="about.html#courses">HR Generalist</a></li>
                            <li><a class="dropdown-item" href="about.html#courses">Accounts & Finance</a></li>
                            <li><a class="dropdown-item" href="about.html#courses">Sales & Marketing</a></li>
                            <li><hr class="dropdown-divider mx-3 opacity-10"></li>
                            <li><a class="dropdown-item fw-bold text-danger" href="double-your-profits.html">Profit Growth 2026</a></li>
                        </ul>
                    </li>
                    
                    <li class="nav-item">
                        <a href="about.html#enroll" class="nav-link btn-primary">Inquiry</a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
    `,
    footer: `
    <footer class="site-footer">
        <div class="container">
            <div class="row g-4 justify-content-between align-items-center">
                <div class="col-lg-4 col-md-6 col-12 text-center text-md-start">
        <img src="images/logo.png" alt="Bestow Group" height="50" id="nav-logo">                    <p class="mb-0">One-Stop Solution Partner for end-to-end people and business development.</p>
                </div>

                <div class="col-lg-3 col-md-6 col-12 text-center">
                    <div class="d-flex flex-column gap-2">
                        <a href="tel:8950336844" class="fs-5"><i class="fa fa-phone"></i> 8950336844</a>
                        <p class="small opacity-75 mb-0">Contact us for immediate assistance</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12 col-12 text-center text-lg-end">
                    <p class="mb-2">&copy; 2026 <strong>Bestow Group</strong>. All Rights Reserved.</p>
                    <div class="pt-2 border-top border-secondary border-opacity-25">
                        <span class="small opacity-50 text-uppercase" style="font-size: 10px; letter-spacing: 2px;">Powered by Bestow Development India</span>
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
