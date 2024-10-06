let currentSlide = 0;

function moveSlide(direction) {
  const carouselInner = document.querySelector('.carousel-inner');
  const totalSlides = document.querySelectorAll('.carousel-item').length;

  currentSlide += direction;

  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  const offset = -currentSlide * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;
}