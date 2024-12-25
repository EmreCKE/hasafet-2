const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Sticky hale geçiş
    } else {
        navbar.classList.remove('scrolled'); // Transparan ve absolute
    }
});

const hamburgerMenu = document.getElementById('hamburger-menu');
const navList = document.getElementById('nav-list');

hamburgerMenu.addEventListener('click', () => {
    navList.classList.toggle('show');
});



const galleryItems = document.querySelectorAll('.gallery-page-item img');
const carousel = document.querySelector('.gallery-page-carousel');
const carouselImage = document.querySelector('.gallery-page-carousel-image');
const closeBtn = document.querySelector('.gallery-page-carousel-close');
const prevBtn = document.querySelector('.gallery-page-carousel-prev');
const nextBtn = document.querySelector('.gallery-page-carousel-next');


let currentIndex = 0;

// Show Carousel
galleryItems.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        showCarousel();
    });
});

function showCarousel() {
    carouselImage.src = galleryItems[currentIndex].src;
    carousel.classList.remove('hidden');
}

// Close Carousel
closeBtn.addEventListener('click', () => {
    carousel.classList.add('hidden');
});

// Navigate Carousel
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    showCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    showCarousel();
});

// Close Carousel on Click Outside
carousel.addEventListener('click', (e) => {
    if (e.target === carousel) {
        carousel.classList.add('hidden');
    }
});

