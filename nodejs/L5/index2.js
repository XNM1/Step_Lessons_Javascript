function* operations1(a,b) {
    let r = a + b;
    yield r;
    r = a -b;
    yield r;
}

function* operations2(a,b) {
    let r = a * b;
    yield r;
    r = a / b;
    yield r;
}

function* operations(a,b) {
    yield* operations1(a,b);
    yield* operations2(a,b);
}

let c1 = operations(12,7);

console.log(c1.next());
console.log(c1.next());
console.log(c1.next());
console.log(c1.next());
console.log(c1.next());

for(let c of operations(8, 22)) {
    console.log(c)
}


function* numberGen({start = 0, end = 4, isEven = true} = {}) {
    start = start % 2 == 0 && isEven ? start : start + 1;
    for(let i = start; i < end; i += 2) yield i;
}

let startOption = { end: 55, isEven: false};
console.log(Array.from(numberGen()));
console.log(Array.from(numberGen()));