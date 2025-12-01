// script.js - Full Version with Smart PC Builder & Compatibility Check

// ==========================================
// 1. Category Titles
// ==========================================
const categoryTitles = {
    cpu: "Processors",
    gpu: "Graphics Cards",
    ram: "RAM",
    storage: "Storage",
    case: "PC Cases",
    motherboard: "Motherboards",
    monitor: "Monitors",
    laptop: "Laptops & Notebooks",
    psu: "PSUs",
    accessories: "Gaming Gear & Accessories"
};

// ==========================================
// 2. Products Data (Updated with Sockets & RAM Types)
// ==========================================
const productsData = [
    // --- CPUs (Added: socket) ---
    { id: 101, category: "cpu", name: "Intel Core i9-13900K", price: 28500, img: "img/Intel Core i9-13900K.jpg", desc: "The All-Rounder Beast.", socket: "LGA1700" },
    { id: 102, category: "cpu", name: "Intel Core i7-13700K", price: 21000, img: "img/Intel Core i7-13700K.jpg", desc: "The Smart High-Performance Choice.", socket: "LGA1700" },
    { id: 103, category: "cpu", name: "Intel Core i5-13600K", price: 16500, img: "img/Intel Core i5-13600K.jpg", desc: "The King of Value.", socket: "LGA1700" },
    { id: 104, category: "cpu", name: "AMD Ryzen 9 7950X", price: 31000, img: "img/AMD Ryzen 9 7950X.jpg", desc: "The Productivity Giant.", socket: "AM5" },
    { id: 105, category: "cpu", name: "AMD Ryzen 7 7800X3D", price: 23500, img: "img/AMD Ryzen 7 7800X3D.jpg", desc: "The Undisputed Gaming King.", socket: "AM5" },
    { id: 106, category: "cpu", name: "AMD Ryzen 5 7600X", price: 12500, img: "img/AMD Ryzen 5 7600X.jpg", desc: "Gateway to the New Generation (AM5).", socket: "AM5" },
    { id: 107, category: "cpu", name: "Intel Core i9-12900K", price: 24000, img: "img/Intel Core i9-12900K.jpeg", desc: "The Former Champion.", socket: "LGA1700" },
    { id: 108, category: "cpu", name: "AMD Ryzen 9 5900X", price: 19000, img: "img/AMD Ryzen 9 5900X.jpeg", desc: "Classic Power.", socket: "AM4" },
    { id: 109, category: "cpu", name: "Intel Core i5-12400F", price: 7500, img: "img/Intel Core i5-12400F.jpeg", desc: "The Budget Friend.", socket: "LGA1700" },
    { id: 110, category: "cpu", name: "AMD Ryzen 5 5600", price: 7200, img: "img/AMD Ryzen 5 5600.jpeg", desc: "The Economic Hero.", socket: "AM4" },

    // --- GPUs ---
    { id: 201, category: "gpu", name: "NVIDIA RTX 4090", price: 135000, img: "img/NVIDIA GeForce RTX 4090.jpeg", desc: "The Ultimate Beast." },
    { id: 202, category: "gpu", name: "NVIDIA RTX 4080", price: 75000, img: "img/NVIDIA GeForce RTX 4080.jpeg", desc: "The Powerful Runner-Up." },
    { id: 203, category: "gpu", name: "NVIDIA RTX 4070 Ti", price: 52000, img: "img/NVIDIA GeForce RTX 4070 Ti.jpeg", desc: "The Balanced Modern Choice." },
    { id: 204, category: "gpu", name: "NVIDIA RTX 4060 Ti", price: 26000, img: "img/NVIDIA GeForce RTX 4060 Ti.jpeg", desc: "Next-Gen Mainstream." },
    { id: 205, category: "gpu", name: "AMD Radeon RX 7900 XTX", price: 68000, img: "img/AMD Radeon RX 7900 XTX.avif", desc: "AMD's Heavy Hitter." },
    { id: 206, category: "gpu", name: "AMD Radeon RX 7800 XT", price: 34000, img: "img/AMD Radeon RX 7800 XT.jpeg", desc: "The Value King." },
    { id: 207, category: "gpu", name: "AMD Radeon RX 7600", price: 16000, img: "img/AMD Radeon RX 7600.jpeg", desc: "The Budget Modern Starter." },
    { id: 208, category: "gpu", name: "NVIDIA RTX 3060", price: 18500, img: "img/NVIDIA GeForce RTX 3060.jpeg", desc: "The People's Champion." },
    { id: 209, category: "gpu", name: "NVIDIA GTX 1660 Super", price: 12500, img: "img/NVIDIA GeForce GTX 1660 Super.jpeg", desc: "The Old Classic." },
    { id: 210, category: "gpu", name: "AMD Radeon RX 6700 XT", price: 22000, img: "img/AMD Radeon RX 6700 XT.jpeg", desc: "The Reliable Veteran." },

    // --- RAM (Added: ramType) ---
    { id: 301, category: "ram", name: "Corsair Vengeance RGB DDR5 32GB", price: 8500, img: "img/1. Corsair Vengeance RGB DDR5 32GB (2x16GB).jpeg", desc: "The Modern All-Rounder.", ramType: "DDR5" },
    { id: 302, category: "ram", name: "Kingston Fury Beast DDR5 16GB", price: 4200, img: "img/Kingston Fury Beast DDR5 16GB (2x8GB).jpeg", desc: "Budget Entry to Next-Gen.", ramType: "DDR5" },
    { id: 303, category: "ram", name: "G.Skill Trident Z5 RGB DDR5 32GB", price: 9800, img: "img/3. G.Skill Trident Z5 RGB DDR5 32GB.jpeg", desc: "Elite Performance & Luxury.", ramType: "DDR5" },
    { id: 304, category: "ram", name: "Crucial Ballistix DDR4 16GB", price: 2500, img: "img/Crucial Ballistix DDR4 16GB.jpeg", desc: "Reliability & Simplicity.", ramType: "DDR4" },
    { id: 305, category: "ram", name: "Corsair Dominator Platinum DDR4 32GB", price: 6500, img: "img/Corsair Dominator Platinum DDR4 32GB.jpeg", desc: "The Premium Choice.", ramType: "DDR4" },
    { id: 306, category: "ram", name: "Adata XPG D50 DDR4 16GB", price: 2800, img: "img/Adata XPG D50 DDR4 16GB.jpeg", desc: "Clean Geometric Design.", ramType: "DDR4" },
    { id: 307, category: "ram", name: "Patriot Viper Steel DDR4 32GB", price: 4800, img: "img/Patriot Viper Steel DDR4 32GB.jpeg", desc: "The Industrial Beast.", ramType: "DDR4" },
    { id: 308, category: "ram", name: "Team T-Force Delta RGB DDR5 32GB", price: 7200, img: "img/Team T-Force Delta RGB DDR5 32GB.jpeg", desc: "For RGB Lovers.", ramType: "DDR5" },
    { id: 309, category: "ram", name: "HyperX Predator DDR4 16GB", price: 3200, img: "img/HyperX Predator DDR4 16GB.jpeg", desc: "Aggressive Gamer Look.", ramType: "DDR4" },
    { id: 310, category: "ram", name: "Crucial DDR4 8GB", price: 1200, img: "img/Crucial DDR4 8GB.jpeg", desc: "The Basic Essential.", ramType: "DDR4" },

    // --- Motherboards (Added: socket & ramType) ---
    { id: 601, category: "motherboard", name: "ASUS ROG Strix Z790-E", price: 22000, img: "img/ASUS ROG Strix Z790-E Gaming WiFi.jfif", desc: "High-End for Intel.", socket: "LGA1700", ramType: "DDR5" },
    { id: 602, category: "motherboard", name: "MSI MPG B650 Tomahawk", price: 11500, img: "img/MSI MPG B650 Tomahawk WiFi.jpg", desc: "Mid-to-High Range for AMD AM5.", socket: "AM5", ramType: "DDR5" },
    { id: 603, category: "motherboard", name: "Gigabyte Z690 AORUS Elite", price: 14000, img: "img/Gigabyte Z690 AORUS Elite AX.jpg", desc: "High-End Previous Gen.", socket: "LGA1700", ramType: "DDR5" },
    { id: 604, category: "motherboard", name: "ASRock B550 Steel Legend", price: 8500, img: "img/ASRock B550 Steel Legend.jpg", desc: "Reliable Mid-Range for AMD AM4.", socket: "AM4", ramType: "DDR4" },
    { id: 605, category: "motherboard", name: "ASUS TUF Gaming B760-Plus", price: 9500, img: "img/ASUS TUF Gaming B760-Plus WiFi.jpg", desc: "Military-grade durability.", socket: "LGA1700", ramType: "DDR5" },
    { id: 606, category: "motherboard", name: "MSI PRO B550M-A", price: 5500, img: "img/MSI PRO B550M-A.jpg", desc: "Budget Champion for AMD.", socket: "AM4", ramType: "DDR4" },
    { id: 607, category: "motherboard", name: "Gigabyte B450 AORUS M", price: 4500, img: "img/Gigabyte B450 AORUS M.jpg", desc: "Budget older gen.", socket: "AM4", ramType: "DDR4" },
    { id: 608, category: "motherboard", name: "ASUS Prime Z790-P", price: 12000, img: "img/ASUS Prime Z790-P.jpg", desc: "Entry Z-Series.", socket: "LGA1700", ramType: "DDR5" },
    { id: 609, category: "motherboard", name: "MSI MAG B650M Mortar", price: 10500, img: "img/MSI MAG B650M Mortar.jpg", desc: "Strong Mid-Range mATX.", socket: "AM5", ramType: "DDR5" },
    { id: 610, category: "motherboard", name: "Gigabyte A620M DS3H", price: 6000, img: "img/Gigabyte A620M DS3H.jpg", desc: "Ultra Budget for AMD AM5.", socket: "AM5", ramType: "DDR5" },

    // --- Storage ---
    { id: 401, category: "storage", name: "WD Blue 1TB HDD", price: 2200, img: "img/WD Blue 1TB HDD.jpeg", desc: "Standard reliable performance." },
    { id: 402, category: "storage", name: "Seagate Barracuda 2TB HDD", price: 3100, img: "img/Seagate Barracuda 2TB HDD.jpeg", desc: "Best value for massive data." },
    { id: 403, category: "storage", name: "Toshiba P300 1TB HDD", price: 2100, img: "img/Toshiba P300 1TB HDD.jpeg", desc: "Performance-oriented mechanical drive." },
    { id: 404, category: "storage", name: "Samsung 970 EVO Plus 1TB NVMe", price: 4500, img: "img/Samsung 970 EVO Plus 1TB NVMe SSD.jpeg", desc: "The Gold Standard." },
    { id: 405, category: "storage", name: "Crucial MX500 1TB SSD", price: 3800, img: "img/Crucial MX500 1TB SSD.jpeg", desc: "King of SATA SSDs." },
    { id: 406, category: "storage", name: "Kingston A2000 500GB NVMe", price: 2200, img: "img/Kingston A2000 500GB NVMe.jpeg", desc: "Best Value for Money." },
    { id: 407, category: "storage", name: "WD Black SN850 1TB NVMe", price: 5800, img: "img/WD Black SN850 1TB NVMe SSD.jpeg", desc: "The Beast (Gen 4)." },
    { id: 408, category: "storage", name: "SanDisk Ultra 1TB SSD", price: 3600, img: "img/SanDisk Ultra 1TB SSD.jpeg", desc: "Economical and reliable boot drive." },
    { id: 409, category: "storage", name: "Lexar NM620 512GB NVMe", price: 1900, img: "img/Lexar NM620 512GB NVMe.jpeg", desc: "Solid budget NVMe." },
    { id: 410, category: "storage", name: "Adata XPG SX8200 Pro 1TB", price: 4100, img: "img/Adata XPG SX8200 Pro 1TB.jpeg", desc: "Gamers favorite." },

    // --- Cases ---
    { id: 501, category: "case", name: "Cooler Master MasterBox TD500", price: 4500, img: "img/Cooler Master MasterBox TD500 Mesh.jpeg", desc: "Crystalline Design & Airflow." },
    { id: 502, category: "case", name: "NZXT H510", price: 3800, img: "img/NZXT H510.jpeg", desc: "Minimalism & Clean Aesthetics." },
    { id: 503, category: "case", name: "Lian Li PC-O11 Dynamic", price: 7500, img: "img/Lian Li PC-O11 Dynamic.jpeg", desc: "The Ultimate Showcase." },
    { id: 504, category: "case", name: "Corsair 4000D Airflow", price: 4800, img: "img/Corsair 4000D Airflow.jpeg", desc: "Reliability & Easy Building." },
    { id: 505, category: "case", name: "DeepCool Matrexx 55 Mesh", price: 2900, img: "img/DeepCool Matrexx 55 Mesh.jpeg", desc: "Value for Money." },
    { id: 506, category: "case", name: "Fractal Design Meshify C", price: 4200, img: "img/Fractal Design Meshify C.jpeg", desc: "Compact Quality." },
    { id: 507, category: "case", name: "Thermaltake Versa H26", price: 2200, img: "img/Thermaltake Versa H26.jpeg", desc: "Practical Budget Choice." },
    { id: 508, category: "case", name: "Xigmatek Aquarius Plus", price: 5500, img: "img/Xigmatek Aquarius Plus.jpeg", desc: "Budget 'Fish Tank'." },
    { id: 509, category: "case", name: "Cooler Master Q300L", price: 2100, img: "img/Cooler Master Q300L.jfif", desc: "Small Form Factor (mATX)." },
    { id: 510, category: "case", name: "Montech Air 903 Max", price: 3500, img: "img/Montech Air 903 Max.jfif", desc: "New Performance King." },

    // --- Monitors ---
    { id: 701, category: "monitor", name: "LG UltraGear 27GL850-B", price: 14500, img: "img/LG UltraGear 27GL850-B (27 144Hz).jpg", desc: "The All-Rounder." },
    { id: 702, category: "monitor", name: "Dell UltraSharp U2723QE", price: 22000, img: "img/Dell UltraSharp U2723QE (27 4K IPS).jpg", desc: "Professional's Choice." },
    { id: 703, category: "monitor", name: "Samsung Odyssey G5", price: 13500, img: "img/Samsung Odyssey G5 (32 165Hz).jpg", desc: "The Immersion Monitor." },
    { id: 704, category: "monitor", name: "AOC 24G2SPU", price: 7500, img: "img/AOC 24G2SPU (24 165Hz).jpg", desc: "Budget King for Esports." },
    { id: 705, category: "monitor", name: "ASUS TUF Gaming VG27AQ", price: 15500, img: "img/ASUS TUF Gaming VG27AQ (27 2K 165Hz).jpg", desc: "Performance & Durability." },
    { id: 706, category: "monitor", name: "BenQ EX2780Q", price: 16000, img: "img/BenQ EX2780Q (27 144Hz).jpg", desc: "The Multimedia Monitor." },
    { id: 707, category: "monitor", name: "MSI Optix G27CQ4", price: 12500, img: "img/MSI Optix G27CQ4 (27 2K Curved).jpg", desc: "Curved Clarity." },
    { id: 708, category: "monitor", name: "HP X24c", price: 6800, img: "img/HP X24c (24 Curved).jpg", desc: "Entry-Level Curved." },
    { id: 709, category: "monitor", name: "Gigabyte M28U", price: 26000, img: "img/Gigabyte M28U (28 4K 144Hz).jpg", desc: "Next-Gen Beast." },
    { id: 710, category: "monitor", name: "Philips 242E1GSJ", price: 5500, img: "img/Philips 242E1GSJ (24 144Hz).jpg", desc: "Practical Budget Choice." },

    // --- Laptops (Your Data) ---
    { id: 801, category: "laptop", name: "ASUS TUF Gaming F16", price: 0, img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=400", desc: "FX607VU-RL805W | GeForce RTX 4050 | Core i5-12500H" },
    { id: 802, category: "laptop", name: "ASUS TUF Gaming A15", price: 0, img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=400", desc: "FA506NCR-HN007W | GeForce RTX 3050 | Ryzen 7-7435HS" },
    { id: 803, category: "laptop", name: "ASUS Vivobook 16", price: 0, img: "https://images.unsplash.com/photo-1541807084-5c52b6b3bd99?auto=format&fit=crop&q=80&w=400", desc: "X1607QA-MB054W | Snapdragon X | 16GB RAM" },
    { id: 804, category: "laptop", name: "Lenovo LOQ 15", price: 0, img: "https://images.unsplash.com/photo-1588872657578-a3d2dd1ad6e8?auto=format&fit=crop&q=80&w=400", desc: "83GS00TYED | GeForce RTX 3050 | i5-12600HX" },
    { id: 805, category: "laptop", name: "Lenovo IdeaPad Slim 3", price: 0, img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=400", desc: "83K100QRED | i7-13620H | 16GB DDR5" },
    { id: 806, category: "laptop", name: "HP Envy x360", price: 0, img: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?auto=format&fit=crop&q=80&w=400", desc: "2-in-1 14-es1013dx | Intel Core 5" },

    // --- Accessories (Your Data) ---
    { id: 901, category: "accessories", name: "T-Dagger Bora TGK313", price: 0, img: "https://images.unsplash.com/photo-1587829741301-dc798b91add1?auto=format&fit=crop&q=80&w=400", desc: "Mechanical Gaming Keyboard - Rainbow LED" },
    { id: 902, category: "accessories", name: "Aula F75 MAX", price: 0, img: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&q=80&w=400", desc: "75% wireless hot swappable gaming keyboard" },
    { id: 903, category: "accessories", name: "AJAZZ AK820 PRO", price: 0, img: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=400", desc: "Wireless Mechanical Keyboard, Hot-Swap, Screen" },
    { id: 904, category: "accessories", name: "ATTACK SHARK X11", price: 0, img: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&q=80&w=400", desc: "Lightweight Wireless Gaming Mouse 22K DPI" },
    { id: 905, category: "accessories", name: "ATTACK SHARK X11SE", price: 0, img: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=400", desc: "Wireless Gaming Mouse RGB Magnetic Dock" },
    { id: 906, category: "accessories", name: "Ergonomic Wireless Mouse", price: 0, img: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=400", desc: "Streamlined design, Comfortable grip" },
    { id: 907, category: "accessories", name: "Large Gaming Mouse Pad", price: 0, img: "https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?auto=format&fit=crop&q=80&w=400", desc: "Water Resist Non-Slip 47.75 x 39.88cm" },
    { id: 908, category: "accessories", name: "Minimalist Desk Mat", price: 0, img: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?auto=format&fit=crop&q=80&w=400", desc: "Black Desk Mat with Non-Slip Base" },
    { id: 909, category: "accessories", name: "Terrain Mouse Pad", price: 0, img: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=400", desc: "White Extended Gaming Mouse Pad" },
    { id: 910, category: "accessories", name: "SoulBytes S20 Headset", price: 0, img: "https://images.unsplash.com/photo-1618424181497-157f2c908506?auto=format&fit=crop&q=80&w=400", desc: "Stereo Gaming Headset With Mic" },
    { id: 911, category: "accessories", name: "H4 Heavy Bass Headphones", price: 0, img: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&q=80&w=400", desc: "Wired Earset for Gaming & Music" }
];


// ==========================================
// 3. Theme & UI Functions
// ==========================================
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
}

function toggleTheme() {
    const htmlTag = document.documentElement;
    const currentTheme = htmlTag.getAttribute('data-bs-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

function setTheme(theme) {
    const htmlTag = document.documentElement;
    const themeIcon = document.getElementById('themeIcon');
    
    if (theme === 'dark') {
        htmlTag.setAttribute('data-bs-theme', 'dark');
        if (themeIcon) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    } else {
        htmlTag.setAttribute('data-bs-theme', 'light');
        if (themeIcon) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
    localStorage.setItem('theme', theme);
}

// Scroll Progress
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    const bar = document.getElementById("myBar");
    if(bar) bar.style.width = scrolled + "%";
};

// ==========================================
// 4. Products & Logic
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    initTheme();

    // -- Products Page Logic --
    const productsContainer = document.getElementById('productsContainer');
    if (productsContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('cat');

        if (categoryParam) {
            filterProducts(categoryParam);
        } else {
            renderCategoryRows(); 
        }
    }

    // -- Home Page Builder Logic --
    initBuilder(); 
});

function renderCategoryRows() {
    const container = document.getElementById('productsContainer');
    if (!container) return;
    container.innerHTML = ''; 

    const groupedProducts = {};
    productsData.forEach(product => {
        if (!groupedProducts[product.category]) {
            groupedProducts[product.category] = [];
        }
        groupedProducts[product.category].push(product);
    });

    for (const [category, products] of Object.entries(groupedProducts)) {
        if (products.length === 0) continue;

        let title = categoryTitles[category] || category;
        const section = document.createElement('div');
        section.className = 'category-section';
        section.setAttribute('data-category', category);
        
        const headerHTML = `
            <div class="category-header">
                <h3 class="fw-bold text-primary mb-0 fs-4">${title}</h3>
                <span class="badge bg-secondary rounded-pill">${products.length}</span>
            </div>
        `;

        const sliderDiv = document.createElement('div');
        sliderDiv.className = 'scrolling-wrapper';

        products.forEach(product => {
            const formattedPrice = product.price === 0 ? "Call for Price" : product.price.toLocaleString() + ' EGP';
            const cardHTML = `
                <div class="card product-card h-100">
                    <img src="${product.img}" class="card-img-top" alt="${product.name}">
                    <div class="card-body text-center d-flex flex-column">
                        <h5 class="card-title fs-6">${product.name}</h5>
                        <p class="price-tag mt-auto">${formattedPrice}</p>
                        <div class="d-flex justify-content-between mt-3">
                            <button class="btn btn-outline-secondary btn-sm view-btn" 
                                onclick="openModal('${product.name}', '${formattedPrice}', '${product.img}')">
                                View
                            </button>
                            <button class="btn btn-primary btn-sm add-cart-btn" onclick="addToCart()">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            `;
            sliderDiv.innerHTML += cardHTML;
        });

        section.innerHTML = headerHTML;
        section.appendChild(sliderDiv);
        container.appendChild(section);
        
        // Simple auto-scroll helper
        let scrollStep = 1; 
        setInterval(() => {
            if (!sliderDiv.matches(':hover')) {
                sliderDiv.scrollLeft += scrollStep;
                if (sliderDiv.scrollLeft >= (sliderDiv.scrollWidth - sliderDiv.clientWidth - 1)) {
                    sliderDiv.scrollLeft = 0;
                }
            }
        }, 30);
    }
}

function filterProducts(category) {
    const buttons = document.querySelectorAll('#filterButtons button');
    buttons.forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline-secondary');
    });

    const activeBtn = document.querySelector(`#filterButtons button[onclick="filterProducts('${category}')"]`);
    if(activeBtn) {
        activeBtn.classList.remove('btn-outline-secondary');
        activeBtn.classList.add('btn-primary');
    }

    const container = document.getElementById('productsContainer');
    if (!container) return;
    container.innerHTML = ''; 

    let filteredData = [];
    if (category === 'all') {
        renderCategoryRows(); 
        return; 
    } else {
        filteredData = productsData.filter(p => p.category === category);
    }

    if (filteredData.length === 0) {
        container.innerHTML = '<div class="text-center w-100 py-5"><h3>No products found in this category.</h3></div>';
        return;
    }

    const rowDiv = document.createElement('div');
    rowDiv.className = 'row g-4';

    filteredData.forEach(product => {
        const formattedPrice = product.price === 0 ? "Call for Price" : product.price.toLocaleString() + ' EGP';
        const colDiv = document.createElement('div');
        colDiv.className = 'col-6 col-md-4 col-lg-3'; 

        colDiv.innerHTML = `
            <div class="card product-card h-100">
                <img src="${product.img}" class="card-img-top" style="height: 200px; object-fit: contain;">
                <div class="card-body text-center d-flex flex-column">
                    <h5 class="card-title fs-6">${product.name}</h5>
                    <p class="price-tag mt-auto text-primary fw-bold">${formattedPrice}</p>
                    <div class="mt-2">
                         <button class="btn btn-sm btn-outline-primary view-btn w-100 mb-2" onclick="openModal('${product.name}', '${formattedPrice}', '${product.img}')">View Details</button>
                         <button class="btn btn-sm btn-primary add-cart-btn w-100" onclick="addToCart()">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
        rowDiv.appendChild(colDiv);
    });
    container.appendChild(rowDiv);
}

function openModal(name, price, img) {
    const product = productsData.find(p => p.name === name);
    const desc = product ? product.desc : "Product details not available";
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalImg = document.getElementById('modalImg');
    const modalDesc = document.getElementById('modalDesc');

    if(modalTitle) modalTitle.innerText = name;
    if(modalPrice) modalPrice.innerText = price;
    if(modalImg) modalImg.src = img;
    if(modalDesc) modalDesc.innerText = desc;

    const modalEl = document.getElementById('productModal');
    if(modalEl) {
        const myModal = new bootstrap.Modal(modalEl);
        myModal.show();
    }
}

function addToCart() {
    const badge = document.querySelector('.cart-count');
    if (badge) {
        let count = parseInt(badge.innerText);
        badge.innerText = count + 1;
        const btnContainer = badge.closest('.btn');
        if(btnContainer) {
            btnContainer.classList.add('animate__animated', 'animate__headShake');
            setTimeout(() => btnContainer.classList.remove('animate__animated', 'animate__headShake'), 1000);
        }
    }
}

// --- Live Search ---
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('keyup', function(e) {
        const searchText = e.target.value.toLowerCase();
        const productsContainer = document.getElementById('productsContainer');
        if (!productsContainer) return;

        if (searchText === "") {
            renderCategoryRows(); 
            return;
        }

        const filteredProducts = productsData.filter(product => 
            product.name.toLowerCase().includes(searchText) || 
            product.desc.toLowerCase().includes(searchText) ||
            product.category.toLowerCase().includes(searchText)
        );

        productsContainer.innerHTML = '<div class="row g-4" id="searchResultsRow"></div>';
        const row = document.getElementById('searchResultsRow');

        if (filteredProducts.length === 0) {
            row.innerHTML = '<div class="col-12 text-center py-5"><h4>No products found matching your search.</h4></div>';
        } else {
            filteredProducts.forEach(product => {
                const formattedPrice = product.price === 0 ? "Call for Price" : product.price.toLocaleString() + ' EGP';
                const cardHTML = `
                    <div class="col-6 col-md-4 col-lg-3">
                        <div class="card product-card h-100">
                            <img src="${product.img}" class="card-img-top" style="height: 200px; object-fit: contain;">
                            <div class="card-body text-center d-flex flex-column">
                                <h5 class="card-title fs-6">${product.name}</h5>
                                <p class="price-tag mt-auto text-primary fw-bold">${formattedPrice}</p>
                                <div class="mt-2">
                                    <button class="btn btn-sm btn-outline-primary view-btn w-100 mb-2" onclick="openModal('${product.name}', '${formattedPrice}', '${product.img}')">View</button>
                                    <button class="btn btn-sm btn-primary add-cart-btn w-100" onclick="addToCart()">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                row.innerHTML += cardHTML;
            });
        }
    });
}

// ==========================================
// 5. SMART PC BUILDER & COMPATIBILITY CHECK
// ==========================================

function initBuilder() {
    const selects = {
        cpu: document.getElementById('cpu-select'),
        gpu: document.getElementById('gpu-select'),
        motherboard: document.getElementById('motherboard-select'),
        ram: document.getElementById('ram-select'),
        storage: document.getElementById('storage-select'),
        case: document.getElementById('case-select'),
        monitor: document.getElementById('monitor-select')
    };

    if (!selects.cpu) return; 

    productsData.forEach(p => {
        if (p.price > 0 && selects[p.category]) {
            const option = `<option value="${p.price}" data-name="${p.name}">
                                ${p.name} (+${p.price.toLocaleString()} EGP)
                            </option>`;
            selects[p.category].innerHTML += option;
        }
    });
}

function checkCompatibility() {
    const cpuSelect = document.getElementById('cpu-select');
    const moboSelect = document.getElementById('motherboard-select');
    const ramSelect = document.getElementById('ram-select');
    const alertBox = document.getElementById('compatibility-alert');

    if(alertBox) {
        alertBox.className = 'alert mt-3 d-none';
        alertBox.innerHTML = '';
    }

    let cpuData = null, moboData = null, ramData = null;

    if (cpuSelect.value != "0") {
        const name = cpuSelect.options[cpuSelect.selectedIndex].getAttribute('data-name');
        cpuData = productsData.find(p => p.name === name);
    }
    if (moboSelect.value != "0") {
        const name = moboSelect.options[moboSelect.selectedIndex].getAttribute('data-name');
        moboData = productsData.find(p => p.name === name);
    }
    if (ramSelect.value != "0") {
        const name = ramSelect.options[ramSelect.selectedIndex].getAttribute('data-name');
        ramData = productsData.find(p => p.name === name);
    }

    let errors = [];

    // Check Socket
    if (cpuData && moboData) {
        if (cpuData.socket && moboData.socket && cpuData.socket !== moboData.socket) {
            errors.push(`❌ <b>Socket Mismatch:</b> CPU (${cpuData.socket}) does not fit Motherboard (${moboData.socket}).`);
        }
    }

    // Check RAM Type
    if (ramData && moboData) {
        if (ramData.ramType && moboData.ramType && ramData.ramType !== moboData.ramType) {
            errors.push(`❌ <b>RAM Mismatch:</b> Motherboard needs ${moboData.ramType}, but RAM is ${ramData.ramType}.`);
        }
    }

    if (alertBox) {
        if (errors.length > 0) {
            alertBox.className = "alert alert-danger mt-3 animate__animated animate__shakeX fw-bold";
            alertBox.innerHTML = errors.join('<br>');
            alertBox.classList.remove('d-none');
            return false; 
        } 
        else if (cpuData && moboData && ramData) {
            alertBox.className = "alert alert-success mt-3 animate__animated animate__fadeIn fw-bold";
            alertBox.innerHTML = `<i class="fas fa-check-circle me-2"></i> <b>Great!</b> All components are compatible.`;
            alertBox.classList.remove('d-none');
            return true;
        }
    }
}

function calculateTotal() {
    const selects = document.querySelectorAll('.builder-select');
    let total = 0;
    
    selects.forEach(select => {
        total += parseInt(select.value);
    });
    
    const totalEl = document.getElementById('builder-total');
    if(totalEl) totalEl.innerText = total.toLocaleString() + " EGP";

    checkCompatibility();
}

function orderBuild() {
    const parts = {
        CPU: document.getElementById('cpu-select'),
        GPU: document.getElementById('gpu-select'),
        Motherboard: document.getElementById('motherboard-select'),
        RAM: document.getElementById('ram-select'),
        Storage: document.getElementById('storage-select'),
        Case: document.getElementById('case-select'),
        Monitor: document.getElementById('monitor-select')
    };

    if (checkCompatibility() === false) {
        alert("Please fix compatibility issues before ordering!");
        return;
    }

    let msg = "Hello Core-X, I want to order this custom build:%0a";
    let valid = false;

    for (const [key, element] of Object.entries(parts)) {
        if (element && element.value != "0") {
            const name = element.selectedOptions[0].getAttribute('data-name');
            msg += `- *${key}:* ${name}%0a`;
            valid = true;
        }
    }

    const total = document.getElementById('builder-total').innerText;
    msg += `%0a💰 *Total Estimate: ${total}*`;

    if (!valid) {
        alert("Please select at least one component!");
        return;
    }

    window.open(`https://wa.me/201234567890?text=${msg}`, '_blank');
}