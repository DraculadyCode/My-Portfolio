let currentSlide = 0;

function moveSlide(direction) {
  const items = document.querySelectorAll('.carousel-item');
  const totalSlides = items.length;

  // Remove active, left, and right classes
  items.forEach(item => {
    item.classList.remove('active', 'left', 'right');
  });

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  // Set the active slide
  items[currentSlide].classList.add('active');

  // Set the left and right slides
  const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  const nextSlide = (currentSlide + 1) % totalSlides;

  items[prevSlide].classList.add('left');
  items[nextSlide].classList.add('right');
}

// Initialize the first state
moveSlide(0);