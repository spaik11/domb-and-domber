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
    img.src = `${str}`;
}

function sameClass(el1, el2) {
    const firstEl = document.querySelector(el1);
    const secondEl = document.querySelector(el2);
    secondEl.className = firstEl.className;
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

// Task 1
addText('i love dom');
addText('i love css');
addText('i love html');

// Task 2
appendToDiv(makeElement('img', 'img1'));
addImg('#img1', 'https://media.giphy.com/media/kfFOaEJ9GDmbYebTSu/giphy.gif');
appendToDiv(makeElement('img', 'img2'));
addImg('#img2', 'https://media.giphy.com/media/xT9IgFlWsUMDFzVIu4/giphy.gif');

// Task 3
sameClass('.numbered-item', '#thing-2')
sameClass('.numbered-item', '#thing-c')

// Task 4
blah('red', '#heading');

