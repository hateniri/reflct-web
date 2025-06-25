// Catalog data
const catalogData = [
    { id: 1, title: "東京国立博物館", category: "美術館", views: "5.2K" },
    { id: 2, title: "森美術館 特別展示", category: "美術館", views: "3.8K" },
    { id: 3, title: "六本木ヒルズ 森タワー", category: "オフィスビル", views: "4.1K" },
    { id: 4, title: "渋谷スクランブルスクエア", category: "オフィスビル", views: "2.7K" },
    { id: 5, title: "隈研吾 建築作品", category: "建築空間", views: "6.5K" },
    { id: 6, title: "安藤忠雄 光の教会", category: "建築空間", views: "7.2K" },
    { id: 7, title: "新宿御苑 四季の風景", category: "公園", views: "3.1K" },
    { id: 8, title: "上野公園 桜並木", category: "公園", views: "4.9K" },
    { id: 9, title: "トヨタ自動車 工場見学", category: "工場", views: "2.3K" },
    { id: 10, title: "製鉄所 内部空間", category: "工場", views: "1.8K" },
    { id: 11, title: "富士山 雲海", category: "自然", views: "8.4K" },
    { id: 12, title: "屋久島 原生林", category: "自然", views: "5.7K" },
    { id: 13, title: "銀座シックス", category: "商業施設", views: "3.5K" },
    { id: 14, title: "表参道ヒルズ", category: "商業施設", views: "2.9K" },
    { id: 15, title: "お台場 海浜公園", category: "屋外空間", views: "3.3K" },
    { id: 16, title: "横浜みなとみらい", category: "屋外空間", views: "4.6K" },
    { id: 17, title: "teamLab Borderless", category: "美術館", views: "9.1K" },
    { id: 18, title: "日産 グローバル本社", category: "オフィスビル", views: "2.1K" }
];

// DOM Elements
const header = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const catalogGrid = document.getElementById('catalog');
const filterTabs = document.querySelectorAll('.filter-tab');
const loadMoreBtn = document.querySelector('.load-more-btn');

// State
let currentFilter = 'すべて';
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
    const filteredData = currentFilter === 'すべて' 
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