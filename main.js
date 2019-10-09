function appendToUl(element) {
    const ul = document.querySelector('ul');
    ul.appendChild(element);
}

function appendToDiv(element) {
    const lorem = document.querySelector('div#lorem');
    lorem.appendChild(element);
}

function addText(str) {
    const newLi = document.createElement('li')
    const li = document.querySelector('li');
    newLi.innerText = str;
    li.appendChild(newLi);
}

function addImg(imgEl, str) {
    const img = document.querySelector(imgEl);
    img.src = str;
}

function sameClass(el1, el2) {
    const firstEl = document.querySelector(el1);
    const secondEl = document.querySelector(el2);
    secondEl === firstEl;
}

function makeElement(tag, id) {
    const newEl = document.createElement(tag)
    newEl.id = id;
    return newEl;
}

function blah(color, id) {
    const id1 = document.querySelector(id);
    id1.style.color = color;
}

addText('i love dom');
addText('i love css');
addText('i love html');

appendToDiv(makeElement('img', '#img1'))
appendToDiv(makeElement('img', '#img2'))



blah('red', '#heading');

