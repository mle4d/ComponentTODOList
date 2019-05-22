import component from './component.js';
import TodoItem from './TodoItem.js';

class TodoList extends component {

    render() {
        const list = this.renderDOM();

        const items = this.props.items;
        const onRemove = this.props.onRemove;

        items.forEach(todo => {
            const todoItem = new TodoItem({ todo, onRemove });
            const todoItemDOM = todoItem.render();
            list.appendChild(todoItemDOM);
        });
        return list;
    }

    renderTemplate() {
        return /*html*/`
            <ul id="foods"></ul>
        `;
    }
}

export default TodoList;