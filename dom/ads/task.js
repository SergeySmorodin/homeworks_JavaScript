document.addEventListener('DOMContentLoaded', function() {
  const rotators = document.querySelectorAll('.rotator');
  
  rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;
    
    function rotate() {
      cases[currentIndex].classList.remove('rotator__case_active');
      
      // Переходим к следующему элементу (с зацикливанием)
      currentIndex = (currentIndex + 1) % cases.length;
      
      const nextCase = cases[currentIndex];
      const speed = nextCase.dataset.speed;
      const color = nextCase.dataset.color;
      
      nextCase.classList.add('rotator__case_active');
      nextCase.style.color = color;
      
      setTimeout(rotate, speed);
    }
    
    const firstSpeed = cases[0].dataset.speed || 1000;
    setTimeout(rotate, firstSpeed);
  });
});
