document.addEventListener('DOMContentLoaded', () => {
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');
    
    // Загрузка опроса
    function loadPoll() {
        fetch('https://students.netoservices.ru/nestjs-backend/poll')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка загрузки опроса');
                }
                return response.json();
            })
            .then(data => {
                pollAnswers.innerHTML = '';
                pollTitle.textContent = data.data.title;
                
                // Создаем кнопки
                data.data.answers.forEach(answer => {
                    const button = document.createElement('button');
                    button.className = 'poll__answer';
                    button.textContent = answer;
                    
                    button.addEventListener('click', () => {
                        alert('Спасибо, ваш голос засчитан!');
                    });
                    
                    pollAnswers.appendChild(button);
                });
            })
            .catch(error => {
                console.error('Произошла ошибка:', error);
                pollTitle.textContent = 'Не удалось загрузить опрос';
            });
    }

    loadPoll();
});
