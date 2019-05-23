import TodoItem from '../src/components/TodoItem.js';

const test = QUnit.test;

QUnit.module('grocery items');

test('template', assert => {
    const todos = {
        item: 'chikn',
        completed: true
    };
    const expected = /*html*/ `
    <li>
            <input type="checkbox" checked>${todos.task}
        </li>
        `;
    const todoItem = new TodoItem({ todos });
    const html = todoItem.renderTemplate();

    assert.htmlEqual(html, expected);
});