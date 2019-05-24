import component from './Component.js';

class TodoItem extends component {

    render() {
        const listItem = this.renderDOM();
        const onRemove = this.props.onRemove;
        const todo = this.props.todo;
        const removeButton = listItem.querySelector('button');

        removeButton.addEventListener('click', () => {
            onRemove(todo);
        });

        return listItem;
    }

    renderTemplate() {
        const todo = this.props.todo;
        let checked = '';

        if(todo.completed) {
            checked = 'checked';
        }

        return /*html*/`
        <li>
            <h2 class="name">${todo.item}</h2>
            <input type="checkbox" ${checked}>done
            <button class="remove-button">X</button>
        </li>
        `;
    }
}



export default TodoItem;