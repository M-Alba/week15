//Находим элементы на странице
const form = document.querySelector('#form'),
    task = document.querySelector('.task'),
    buttonAddTask = document.querySelector('.addTask'),
    buttonDelTasks = document.querySelector('.deleteTasks'),
    tasksList = document.querySelector('.tasksList'),
    emptyList = document.querySelector('.taskSection__emptyList');

form.addEventListener('submit', addTask);

function addTask(event) {
    //Отменяем отправку формы
    event.preventDefault();

    //Получаем текст задачи из поля ввода
    const taskText = task.value;

    //Формируем разметку для новой задачи
    taskHTML = `
            <li class='taskItem'>
                <input type='checkbox' class='taskCheskbox'>
                <label>${taskText}</label>
            </li>
            `;

    tasksList.insertAdjacentHTML('beforeend', taskHTML);

    //Очищаем поле ввода и возвращаем на него фокус
    task.value = '';
    task.focus();

    //Проверка: если в списке есть задачи, надпись "Нет задач" исчезает, кнопка "Очистить список" активна 
    if (tasksList.children.length > 0) {
        emptyList.classList.add('none');
        buttonDelTasks.disabled = false;
    }
}

//Удаление списка задач
buttonDelTasks.addEventListener('click', function () {
    tasksList.innerHTML = '';

    //Проверка: если в списке нет задач, то появляется надпись "Нет задач", кнопка "Очистить список" не активна
    if (tasksList.children.length === 0) {
        emptyList.classList.remove('none');
        buttonDelTasks.disabled = true;
    }

});