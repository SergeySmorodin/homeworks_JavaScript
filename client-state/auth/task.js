document.addEventListener('DOMContentLoaded', () => {
    const signin = document.getElementById('signin');
    const welcome = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');
    const form = document.getElementById('signin__form');

    // Авторизация при повторном посещении
    const savedUserId = localStorage.getItem('user_id');
    if (savedUserId) {
        userIdSpan.textContent = savedUserId;
        welcome.classList.add('welcome_active');
        signin.classList.remove('signin_active');
    }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
        
        xhr.onload = function() {
            if (xhr.status === 201) {
                try {
                    const response = JSON.parse(xhr.responseText);                 
                    if (response.success) {
                        localStorage.setItem('user_id', response.user_id);
                        userIdSpan.textContent = response.user_id;
                        welcome.classList.add('welcome_active');
                        signin.classList.remove('signin_active');
                    } else {
                        alert('Неверный логин/пароль');
                    }
                } catch (error) {
                    console.error('Ошибка парсинга JSON:', error);
                    alert('Ошибка обработки ответа сервера');
                }
            } else {
                console.error('Ошибка HTTP:', xhr.status);
                alert('Ошибка соединения с сервером');
            }
        };
        
        xhr.onerror = function() {
            console.error('Ошибка сети');
            alert('Ошибка соединения с сервером');
        };
        
        xhr.send(formData);
    });
});
