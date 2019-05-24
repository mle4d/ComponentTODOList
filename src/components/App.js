import component from './Component.js';
import Header from './Header.js';
import AddTodo from './AddTodo.js';
import Filter from './Filter.js';
import TodoList from './TodoList.js';
import todos from '../data/todos.js';
import filterTodos from '../filter-todos.js';


class App extends component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const addTodo = new AddTodo({
            onAdd: (newTodo) => {
                todos.unshift(newTodo);
                todoList.update({ todos });
               // filterTodos.update();
            }
        });
        const addTodoDOM = addTodo.render();
        main.appendChild(addTodoDOM);

        const filter = new Filter({
            onFilter: filter => {
                const filtered = filterTodos(todos, filter);
                todoList.update({ todos: filtered });
            
            }
        });
        main.appendChild(filter.render());

        const todoList = new TodoList({
            todos, 
            onRemove: (todoToRemove) => {
                const index = todos.indexOf(todoToRemove);
                todos.splice(index, 1);

                todoList.update({ todos });
            }
        });
        const todoListDOM = todoList.render();
        main.appendChild(todoListDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <div>
            <!-- Header goes here -->
            <main>
                <!-- TodoList goes here -->
            </main>
        </div>
        `;
    }
}

export default App;