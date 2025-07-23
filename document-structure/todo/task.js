document.addEventListener('DOMContentLoaded', function() {
  const tasksForm = document.getElementById('tasks__form');
  const taskInput = document.getElementById('task__input');
  const tasksList = document.getElementById('tasks__list');

  tasksForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addTask();
  });

  // Добавление новой задачи
  function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText) {
      const taskHTML = `
        <div class="task">
          <div class="task__title">
            ${taskText}
          </div>
          <a href="#" class="task__remove">&times;</a>
        </div>
      `;
      
      tasksList.insertAdjacentHTML('beforeend', taskHTML);
      taskInput.value = '';
      
      const newTask = tasksList.lastElementChild;
      const removeBtn = newTask.querySelector('.task__remove');
      
      removeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        newTask.remove();
      });
    }
  }
});
