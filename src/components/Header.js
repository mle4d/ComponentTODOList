import Component from './component.js';

class Header extends Component {
    renderTemplate() {
        return /*html*/`
            <header>
                <h1>Grocery List</h1>
            </header>
        `;
    }
}

export default Header;