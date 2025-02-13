const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function showItem(index) {
    if (index < 0) {
        currentIndex = carouselItems.length - 1;
    } else if (index >= carouselItems.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    carouselItems.forEach((item, i) => {
        if (i === currentIndex) {
            item.classList.add('active');
            item.style.opacity = 1;
        } else {
            item.classList.remove('active');
            item.style.opacity = 0;
        }
    });
}

function prevSlide() {
    currentIndex--;
    showItem(currentIndex);
}

function nextSlide() {
    currentIndex++;
    showItem(currentIndex);
}

showItem(currentIndex);

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

setInterval(() => {
    nextSlide();
}, 5000);
