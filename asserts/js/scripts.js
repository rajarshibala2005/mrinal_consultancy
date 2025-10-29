
let allProperties = [];
let filteredProperties = [];
let currentPage = 1;
const propertiesPerPage = 9;
let currentProperty = null;
let currentImageIndex = 0;
let hoverImageInterval = null;
let currentSlide = 0;
let slideInterval = null;

// Initialize properties data
function initializeProperties() {
    allProperties = [
        {
            id: 1,
            type: 'flat',
            status: 'rent',
            title: 'Luxury 3BHK Apartment',
            location: 'Downtown, Mumbai',
            price: 45000,
            images: [
                'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
                'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800'
            ],
            bedrooms: 3,
            bathrooms: 2,
            sqft: 1500,
            description: 'Spacious 3BHK apartment with modern amenities and breathtaking city views. Features include a gourmet kitchen, private balcony, and 24/7 security.'
        },
        {
            id: 2,
            type: 'house',
            status: 'sale',
            title: 'Modern Villa with Pool',
            location: 'Suburbs, Bangalore',
            price: 8500000,
            images: [
                'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800',
                'https://images.unsplash.com/photo-1600607687939-271cee32e87f?w=800',
                'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800'
            ],
            bedrooms: 4,
            bathrooms: 3,
            sqft: 3000,
            description: 'Contemporary villa featuring a private pool, landscaped garden, and home automation system. Perfect for luxury living in a serene environment.'
        },
        {
            id: 3,
            type: 'flat',
            status: 'rent',
            title: 'Cozy 2BHK in City Center',
            location: 'Bandra, Mumbai',
            price: 35000,
            images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800'],
            bedrooms: 2,
            bathrooms: 2,
            sqft: 1200,
            description: 'Charming 2BHK apartment in the heart of Bandra with easy access to restaurants, shopping, and public transport. Well-maintained and fully furnished.'
        },
        {
            id: 4,
            type: 'villa',
            status: 'sale',
            title: 'Executive Beachfront Villa',
            location: 'Goa Coast',
            price: 12500000,
            images: [
                'https://images.unsplash.com/photo-1576941089067-2de3c901e126?w=800',
                'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
                'https://images.unsplash.com/photo-1551524167-5e8b4e3d8d3a?w=800',
                'https://images.unsplash.com/photo-1596226512580-00e53e89612a?w=800'
            ],
            bedrooms: 5,
            bathrooms: 4,
            sqft: 4500,
            description: 'Stunning beachfront villa with direct sea access, infinity pool, and tropical garden. Ideal for vacation home or investment property with rental potential.'
        },
        {
            id: 5,
            type: 'house',
            status: 'rent',
            title: 'Family Home in Green Acres',
            location: 'Pune Hills',
            price: 60000,
            images: [
                'https://images.unsplash.com/photo-1583608205776-bfd35f96c763?w=800',
                'https://images.unsplash.com/photo-1560448205-07f16d52a908?w=800'
            ],
            bedrooms: 4,
            bathrooms: 3,
            sqft: 2500,
            description: 'Spacious family home in a gated community with children\'s play area, clubhouse, and proximity to international schools. Nature lovers paradise.'
        },
        {
            id: 6,
            type: 'flat',
            status: 'sale',
            title: 'Penthouse with Sky View',
            location: 'Worli Seaface',
            price: 9500000,
            images: [
                'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
                'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
                'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800'
            ],
            bedrooms: 3,
            bathrooms: 3,
            sqft: 2000,
            description: 'Exclusive penthouse offering panoramic sea views, private terrace, and designer interiors. Located in one of Mumbai\'s most prestigious addresses.'
        },
        {
            id: 7,
            type: 'flat',
            status: 'rent',
            title: 'Studio Apartment in Andheri',
            location: 'Andheri West, Mumbai',
            price: 25000,
            images: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800'],
            bedrooms: 1,
            bathrooms: 1,
            sqft: 600,
            description: 'Compact studio perfect for young professionals. Located near metro station and corporate offices with all modern conveniences.'
        },
        {
            id: 8,
            type: 'house',
            status: 'sale',
            title: 'Bungalow with Garden',
            location: 'Koregaon Park, Pune',
            price: 7500000,
            images: [
                'https://images.unsplash.com/photo-1600607687939-271cee32e87f?w=800',
                'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800',
                'https://images.unsplash.com/photo-1583608205892-1d7b4d8e2c0e?w=800'
            ],
            bedrooms: 4,
            bathrooms: 3,
            sqft: 2800,
            description: 'Elegant bungalow in Pune\'s most sought-after neighborhood. Features private garden, vintage architecture, and modern updates throughout.'
        },
        {
            id: 9,
            type: 'villa',
            status: 'rent',
            title: 'Sea View Villa',
            location: 'Alibaug, Maharashtra',
            price: 120000,
            images: [
                'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800',
                'https://images.unsplash.com/photo-1551524167-5e8b4e3d8d3a?w=800',
                'https://images.unsplash.com/photo-1596226512580-00e53e89612a?w=800'
            ],
            bedrooms: 5,
            bathrooms: 4,
            sqft: 4000,
            description: 'Luxurious weekend getaway villa with stunning Arabian Sea views. Perfect for family vacations or corporate retreats with staff quarters.'
        }
    ];

    filteredProperties = [...allProperties];
    displayProperties(filteredProperties, currentPage);
}

// Carousel functionality
function initializeCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const indicatorButtons = document.querySelectorAll('.indicator');

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Remove active class from all indicators
        indicators.forEach(ind => {
            ind.classList.remove('active');
        });

        // Show current slide
        if (slides[index]) {
            slides[index].classList.add('active');
        }

        // Update indicator
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }

        currentSlide = index;
    }

    // Global functions for navigation
    window.changeSlide = function (direction) {
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        showSlide(currentSlide);
    };

    window.goToSlide = function (index) {
        showSlide(index);
    };

    // Add event listeners for manual navigation
    if (prevButton) {
        prevButton.addEventListener('click', () => changeSlide(-1));
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => changeSlide(1));
    }

    // Add event listeners for indicators
    indicatorButtons.forEach((button, index) => {
        button.addEventListener('click', () => goToSlide(index));
    });

    // Start auto-play
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 8000);

    // Initial slide show
    showSlide(0);
}

// Property card hover image rotation
function startImageRotation(cardElement, property) {
    if (property.images.length <= 1 || hoverImageInterval) return;

    let imageIndex = 0;
    hoverImageInterval = setInterval(() => {
        const imagesContainer = cardElement.querySelector('.property-images');
        if (imagesContainer) {
            imagesContainer.querySelectorAll('.property-image').forEach(img => img.classList.remove('active'));
            const activeImg = imagesContainer.querySelectorAll('.property-image')[imageIndex];
            if (activeImg) activeImg.classList.add('active');
            imageIndex = (imageIndex + 1) % property.images.length;
        }
    }, 2000);
}

function stopImageRotation() {
    if (hoverImageInterval) {
        clearInterval(hoverImageInterval);
        hoverImageInterval = null;
    }
}

// Display properties
function displayProperties(list, page = 1) {
    const startIndex = (page - 1) * propertiesPerPage;
    const endIndex = startIndex + propertiesPerPage;
    const paginatedProperties = list.slice(startIndex, endIndex);

    const container = document.getElementById('propertiesGrid');
    const loading = container.querySelector('.loading');

    if (loading) {
        loading.remove();
    }

    if (paginatedProperties.length === 0) {
        container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);"><p>No properties found matching your criteria.</p></div>';
        updatePagination(0, 1);
        return;
    }

    container.innerHTML = paginatedProperties.map((p, index) => {
        const globalIndex = startIndex + index;
        const firstImage = p.images[0];
        const hasMultipleImages = p.images.length > 1;
        const imageCount = p.images.length;

        return `
          <div class="property-card" data-property-index="${globalIndex}" onmouseenter="handleCardHover(this, ${globalIndex})" onmouseleave="stopImageRotation()">
            <div class="property-image-container">
              <div class="property-images">
                ${p.images.map((img, imgIndex) => `
                  <img src="${img}" alt="${p.title}" class="property-image ${imgIndex === 0 ? 'active' : ''}" loading="lazy">
                `).join('')}
              </div>
              <span class="status-badge ${p.status}">${p.status.toUpperCase()}</span>
              ${hasMultipleImages ? `<div class="image-indicator"><i class="fas fa-images"></i> ${imageCount} photos</div>` : ''}
            </div>
            <div class="property-details">
              <h3>${p.title}</h3>
              <div class="property-location">${p.location}</div>
              <div class="price">
                ${p.status === 'rent' ? '₹' + p.price.toLocaleString() + '/mo' : '₹' + p.price.toLocaleString()}
              </div>
              <span class="property-type">${p.type.toUpperCase()}</span>
              <div style="margin-top: 1rem; font-size: 0.875rem; color: var(--text-secondary);">
                ${p.bedrooms} Beds • ${p.bathrooms} Baths • ${p.sqft} sqft
              </div>
              <div class="view-details" onclick="openPropertyModal(${globalIndex}); event.stopPropagation();">
                <i class="fas fa-eye"></i> View Details
              </div>
            </div>
          </div>
        `;
    }).join('');

    // Add click handlers after rendering
    document.querySelectorAll('.property-card').forEach(card => {
        card.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-property-index'));
            openPropertyModal(index);
        });
    });

    updatePagination(list.length, page);
}

// Modal functionality
function openPropertyModal(propertyIndex) {
    currentProperty = filteredProperties[propertyIndex];
    if (!currentProperty) return;

    currentImageIndex = 0;
    document.body.classList.add('modal-open');
    const modal = document.getElementById('propertyModal');
    modal.classList.add('active');

    // Populate modal content
    document.getElementById('modalTitle').textContent = currentProperty.title;
    document.getElementById('modalBedrooms').textContent = currentProperty.bedrooms;
    document.getElementById('modalBathrooms').textContent = currentProperty.bathrooms;
    document.getElementById('modalSqft').textContent = currentProperty.sqft;
    document.getElementById('modalType').textContent = currentProperty.type.charAt(0).toUpperCase() + currentProperty.type.slice(1);
    document.getElementById('modalLocation').textContent = currentProperty.location;
    document.getElementById('modalPrice').textContent = currentProperty.status === 'rent' ?
        '₹' + currentProperty.price.toLocaleString() + '/month' :
        '₹' + currentProperty.price.toLocaleString();
    document.getElementById('modalPriceLabel').textContent = currentProperty.status === 'rent' ? 'Monthly Rent' : 'Sale Price';
    document.getElementById('modalStatus').textContent = currentProperty.status.charAt(0).toUpperCase() + currentProperty.status.slice(1);
    document.getElementById('modalDescription').textContent = currentProperty.description;

    updateModalImages();
}

function closeModal() {
    const modal = document.getElementById('propertyModal');
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    stopImageRotation();
}

function updateModalImages() {
    if (!currentProperty) return;

    const modalImage = document.getElementById('modalImage');
    const modalIndicatorsContainer = document.getElementById('modalIndicators');
    const prevBtn = document.querySelector('.modal-image-prev');
    const nextBtn = document.querySelector('.modal-image-next');

    // Update main image
    modalImage.src = currentProperty.images[currentImageIndex];
    modalImage.alt = currentProperty.title;

    // Update indicators
    modalIndicatorsContainer.innerHTML = currentProperty.images.map((_, index) => `
        <div class="modal-indicator ${index === currentImageIndex ? 'active' : ''}" onclick="goToModalImage(${index})"></div>
      `).join('');

    // Show/hide navigation buttons
    if (currentProperty.images.length > 1) {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
    } else {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }
}

function changeModalImage(direction) {
    if (!currentProperty) return;

    currentImageIndex = (currentImageIndex + direction + currentProperty.images.length) % currentProperty.images.length;
    updateModalImages();
}

function goToModalImage(index) {
    if (!currentProperty) return;

    currentImageIndex = index;
    updateModalImages();
}

// Action button handlers
function contactForProperty() {
    if (currentProperty) {
        const message = `Hi! I'm interested in ${currentProperty.title} in ${currentProperty.location}. Can you provide more details?`;
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, '_blank');
    }
}

function scheduleViewing() {
    if (currentProperty) {
        alert(`Viewing scheduled for ${currentProperty.title}. Our team will contact you within 24 hours to confirm the appointment.`);
    }
}

function saveProperty() {
    if (currentProperty) {
        alert(`${currentProperty.title} has been saved to your favorites. You can view it in your dashboard.`);
    }
}

// Pagination functionality
function updatePagination(totalProperties, currentPageNum) {
    const totalPages = Math.ceil(totalProperties / propertiesPerPage);
    const paginationContainer = document.getElementById('pagination');

    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }

    let paginationHTML = `
        <button class="pagination-button" id="prevPage" ${currentPageNum === 1 ? 'disabled' : ''}>
          <i class="fas fa-chevron-left"></i>
        </button>
      `;

    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPageNum - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
        paginationHTML += `<button class="page-number" onclick="goToPage(1)">1</button>`;
        if (startPage > 2) {
            paginationHTML += `<span style="margin: 0 0.5rem;">...</span>`;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        paginationHTML += `
          <button class="page-number ${i === currentPageNum ? 'active' : ''}" onclick="goToPage(${i})">
            ${i}
          </button>
        `;
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            paginationHTML += `<span style="margin: 0 0.5rem;">...</span>`;
        }
        paginationHTML += `<button class="page-number" onclick="goToPage(${totalPages})">${totalPages}</button>`;
    }

    paginationHTML += `
        <button class="pagination-button" id="nextPage" ${currentPageNum === totalPages ? 'disabled' : ''}>
          <i class="fas fa-chevron-right"></i>
        </button>
      `;

    paginationContainer.innerHTML = paginationHTML;

    // Add event listeners for pagination buttons
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');

    if (prevBtn) {
        prevBtn.addEventListener('click', function () {
            if (!this.disabled) goToPage(currentPageNum - 1);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function () {
            if (!this.disabled) goToPage(currentPageNum + 1);
        });
    }
}

function goToPage(page) {
    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
    if (page < 1 || page > totalPages) return;

    currentPage = page;
    displayProperties(filteredProperties, currentPage);
    updateActiveNav('properties');
}

// Filter functionality
function applyFilters() {
    const typeFilter = document.getElementById('propertyType')?.value || '';
    const statusFilter = document.getElementById('propertyStatus')?.value || '';
    const locationSearch = document.getElementById('searchLocation')?.value.toLowerCase() || '';

    filteredProperties = allProperties.filter(p => {
        const matchesType = !typeFilter || p.type === typeFilter;
        const matchesStatus = !statusFilter || p.status === statusFilter;
        const matchesLocation = !locationSearch || p.location.toLowerCase().includes(locationSearch);
        return matchesType && matchesStatus && matchesLocation;
    });

    currentPage = 1;
    displayProperties(filteredProperties, currentPage);
}

// Navigation functionality
function updateActiveNav(section) {
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => link.classList.remove('active'));

    const activeLink = document.querySelector(`.nav-links a[href="#${section}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

function handleCardHover(card, propertyIndex) {
    const property = filteredProperties[propertyIndex];
    if (property && property.images.length > 1) {
        startImageRotation(card, property);
    }
}

// Event listeners
function initializeEventListeners() {
    // Navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                updateActiveNav(this.getAttribute('href').substring(1));
                document.getElementById('navLinks')?.classList.remove('active');
            }
        });
    });

    // Modal close handlers
    const modal = document.getElementById('propertyModal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }

    // Keyboard navigation for modal
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && document.getElementById('propertyModal').classList.contains('active')) {
            closeModal();
        }

        if (currentProperty && document.getElementById('propertyModal').classList.contains('active')) {
            if (e.key === 'ArrowLeft') {
                changeModalImage(-1);
            } else if (e.key === 'ArrowRight') {
                changeModalImage(1);
            }
        }
    });

    // Filter event listeners
    const propertyType = document.getElementById('propertyType');
    const propertyStatus = document.getElementById('propertyStatus');
    const searchLocation = document.getElementById('searchLocation');

    if (propertyType) propertyType.addEventListener('change', applyFilters);
    if (propertyStatus) propertyStatus.addEventListener('change', applyFilters);
    if (searchLocation) searchLocation.addEventListener('input', applyFilters);

    // Scroll-based navigation
    window.addEventListener('scroll', () => {
        const sections = ['home', 'properties', 'about', 'contact'];
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const element = document.getElementById(section);
            if (element) {
                const offsetTop = element.offsetTop;
                const offsetHeight = element.offsetHeight;
                const link = document.querySelector(`a[href="#${section}"]`);

                if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                    updateActiveNav(section);
                }
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Preload images
function preloadImages() {
    allProperties.forEach(p => {
        p.images.forEach(img => {
            const preloadImg = new Image();
            preloadImg.src = img;
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded, initializing application...');

    try {
        // Initialize your other features
        initializeProperties();
        initializeCarousel(); // This will initialize the carousel
        initializeEventListeners();
        preloadImages();

        console.log('Application initialized successfully');
    } catch (error) {
        console.error('Initialization error:', error);
    }
});


// Global functions for onclick handlers
window.changeSlide = changeSlide;
window.goToSlide = goToSlide;
window.openPropertyModal = openPropertyModal;
window.closeModal = closeModal;
window.changeModalImage = changeModalImage;
window.goToModalImage = goToModalImage;
window.goToPage = goToPage;
window.applyFilters = applyFilters;
window.toggleMobileMenu = toggleMobileMenu;
window.contactForProperty = contactForProperty;
window.scheduleViewing = scheduleViewing;
window.saveProperty = saveProperty;
window.handleCardHover = handleCardHover;
window.stopImageRotation = stopImageRotation;
