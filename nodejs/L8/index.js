async function hello() {
    console.log('hello world');
    return '123';
}

async function hello2(a) {
    console.log('hello world 2' + a);
    return '321';
}

async function main() {
    let r = await hello();
    return await hello2(r);
}

function div(a,b) {
    return new Promise((r, e) => {
        if (!b || b === 0) e(new Error('divided by zero'));
        r(a/b);
    });
}

// async function div(a, b) {
//     if (!b || b === 0) throw new Error('divided by zero');
//     return a/b;
// }

// div(12, 4).then(result => console.log(result)).catch(error => console.log(error.message));

hello().then(r => console.log(r));

setTimeout(() => console.log('Last'));

//queueMicrotask(hello2);

hello2().then(r => console.log(r));

console.log('First');

let promise = Promise.race([
    hello(),
    hello2(),
])

main().then(r => console.log(r));