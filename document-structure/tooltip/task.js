document.addEventListener('DOMContentLoaded', function() {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);

  document.addEventListener('click', function(e) {
    const target = e.target;
    
    if (target.classList.contains('has-tooltip')) {
      e.preventDefault();
      
      // Текст подсказки
      tooltip.textContent = target.title;
      
      // Позиционируем подсказку
      const rect = target.getBoundingClientRect();
      tooltip.style.left = rect.left + 'px';
      tooltip.style.top = rect.bottom + 'px';
      
      tooltip.classList.add('tooltip_active');
    } else {
      tooltip.classList.remove('tooltip_active');
    }
  });
});
