function createElement(tagName, className) {
    const tag = document.createElement(tagName);
    tag.className = className;

    return tag;
}

function createBarrier(reverse = false) {
    this.tag = createElement('div', 'barrier');
    
}