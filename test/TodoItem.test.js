import TodoItem from '../src/components/TodoItem.js';

const test = QUnit.test;

QUnit.module('grocery items');

test('template', assert => {
    const todo = {
        item: 'chikn',
        completed: true
    };
    const expected = /*html*/ `
    <li>
        <h2 class="name">${todo.item}</h2>
        <input type="checkbox">done
        <button class="remove-button">X</button>
    </li>
        `;
    const todoItem = new TodoItem({ todo });
    const html = todoItem.renderTemplate();

    assert.htmlEqual(html, expected);
});