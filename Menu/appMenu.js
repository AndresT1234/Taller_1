document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const imagesContainer = document.getElementById('carouselImages');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateSlide() {
const width = imagesContainer.offsetWidth;
    imagesContainer.style.transform = `translateX(-${currentIndex * width}px)`;
}


nextBtn.addEventListener('click', () => {
const totalImages = imagesContainer.children.length;
currentIndex = (currentIndex + 1) % totalImages; 
updateSlide();
});

prevBtn.addEventListener('click', () => {
const totalImages = imagesContainer.children.length;
currentIndex = (currentIndex - 1 + totalImages) % totalImages;
updateSlide();
});

window.addEventListener('resize', updateSlide);
updateSlide();
