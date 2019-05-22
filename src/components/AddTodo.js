import component from './component.js';

class AddTodo extends component {

    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;

        form.addEventListener('submit', event =>
        {
            event.preventDefault();

            const formData = new FormData(form);

            const newTodo = {
                Item: formData.get ('Item')
            };
            onAdd(newTodo);

            form.reset();
        });
        return form;
    }
    renderTemplate() {
        return /*html*/`
            <form class="add-todo">
                <label>Item: <input name="Item"></label>
                <button>Add</button>
            </form>
            `;
    
    }
    
}
export default AddTodo;
