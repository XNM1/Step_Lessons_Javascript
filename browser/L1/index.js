let count = 0;

function click() {
    count++;
    let counterDiv = document.querySelector('.counter');
    counterDiv.innerText = count;
}

let countButton = document.querySelector('.count');
countButton.addEventListener('click', click);


let div = document.createElement('div');
div.append('Hello');
div.style.color = 'red';
document.body.append(div);

let s = prompt('fff');

let numbers = [];
