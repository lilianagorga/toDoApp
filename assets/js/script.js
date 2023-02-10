const form = document.getElementById('form');
const input = document.getElementById('input');
const todoUl = document.getElementById('todoUl');
const todo1 = JSON.parse(localStorage.getItem('todo1'));
if (todo1) {
    todo1.forEach(todo => {
        addTodo(todo)
    });
}

form.addEventListener('submit', (e) => {

    e.preventDefault();
    
    addTodo();
});
    function addTodo(todo) {
        let todoText = input.value;
        if(todo) {
            todoText = todo.text;
        }
        // const todoText = input.value;

        if(todoText) {
    
            const todoEl = document.createElement('li');

            if(todo && todo.completed) {
                todoEl.classList.add('completed');
            };

            todoEl.innerText = todoText; 
    
            todoEl.addEventListener('click', () => {
                todoEl.classList.toggle('completed');
                updateLS();
            });
    
            todoEl.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                todoEl.remove();
                updateLS();
            });
    
            todoUl.appendChild(todoEl);
            input.value = '';

            updateLS();
        };
    };

    function updateLS() {
        const todo1El = document.querySelectorAll('li');

        const todo1 = [];

        todo1El.forEach(todoEl => {
            todo1.push({
                text: todoEl.innerText, 
                completed: todoEl.classList.contains('completed')
            });
        });

        localStorage.setItem('todo1', JSON.stringify(todo1));
    }
