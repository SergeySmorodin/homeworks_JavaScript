// Получаем элемент таймера
const timerElement = document.getElementById('timer');
let timeLeft = parseInt(timerElement.textContent);

function updateTimer() {
  // Уменьшаем время на 1 секунду
  timeLeft--;
  timerElement.textContent = timeLeft;

  if (timeLeft <= 0) {
    // Останавливаем таймер
    clearInterval(timerInterval);
    alert('Вы победили в конкурсе!');
  }
}

// Запуск таймера
const timerInterval = setInterval(updateTimer, 1000);
