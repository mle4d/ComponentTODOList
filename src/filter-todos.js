function filterTodos(todos, filter) {
    const lowerCaseFilter = filter.item.toLowerCase();
    return todos.filter(todo => {
       
        const lowerCaseItem = todo.item.toLowerCase();
        const hasItem = lowerCaseItem.includes(lowerCaseFilter);
        const todoStatus = todo.completed.toString();
        const filterStatus = filter.completed;
        let isCompleted = todoStatus.includes(filterStatus);

        if(filterStatus === 'all') {
            isCompleted = true;
        }  
        return hasItem && isCompleted;
    });
}

export default filterTodos;


