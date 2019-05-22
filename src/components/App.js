import component from './component.js';
import Header from './Header.js';

class App extends component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);
    }
}


export default App;