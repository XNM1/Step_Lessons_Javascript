// function hello() {
//     console.log('hello world');
// }
// let timer = setTimeout(hello, 4000);
// //clearTimeout(timer);
// console.log('123');

// let timer2 = setInterval(hello, 2000);

function runFnByInterval(maxCount, delay, fn, ...arg) {
    let count = 0;
    let dfn = () => {
            fn(...arg);

            count++;
            if(count == maxCount) clearInterval(timer);
    }
    let timer = setInterval(dfn, delay);
}

function runFnByTimeout(maxCount, delay, fn, ...args) {
    let count = 0;
    let dfn = () => {
        fn(...args);

        count++;
        if(count == maxCount) {
            clearTimeout(timer);
            return;
        }
        setTimeout(dfn, delay);
    }
    let timer = setTimeout(dfn, delay);
}

function sum() {
    let _sum = 0;
    for (let i = 0; i < arguments.length - 1; i++) {
        _sum += arguments[i];
    }
    arguments[arguments.length - 1](_sum);
}

function hello() {
    console.log('hello world');
}

runFnByInterval(3, 1000, sum, 1,23,4,5, result => console.log("Sum: " + result));

sum(1,2,3,4,5, r => console.log(r));

// function constructorCounter(countStart) {
//     let count = countStart;
//     function counter() {
//         return ++count;
//     }
//     return counter;
// }

// let counter1 = constructorCounter(3);
// let counter2 = constructorCounter(10);

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log("------------------------");
// console.log(counter2());
// console.log(counter2());


// function sum(a, b) {
//     return a + b;
// }

// function hello() {
//     console.log("hello world");
// }


// function decCounter(fn) {
//     counter.count = 0;
//     function counter() {
//         counter.count++;
//         return fn(...arguments);
//     }
//     return counter;
// }

// let countedHello = decCounter(hello);
// countedHello();
// countedHello();
// countedHello();

// console.log(countedHello.count);

// console.log("------------------------");

// sum = decCounter(sum);
// console.log(sum(3,7));
// console.log(sum(7,1));

// console.log(sum.count);


// let count = 0;
// let maxCount = 3;

// function hello() {
//     console.log("hello");

//     count++;
//     if (count == maxCount) {
//         clearTimeout(timer);
//         return;
//     }
//     setTimeout(hello, 2000);
// }

// let timer = setTimeout(hello, 2000);

/* -------------------------------------------------------------------------- */

// function hello2() {
//     console.log("hello");
// }

// let timer2 = setInterval(hello2, 2000);