// Получаем элемент таймера
const timerElement = document.getElementById('timer');
let timeLeft = parseInt(timerElement.textContent);

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    secs.toString().padStart(2, '0')
  ].join(':');
}

// Невидимая ссылка для загрузки
const downloadLink = document.createElement('a');
downloadLink.style.display = 'none';
downloadLink.setAttribute('download', '');
downloadLink.setAttribute('target', '_blank');
document.body.appendChild(downloadLink);

function updateTimer() {
  // Уменьшаем время на 1 секунду
  timeLeft--;
  timerElement.textContent = formatTime(timeLeft);

  if (timeLeft <= 0) {
    // Останавливаем таймер
    clearInterval(timerInterval);
    alert('Вы победили в конкурсе! Сейчас начнётся загрузка файла.');

    downloadLink.href = 'test.zip';
    downloadLink.click();
  }
}

// Запуск таймера
const timerInterval = setInterval(updateTimer, 1000);
