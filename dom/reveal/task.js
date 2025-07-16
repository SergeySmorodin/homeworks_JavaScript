document.addEventListener('DOMContentLoaded', function() {
  const reveals = document.querySelectorAll('.reveal');

  // проверка видимости элемента
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // обработка прокрутки
  function handleScroll() {
    reveals.forEach(reveal => {
      if (isElementInViewport(reveal)) {
        reveal.classList.add('reveal_active');
      }
    });
  }


  handleScroll();

  // Добавляем обработчик события scroll
  window.addEventListener('scroll', handleScroll);
});
