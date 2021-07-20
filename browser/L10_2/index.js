//helloElement.onclick = helloElementOnClickHandler;

// function helloElementOnClickHandler2(e) {
//     alert('Hello world');
// }

// helloElement.addEventListener('click', helloElementOnClickHandler);
// helloElement.addEventListener('click', helloElementOnClickHandler2, true);
// helloElement.removeEventListener('click', helloElementOnClickHandler);

// function createEvent() {
//     let helloElement = document.querySelector('.hello');
//     let input = document.querySelector('input');
//     function helloElementOnClickHandler(event) {
//         event.target.style.backgroundColor = 'blue';
//         alert(input.value);
//     }
//     helloElement.addEventListener('click', helloElementOnClickHandler);
// }

// createEvent();

// h1.addEventListener('click', (e) => { alert('h1'); e.stopPropagation() }, true);
// h2.addEventListener('click', (e) => alert('h2'), true);
// h3.addEventListener('click', (e) => alert('h3'), true);

let helloElement = document.querySelector('.hello');
let input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
    e.preventDefault();
    e.target.value += e.key;
});


input.addEventListener('hello', e => console.log(e.detail));

let event = new CustomEvent('hello', {
    detail: {
        hello: 'world'
    }
});
input.dispatchEvent(event);

let ek = new KeyboardEvent('keydown', { key: 'h' });
input.dispatchEvent(ek);

class User extends EventTarget {
    walk(speed, startPlace, endPlace) {
        this.dispatchEvent(new CustomEvent('start walking', { detail: { speed, place: startPlace }}));
        console.log('walk');
        this.dispatchEvent(new CustomEvent('end walking', { detail: { speed, place: endPlace }}));
    }
}

let user = new User();
user.addEventListener('start walking', e => {});

window.onload = function() {

}