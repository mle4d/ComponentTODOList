function itemCompleted(item) {
    let checked = '';

    if(item.completed) {
        checked = 'checked';
        
    }

    return /*html*/`
        <li>
            <input type="checkbox" ${checked}>${item.item}
        </li>
    `;
}

export default itemCompleted;