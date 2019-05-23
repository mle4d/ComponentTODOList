const test = QUnit.test;

QUnit.module('html equal');

test('whitespace', (assert) => {
    const html = /*html*/`
        <div>
            <span></span>
        </div>
    `;
    const expected = /*html*/`
        <div>
            <span></span>
        </div>
    `;
    assert.htmlEqual(html, expected);
});