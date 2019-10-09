function appendToUl(element) {
    const ul = document.querySelector('ul');
    ul.appendChild(element);
}

function appendToDiv(element) {
    const lorem = document.querySelector('div#lorem');
    lorem.appendChild(element);
}

function addText(str) {
    const li = document.querySelector('li');
    li.innerText = str;
}

