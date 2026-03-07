// Global state
let animalsData = [];
let productsData = [];
let currentAnimalFilter = 'all';
let currentProductCategory = 'all';

// Security: Trusted domains for images
const TRUSTED_IMAGE_DOMAINS = ['images.unsplash.com', 'unsplash.com'];

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    loadAnimals();
    loadProducts();
    initializeFilters();
    initializeSmoothScroll();
});

// Validate and sanitize data
function validateAnimalData(animal) {
    return animal && 
           typeof animal.id === 'number' &&
           typeof animal.name === 'string' &&
           typeof animal.type === 'string' &&
           typeof animal.breed === 'string' &&
           typeof animal.age === 'string' &&
           typeof animal.gender === 'string' &&
           typeof animal.description === 'string' &&
           typeof animal.image === 'string' &&
           typeof animal.status === 'string' &&
           ['available', 'adopted'].includes(animal.status);
}

function validateProductData(product) {
    return product &&
           typeof product.id === 'number' &&
           typeof product.name === 'string' &&
           typeof product.category === 'string' &&
           typeof product.price === 'number' &&
           product.price >= 0 &&
           typeof product.description === 'string' &&
           typeof product.image === 'string' &&
           typeof product.whatsapp === 'string';
}

// Validate image URL
function isValidImageUrl(url) {
    try {
        const urlObj = new URL(url);
        return TRUSTED_IMAGE_DOMAINS.some(domain => 
            urlObj.hostname === domain || urlObj.hostname.endsWith('.' + domain)
        );
    } catch {
        return false;
    }
}

// Load animals data
async function loadAnimals() {
    try {
        const response = await fetch('data/animals.json');
        
        // Check response status
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Validate and sanitize data
        if (!Array.isArray(data)) {
            throw new Error('Invalid data format');
        }
        
        animalsData = data.filter(animal => validateAnimalData(animal));
        displayAnimals(animalsData);
    } catch (error) {
        console.error('Error loading animals:', error);
        const grid = document.getElementById('animals-grid');
        if (grid) {
            grid.textContent = 'Falha ao carregar animais. Por favor, tente novamente mais tarde.';
            grid.className = 'loading';
        }
    }
}

// Load products data
async function loadProducts() {
    try {
        const response = await fetch('data/products.json');
        
        // Check response status
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Validate and sanitize data
        if (!Array.isArray(data)) {
            throw new Error('Invalid data format');
        }
        
        productsData = data.filter(product => validateProductData(product));
        displayProducts(productsData);
    } catch (error) {
        console.error('Error loading products:', error);
        const grid = document.getElementById('products-grid');
        if (grid) {
            grid.textContent = 'Falha ao carregar produtos. Por favor, tente novamente mais tarde.';
            grid.className = 'loading';
        }
    }
}

// Escape HTML to prevent XSS - Enhanced version
function escapeHtml(text) {
    if (typeof text !== 'string') {
        return '';
    }
    
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Sanitize attribute values
function sanitizeAttribute(value) {
    if (typeof value !== 'string') {
        return '';
    }
    
    // Remove any potentially dangerous characters for attributes
    return value
        .replace(/[<>"'`]/g, '')
        .replace(/javascript:/gi, '')
        .replace(/on\w+=/gi, '');
}

// Display animals in the grid - Secure version
function displayAnimals(animals) {
    const grid = document.getElementById('animals-grid');
    
    if (!grid) return;
    
    if (animals.length === 0) {
        const message = document.createElement('p');
        message.className = 'loading';
        message.textContent = 'Nenhum animal encontrado com os critérios selecionados.';
        grid.innerHTML = '';
        grid.appendChild(message);
        return;
    }

    // Clear grid first
    grid.innerHTML = '';
    
    animals.forEach(animal => {
        // Validate data again before rendering
        if (!validateAnimalData(animal)) return;
        
        const article = document.createElement('article');
        article.className = 'animal-card';
        article.setAttribute('data-type', sanitizeAttribute(animal.type));
        article.setAttribute('data-status', sanitizeAttribute(animal.status));
        article.setAttribute('role', 'listitem');
        
        // Create image
        const img = document.createElement('img');
        if (isValidImageUrl(animal.image)) {
            img.src = animal.image;
        } else {
            img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%236b7280"%3EImagem não disponível%3C/text%3E%3C/svg%3E';
        }
        img.alt = `${escapeHtml(animal.name)} - ${escapeHtml(animal.breed)}`;
        img.className = 'card-image';
        img.loading = 'lazy';
        
        // Create content
        const content = document.createElement('div');
        content.className = 'card-content';
        
        const header = document.createElement('div');
        header.className = 'card-header';
        
        const title = document.createElement('h3');
        title.className = 'card-title';
        title.textContent = animal.name;
        
        const badge = document.createElement('span');
        badge.className = `card-badge badge-${animal.status}`;
        badge.setAttribute('role', 'status');
        const statusText = animal.status === 'available' ? 'disponível' : 'adotado';
        badge.setAttribute('aria-label', `Status: ${statusText}`);
        badge.textContent = statusText;
        
        header.appendChild(title);
        header.appendChild(badge);
        
        const meta = document.createElement('div');
        meta.className = 'card-meta';
        meta.innerHTML = `
            <span><strong>Raça:</strong> ${escapeHtml(animal.breed)}</span>
            <span><strong>Idade:</strong> ${escapeHtml(animal.age)}</span>
            <span><strong>Gênero:</strong> ${escapeHtml(animal.gender)}</span>
        `;
        
        const description = document.createElement('p');
        description.className = 'card-description';
        description.textContent = animal.description;
        
        content.appendChild(header);
        content.appendChild(meta);
        content.appendChild(description);
        
        article.appendChild(img);
        article.appendChild(content);
        grid.appendChild(article);
    });
}

// Display products in the grid - Secure version
function displayProducts(products) {
    const grid = document.getElementById('products-grid');
    
    if (!grid) return;
    
    if (products.length === 0) {
        const message = document.createElement('p');
        message.className = 'loading';
        message.textContent = 'Nenhum produto encontrado com os critérios selecionados.';
        grid.innerHTML = '';
        grid.appendChild(message);
        return;
    }

    // Clear grid first
    grid.innerHTML = '';
    
    products.forEach(product => {
        // Validate data again before rendering
        if (!validateProductData(product)) return;
        
        const article = document.createElement('article');
        article.className = 'product-card';
        article.setAttribute('data-category', sanitizeAttribute(product.category));
        article.setAttribute('role', 'listitem');
        
        // Create image
        const img = document.createElement('img');
        if (isValidImageUrl(product.image)) {
            img.src = product.image;
        } else {
            img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23e5e7eb" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%236b7280"%3EImagem não disponível%3C/text%3E%3C/svg%3E';
        }
        img.alt = escapeHtml(product.name);
        img.className = 'card-image';
        img.loading = 'lazy';
        
        // Create content
        const content = document.createElement('div');
        content.className = 'card-content';
        
        const category = document.createElement('span');
        category.className = 'product-category';
        category.textContent = product.category;
        
        const title = document.createElement('h3');
        title.className = 'card-title';
        title.textContent = product.name;
        
        const price = document.createElement('p');
        price.className = 'product-price';
        price.setAttribute('aria-label', `Preço: ${product.price.toFixed(2)} reais`);
        price.textContent = `R$ ${product.price.toFixed(2)}`;
        
        const description = document.createElement('p');
        description.className = 'card-description';
        description.textContent = product.description;
        
        const button = document.createElement('button');
        button.className = 'btn btn-whatsapp';
        button.setAttribute('aria-label', `Pedir ${product.name} via WhatsApp`);
        button.textContent = 'Pedir via WhatsApp';
        button.addEventListener('click', () => {
            contactWhatsApp(product.whatsapp, product.name, product.price);
        });
        
        content.appendChild(category);
        content.appendChild(title);
        content.appendChild(price);
        content.appendChild(description);
        content.appendChild(button);
        
        article.appendChild(img);
        article.appendChild(content);
        grid.appendChild(article);
    });
}

// WhatsApp integration - Secure version
function contactWhatsApp(phoneNumber, productName, price) {
    // Validate inputs
    if (typeof phoneNumber !== 'string' || typeof productName !== 'string' || typeof price !== 'number') {
        console.error('Invalid WhatsApp contact parameters');
        return;
    }
    
    // Sanitize phone number - only allow digits and +
    const sanitizedPhone = phoneNumber.replace(/[^0-9+]/g, '');
    
    // Validate phone number format
    if (!/^\+?[0-9]{10,15}$/.test(sanitizedPhone)) {
        console.error('Invalid phone number format');
        return;
    }
    
    const message = `Olá! Tenho interesse em comprar: ${productName} (R$ ${price.toFixed(2)})`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${sanitizedPhone}?text=${encodedMessage}`;
    
    // Use noopener and noreferrer for security
    const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Fallback if popup was blocked
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        // Create a temporary link and click it
        const link = document.createElement('a');
        link.href = whatsappUrl;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.click();
    }
}

// Initialize filter buttons
function initializeFilters() {
    // Animal filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleFilterChange(filterButtons, button, 'animal');
        });
        
        // Keyboard support
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleFilterChange(filterButtons, button, 'animal');
            }
        });
    });

    // Product category filters
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleFilterChange(categoryButtons, button, 'product');
        });
        
        // Keyboard support
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleFilterChange(categoryButtons, button, 'product');
            }
        });
    });
}

// Handle filter change with ARIA updates
function handleFilterChange(buttons, activeButton, type) {
    // Update active state and ARIA
    buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
    });
    activeButton.classList.add('active');
    activeButton.setAttribute('aria-pressed', 'true');
    
    // Apply filter
    if (type === 'animal') {
        const filter = activeButton.getAttribute('data-filter');
        currentAnimalFilter = filter;
        filterAnimals(filter);
    } else {
        const category = activeButton.getAttribute('data-category');
        currentProductCategory = category;
        filterProducts(category);
    }
}

// Filter animals by type or status
function filterAnimals(filter) {
    if (filter === 'all') {
        displayAnimals(animalsData);
        return;
    }

    const filtered = animalsData.filter(animal => {
        if (filter === 'dog' || filter === 'cat') {
            return animal.type === filter;
        }
        if (filter === 'available') {
            return animal.status === 'available';
        }
        return true;
    });

    displayAnimals(filtered);
}

// Filter products by category
function filterProducts(category) {
    if (category === 'all') {
        displayProducts(productsData);
        return;
    }

    const filtered = productsData.filter(product => product.category === category);
    displayProducts(filtered);
}

// Smooth scroll for navigation
function initializeSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Only prevent default for anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}
