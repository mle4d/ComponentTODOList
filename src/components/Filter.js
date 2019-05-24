import Component from './Component.js';

class Filter extends Component {

    render() {
        const dom = this.renderDOM();
        const form = dom.querySelector('form');
        //const radio = dom.querySelector('')
        form.addEventListener('input', () => {
            this.props.onFilter({
                item: form.elements['filter'].value,
                completed: form.elements['radio'].value
            });
        });
        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <div>
            <form class="filter-section">
                <input class="filter" name="filter">
                <span class="lollipop">🍭</span>
                <label for="all">
                    <input type="radio" name="radio" value="all">
                </label>
                <label for="Done">
                    <input type="radio" name="radio" value="true">
                </label>
                <label for="To-Buy">
                    <input type="radio" name="radio" value="false">
                </label>
            </form>
        </div>
            `;
    }
}

export default Filter;