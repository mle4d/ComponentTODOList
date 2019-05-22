import component from './component.js';

class TodoItem extends component {

    render() {
        const listItem = this.renderDOM();
        const onRemove = this.props.onRemove;
        const todo = this.props.cat;
        const removeButton = listItem.querySelector('button');

        removeButton.addEventListener('click', () => {
            onRemove(todo);
        });

        return listItem;
    }

    renderTemplate() {
        const todo = this.props.todo;

        return /*html*/`
        <li>
            <h2 class="name">${todo.name}</h2>
            <button class="remove-button">X</button>
        </li>
        `;
    }
}



export default TodoItem;