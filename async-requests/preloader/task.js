document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');
    
    fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка загрузки данных');
            }
            return response.json();
        })
        .then(data => {
            loader.classList.remove('loader_active');
            itemsContainer.innerHTML = '';
            const valutes = data.response.Valute;
            
            // Дабавляем разметку для каждой валюты
            for (const currencyCode in valutes) {
                const currency = valutes[currencyCode];              

                const itemElement = document.createElement('div');
                itemElement.className = 'item';
                
                const codeElement = document.createElement('div');
                codeElement.className = 'item__code';
                codeElement.textContent = currency.CharCode;
                itemElement.appendChild(codeElement);
                
                const valueElement = document.createElement('div');
                valueElement.className = 'item__value';
                valueElement.textContent = currency.Value;
                itemElement.appendChild(valueElement);

                const currencyElement = document.createElement('div');
                currencyElement.className = 'item__currency';
                currencyElement.textContent = 'руб.';
                itemElement.appendChild(currencyElement);
                
                itemsContainer.appendChild(itemElement);
            }
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
            loader.classList.remove('loader_active');
            itemsContainer.textContent = 'Не удалось загрузить данные о курсе валют';
        });
});
