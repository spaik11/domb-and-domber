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

function addImg(imgEl, str) {
    const img = document.querySelector(imgEl)
    img.src = str;
}

function setClass(el1, el2) {
    const firstEl = document.querySelector(el1);
    const secondEl = document.querySelector(el2);
    secondEl === firstEl;
}

