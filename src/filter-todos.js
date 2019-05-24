function filterTodos(todos, filter) {
    const lowerCaseFilter = filter.item.toLowerCase();
    return todos.filter(todo => {
        const lowerCaseItem = todo.item.toLowerCase();
        const hasItem = lowerCaseItem.includes(lowerCaseFilter);

        return hasItem;
    });
}
export default filterTodos;
