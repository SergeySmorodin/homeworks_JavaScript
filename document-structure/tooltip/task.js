document.addEventListener('DOMContentLoaded', () => {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  document.body.appendChild(tooltip);
  
  let currentActiveLink = null;

  document.addEventListener('click', (e) => {
    const target = e.target;
    
    if (target.classList.contains('has-tooltip')) {
      e.preventDefault();
      
      // Проверяем, был ли клик по той же ссылке
      const isSameLink = currentActiveLink === target;
      
      // Скрываем подсказку, если клик по той же ссылке
      if (isSameLink) {
        tooltip.classList.toggle('tooltip_active');
        currentActiveLink = tooltip.classList.contains('tooltip_active') ? target : null;
        return;
      }
      
      // Если клик по другой ссылке
      currentActiveLink = target;
      
      // Текст подсказки
      tooltip.textContent = target.title;
      
      // Позиционируем подсказку
      const rect = target.getBoundingClientRect();
      tooltip.style.left = rect.left + 'px';
      tooltip.style.top = rect.bottom + 'px';
      
      tooltip.classList.add('tooltip_active');
    } else {
      // Клик вне ссылки - скрываем подсказку
      tooltip.classList.remove('tooltip_active');
      currentActiveLink = null;
    }
  });
});
