function hello() {
    console.log('hello world');
}

function decCounter(fn) {
    counter.count = 0;
    function counter() {
        counter.count++;
        return fn();
    }
    return counter;
}

let countedHello = decCounter(hello);

countedHello();
countedHello();
countedHello();
console.log(countedHello.count);