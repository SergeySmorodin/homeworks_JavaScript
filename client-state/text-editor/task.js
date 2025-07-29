document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const storageKey = 'savedText';
    
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Очистить содержимое';
    clearButton.className = 'clear-button';
    editor.insertAdjacentElement('afterend', clearButton);
    
    const savedText = localStorage.getItem(storageKey);
    if (savedText) {
        editor.value = savedText;
    }
    
    editor.addEventListener('input', () => {
        localStorage.setItem(storageKey, editor.value);
    });
    
    clearButton.addEventListener('click', () => {
        if (confirm('Вы действительно хотите очистить текст?')) {
            editor.value = '';
            localStorage.removeItem(storageKey);
        }
    });
});
