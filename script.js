// Catalog data
const catalogData = [
    { id: 1, title: "Urban Explorer", category: "architecture", views: "2.3K" },
    { id: 2, title: "Forest Dreams", category: "nature", views: "1.8K" },
    { id: 3, title: "Digital Art Space", category: "art", views: "3.1K" },
    { id: 4, title: "Ocean Depths", category: "nature", views: "2.7K" },
    { id: 5, title: "Modern Gallery", category: "architecture", views: "1.5K" },
    { id: 6, title: "Cosmic Journey", category: "science", views: "4.2K" },
    { id: 7, title: "Mountain Peak", category: "nature", views: "2.1K" },
    { id: 8, title: "Abstract Reality", category: "art", views: "1.9K" },
    { id: 9, title: "City Lights", category: "architecture", views: "3.5K" },
    { id: 10, title: "Molecular View", category: "science", views: "1.3K" },
    { id: 11, title: "Desert Oasis", category: "nature", views: "2.4K" },
    { id: 12, title: "Sculpture Garden", category: "art", views: "1.7K" }
];

// DOM Elements
const header = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const catalogGrid = document.getElementById('catalog');
const filterTabs = document.querySelectorAll('.filter-tab');
const loadMoreBtn = document.querySelector('.load-more-btn');

// State
let currentFilter = 'all';
let itemsDisplayed = 6;

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    
    // Animate menu button
    const spans = menuToggle.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-6px)';
    } else {
        spans.forEach(span => {
            span.style.transform = '';
            span.style.opacity = '';
        });
    }
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-nav a, .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
        
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = '';
            span.style.opacity = '';
        });
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Catalog filtering
filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentFilter = tab.textContent.toLowerCase();
        itemsDisplayed = 6;
        renderCatalog();
    });
});

// Render catalog items
function renderCatalog() {
    const filteredData = currentFilter === 'all' 
        ? catalogData 
        : catalogData.filter(item => item.category === currentFilter);
    
    const itemsToShow = filteredData.slice(0, itemsDisplayed);
    
    catalogGrid.innerHTML = itemsToShow.map((item, index) => `
        <div class="catalog-item" style="animation-delay: ${index * 0.1}s">
            <div class="catalog-preview">
                <div class="placeholder-3d">
                    <div class="preview-overlay">
                        <button class="play-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="catalog-info">
                <h3 class="catalog-title">${item.title}</h3>
                <p class="catalog-meta">${item.views} views • ${item.category}</p>
            </div>
        </div>
    `).join('');
    
    // Update load more button visibility
    loadMoreBtn.style.display = itemsToShow.length < filteredData.length ? 'block' : 'none';
    
    // Add click handlers to catalog items
    document.querySelectorAll('.catalog-item').forEach(item => {
        item.addEventListener('click', () => {
            console.log('3DGS viewer would open here');
            // Future: Open 3DGS viewer
        });
    });
}

// Load more functionality
loadMoreBtn.addEventListener('click', () => {
    itemsDisplayed += 6;
    renderCatalog();
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe featured items
document.querySelectorAll('.featured-item').forEach(item => {
    observer.observe(item);
});

// Parallax effect for hero orbs
let ticking = false;
function updateParallax() {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.floating-orb');
    
    orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.2);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);

// Initialize
renderCatalog();

// Add hover effect to buttons
document.querySelectorAll('.btn, .play-btn').forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            background: rgba(255,255,255,0.3);
            border-radius: 50%;
            pointer-events: none;
            transform: translate(-50%, -50%);
            animation: ripple 0.6s ease-out;
            left: ${x}px;
            top: ${y}px;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        from {
            width: 0;
            height: 0;
            opacity: 1;
        }
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Preload optimization
if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
        // Preload critical resources
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap';
        document.head.appendChild(link);
    });
}