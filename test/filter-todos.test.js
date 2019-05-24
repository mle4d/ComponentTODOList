import filterTodos from '../src/filter-todos.js';
const test = QUnit.test;

QUnit.module('filter todos');

const todos = [
    {
        item: 'chikn',
        completed: true
    },
    {
        item: 'peas & carrots',
        completed: false
    },
    {
        item: 'flour',
        completed: true
    }
];

test ('filter by item', assert => {
    const filter = {
        item: 'chikn',
        completed: ''
    };
    const expected = filterTodos(todos, filter);

    assert.deepEqual(expected, [
        {
            item: 'chikn',
            completed: true
        }
    ]);
    

});
