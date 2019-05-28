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
        completed: true
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

test('not case sensitive', assert => {
    const filter = {
        item: 'chi',
        completed: true
    };

    const filtered = filterTodos(todos, filter);

    assert.deepEqual(filtered, [{
        item: 'chikn',
        completed: true
    }]);
});

test('returns all on no filter', assert => {
    const filter = {
        item: '',
        completed: ''
    };

    const filtered = filterTodos(todos, filter);

    assert.deepEqual(filtered, todos);
});

test('completed and task', assert => {
    const filter = {
        item: 'c',
        completed: true
    };

    const filtered = filterTodos(todos, filter);

    assert.deepEqual(filtered, [
        {
            item: 'chikn',
            completed: true
        },
        {
            item: 'peas & carrots',
            completed: true
        }
    ]);
});