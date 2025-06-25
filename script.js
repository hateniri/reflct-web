// Reflct configuration
const REFLCT_CONFIG = {
    apiKey: '3xrQFbtVtXfrLzt1Ir6AS0', // UPHASH Reflct API key
    defaultSceneId: 'baf502d8-d568-4b5a-affe-d2a62830d815', // UPHASH scene
    // Public demo scenes from Reflct showcase
    demoScenes: {
        'bois-studio': 'ZGUyMDY1MjEtZmFmNi00ODFlLWI0MmYtODY0ZGE4YWJlY2FkOjdoVWM0MVB0elVQa0R1Q3pKbW0zbWQ=',
        'interior-scan': 'NTc4MGVkM2MtZDA1MS00YjEyLTg4M2EtOTA4Nzk2YjhjNGU4OjNCUmk3YURuQWk0WjUyUEREUThzY1M%3D',
        'castle-winter': 'OTk0ZTNiYmYtY2UzYy00MGI2LWEyM2ItZjlkMTc0ZWYyMWY0OjNCUmk3YURuQWk0WjUyUEREUThzY1M='
    },
    // UPHASH custom scenes
    customScenes: {
        'uphash-scene-1': 'baf502d8-d568-4b5a-affe-d2a62830d815',
        'uphash-scene-2': '016b6bab-850b-4224-9619-3b7ea0569776'
    }
};

// Catalog data with enhanced structure
const catalogData = [
    { 
        id: 1, 
        title: "東京国立博物館", 
        category: "美術館", 
        views: "5.2K",
        description: "日本最古の博物館。国宝や重要文化財を含む約12万件の収蔵品を誇る、日本文化の宝庫。",
        duration: "15分",
        year: "2024",
        spaces: ["本館", "東洋館", "平成館"],
        tags: ["文化財", "歴史", "アート"],
        reflctSceneIds: {
            "本館": "uphash-scene-2",
            "東洋館": "interior-scan", 
            "平成館": "castle-winter"
        }
    },
    { 
        id: 2, 
        title: "森美術館 特別展示", 
        category: "美術館", 
        views: "3.8K",
        description: "六本木ヒルズ53階にある現代アートの美術館。東京の景色と共に楽しむアート体験。",
        duration: "20分",
        year: "2024",
        spaces: ["展示室A", "展示室B", "スカイデッキ"],
        tags: ["現代アート", "夜景", "六本木"],
        reflctSceneIds: {
            "展示室A": "interior-scan",
            "展示室B": "bois-studio", 
            "スカイデッキ": "castle-winter"
        }
    },
    { 
        id: 3, 
        title: "六本木ヒルズ 森タワー", 
        category: "オフィスビル", 
        views: "4.1K",
        description: "東京を代表する複合施設。最新のオフィス環境と都市機能が融合した空間。",
        duration: "12分",
        year: "2023",
        spaces: ["エントランス", "オフィスフロア", "展望台"],
        tags: ["高層ビル", "オフィス", "複合施設"],
        reflctSceneIds: {
            "エントランス": "interior-scan",
            "オフィスフロア": "bois-studio", 
            "展望台": "castle-winter"
        }
    },
    { 
        id: 4, 
        title: "渋谷スクランブルスクエア", 
        category: "オフィスビル", 
        views: "2.7K",
        description: "渋谷の新しいランドマーク。最上階の展望施設「SHIBUYA SKY」から360度の眺望。",
        duration: "18分",
        year: "2024",
        spaces: ["SHIBUYA SKY", "オフィスエリア", "商業エリア"],
        tags: ["展望台", "渋谷", "新建築"],
        reflctSceneIds: {
            "SHIBUYA SKY": "uphash-scene-1",
            "オフィスエリア": "interior-scan", 
            "商業エリア": "bois-studio"
        }
    },
    { 
        id: 5, 
        title: "隈研吾 建築作品", 
        category: "建築空間", 
        views: "6.5K",
        description: "木材を活かした温かみのある建築。自然と調和する日本の新しい建築美。",
        duration: "25分",
        year: "2023",
        spaces: ["国立競技場", "根津美術館", "サニーヒルズ"],
        tags: ["建築", "木造", "デザイン"],
        reflctSceneIds: {
            "国立競技場": "castle-winter",
            "根津美術館": "interior-scan", 
            "サニーヒルズ": "bois-studio"
        }
    },
    { 
        id: 6, 
        title: "安藤忠雄 光の教会", 
        category: "建築空間", 
        views: "7.2K",
        description: "コンクリートと光が生み出す神聖な空間。世界的建築家の代表作を体験。",
        duration: "15分",
        year: "2023",
        spaces: ["礼拝堂", "光の十字架", "外観"],
        tags: ["建築", "教会", "光"],
        reflctSceneIds: {
            "礼拝堂": "bois-studio",
            "光の十字架": "interior-scan", 
            "外観": "castle-winter"
        }
    },
    { 
        id: 7, 
        title: "新宿御苑 四季の風景", 
        category: "公園", 
        views: "3.1K",
        description: "都心のオアシス。日本庭園、イギリス風景式庭園、フランス式整形庭園が楽しめる。",
        duration: "30分",
        year: "2024",
        spaces: ["日本庭園", "大温室", "桜園"],
        tags: ["庭園", "自然", "四季"]
    },
    { 
        id: 8, 
        title: "上野公園 桜並木", 
        category: "公園", 
        views: "4.9K",
        description: "春の風物詩。約1000本の桜が咲き誇る、日本有数の花見スポット。",
        duration: "20分",
        year: "2024",
        spaces: ["さくら通り", "不忍池", "清水観音堂"],
        tags: ["桜", "花見", "文化"]
    },
    { 
        id: 9, 
        title: "トヨタ自動車 工場見学", 
        category: "工場", 
        views: "2.3K",
        description: "最先端の自動車製造技術。ロボットと人が協働する未来の工場。",
        duration: "40分",
        year: "2023",
        spaces: ["組立ライン", "塗装工程", "品質検査"],
        tags: ["製造業", "テクノロジー", "自動車"]
    },
    { 
        id: 10, 
        title: "製鉄所 内部空間", 
        category: "工場", 
        views: "1.8K",
        description: "1000度を超える高炉の迫力。日本の産業を支える鉄づくりの現場。",
        duration: "35分",
        year: "2023",
        spaces: ["高炉", "転炉", "圧延工程"],
        tags: ["重工業", "製鉄", "産業遺産"]
    },
    { 
        id: 11, 
        title: "富士山 雲海", 
        category: "自然", 
        views: "8.4K",
        description: "日本の象徴を雲の上から。神秘的な雲海と共に見る霊峰富士。",
        duration: "25分",
        year: "2024",
        spaces: ["山頂", "五合目", "雲海展望"],
        tags: ["世界遺産", "絶景", "自然"],
        reflctSceneIds: {
            "山頂": "castle-winter",
            "五合目": "bois-studio", 
            "雲海展望": "castle-winter"
        }
    },
    { 
        id: 12, 
        title: "屋久島 原生林", 
        category: "自然", 
        views: "5.7K",
        description: "樹齢1000年を超える屋久杉の森。世界自然遺産の神秘的な原生林を探索。",
        duration: "45分",
        year: "2024",
        spaces: ["縄文杉", "白谷雲水峡", "ヤクスギランド"],
        tags: ["世界遺産", "原生林", "屋久杉"]
    },
    { 
        id: 13, 
        title: "銀座シックス", 
        category: "商業施設", 
        views: "3.5K",
        description: "銀座の新しい顔。アートと商業が融合した最先端の複合施設。",
        duration: "22分",
        year: "2023",
        spaces: ["中央吹き抜け", "屋上庭園", "アートスペース"],
        tags: ["ショッピング", "アート", "銀座"]
    },
    { 
        id: 14, 
        title: "表参道ヒルズ", 
        category: "商業施設", 
        views: "2.9K",
        description: "安藤忠雄設計の都市建築。表参道の地形を活かしたスパイラル構造。",
        duration: "18分",
        year: "2023",
        spaces: ["スパイラルスロープ", "大階段", "屋上"],
        tags: ["建築", "ファッション", "表参道"]
    },
    { 
        id: 15, 
        title: "お台場 海浜公園", 
        category: "屋外空間", 
        views: "3.3K",
        description: "東京湾に面した人工ビーチ。レインボーブリッジと都心の夜景が楽しめる。",
        duration: "20分",
        year: "2024",
        spaces: ["ビーチ", "展望デッキ", "自由の女神"],
        tags: ["海", "夜景", "レジャー"]
    },
    { 
        id: 16, 
        title: "横浜みなとみらい", 
        category: "屋外空間", 
        views: "4.6K",
        description: "未来都市の景観。歴史的建造物と最新の高層ビルが調和する港町。",
        duration: "30分",
        year: "2024",
        spaces: ["赤レンガ倉庫", "コスモワールド", "臨港パーク"],
        tags: ["港", "夜景", "観光"]
    },
    { 
        id: 17, 
        title: "teamLab Borderless", 
        category: "美術館", 
        views: "9.1K",
        description: "境界のないアート。デジタルアートが創り出す没入型の体験空間。",
        duration: "60分",
        year: "2024",
        spaces: ["Borderless World", "運動の森", "EN Tea House"],
        tags: ["デジタルアート", "体験型", "お台場"],
        reflctSceneIds: {
            "Borderless World": "uphash-scene-2",
            "運動の森": "uphash-scene-1", 
            "EN Tea House": "interior-scan"
        }
    },
    { 
        id: 18, 
        title: "日産 グローバル本社", 
        category: "オフィスビル", 
        views: "2.1K",
        description: "自動車メーカーの最新オフィス。ショールームと一体化した開かれた企業空間。",
        duration: "15分",
        year: "2023",
        spaces: ["ギャラリー", "オフィスフロア", "イベントホール"],
        tags: ["企業", "自動車", "横浜"]
    }
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

// Check if mobile view
function isMobileView() {
    return window.innerWidth <= 768;
}

// Render catalog items
function renderCatalog() {
    const filteredData = currentFilter === 'すべて' 
        ? catalogData 
        : catalogData.filter(item => item.category === currentFilter);
    
    const itemsToShow = filteredData.slice(0, itemsDisplayed);
    const isMobile = isMobileView();
    
    // Add mobile-view class to grid
    if (isMobile) {
        catalogGrid.classList.add('mobile-view');
    } else {
        catalogGrid.classList.remove('mobile-view');
    }
    
    catalogGrid.innerHTML = itemsToShow.map((item, index) => `
        <div class="catalog-item" data-id="${item.id}" style="animation-delay: ${index * 0.1}s">
            <div class="catalog-preview ${isMobile ? 'vertical' : ''}">
                <div class="placeholder-3d">
                    <span class="preview-number">${item.id}</span>
                </div>
            </div>
            <div class="catalog-info ${isMobile ? 'mobile' : ''}">
                <h3 class="catalog-title ${isMobile ? 'mobile' : ''}">${item.title}</h3>
                <p class="catalog-meta ${isMobile ? 'mobile' : ''}">${item.views} • ${item.duration}</p>
                ${!isMobile ? `
                    <div class="catalog-tags">
                        ${item.tags.slice(0, 2).map(tag => `<span class="catalog-tag">${tag}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');
    
    // Update load more button visibility
    loadMoreBtn.style.display = itemsToShow.length < filteredData.length ? 'block' : 'none';
    
    // Add click handlers to catalog items
    document.querySelectorAll('.catalog-item').forEach(item => {
        item.addEventListener('click', () => {
            const itemId = item.getAttribute('data-id');
            window.location.href = `detail.html?id=${itemId}`;
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

// Re-render on window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        renderCatalog();
    }, 250);
});

// Add click handlers to featured items
document.querySelectorAll('.featured-item').forEach(item => {
    item.addEventListener('click', () => {
        const itemId = item.getAttribute('data-id');
        if (itemId) {
            window.location.href = `detail.html?id=${itemId}`;
        }
    });
});

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