document.addEventListener('DOMContentLoaded', function() {
  // Закрытие списка
  function closeAllDropdowns(exclude = null) {
    document.querySelectorAll('.dropdown__list_active').forEach(list => {
      if (list !== exclude) {
        list.classList.remove('dropdown__list_active');
      }
    });
  }

  // Обработчик для всех кликов
  document.addEventListener('click', function(e) {
    const target = e.target;
    
    // Обработка клика по кнопке
    const trigger = target.closest('.dropdown__value');
    if (trigger) {
      const dropdown = trigger.closest('.dropdown');
      const list = dropdown.querySelector('.dropdown__list');
      
      closeAllDropdowns(list);
      list.classList.toggle('dropdown__list_active');
      return;
    }

    // Обработка клика по пункту меню
    const itemLink = target.closest('.dropdown__link');
    if (itemLink) {
      e.preventDefault();
      
      const dropdown = itemLink.closest('.dropdown');
      const trigger = dropdown.querySelector('.dropdown__value');
      const list = dropdown.querySelector('.dropdown__list');
      
      trigger.textContent = itemLink.textContent.trim();
      list.classList.remove('dropdown__list_active');
      return;
    }

    // Закрытие при клике вне меню
    closeAllDropdowns();
  });
});
