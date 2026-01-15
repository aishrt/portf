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
                        <a href="index.html#home" class="nav-link smoothScroll">About Us</a>
                    </li>

                    <li class="nav-item">
                        <a href="index.html#about" class="nav-link smoothScroll">About Suman Lata</a>
                    </li>
                    
                    <li class="nav-item">
                        <a href="index.html#courses" class="nav-link smoothScroll">Courses</a>
                    </li>

                    <li class="nav-item">
                        <a href="double-your-profits.html" class="nav-link fw-bold text-danger">Profit Growth 2026</a>
                    </li>

                    <li class="nav-item">
                        <a href="index.html#contact" class="nav-link smoothScroll btn-primary">Inquiry</a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
    `,
    footer: `
    <footer class="site-footer">
        <div class="container">
            <div class="row g-4 align-items-center">
                <div class="col-lg-4 col-md-6 col-12 text-center text-md-start">
                    <img src="images/logo.png" alt="Bestow Group" height="40" class="mb-3">
                    <p class="small text-muted">One-Stop Solution Partner for end-to-end people and business development.</p>
                </div>

                <div class="col-lg-4 col-md-6 col-12 text-center">
                    <div class="mb-3">
                        <a href="tel:8950336844" class="text-decoration-none text-dark fw-bold"><i class="fa fa-phone me-2 text-primary"></i> 8950336844</a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12 col-12 text-center text-lg-end">
                    <p class="copyright-text small mb-0">&copy; 2026 <strong>Bestow Group</strong>.
                        <br><span class="opacity-50 text-uppercase" style="font-size: 10px; letter-spacing: 1px;">Powered by Bestow Development India</span>
                    </p>
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
