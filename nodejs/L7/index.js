// function check(IAsyncResult, callback) {
//     let fc = () => {
//         if(IAsyncResult.length == 3) {
//             clearTimeout(timer);
//             callback(IAsyncResult);
//             return;
//         }
//         timer = setTimeout(fc);
//     }
//     let timer = setTimeout(fc);
// }

// function fact(n, IAsyncResult) {
//     let r = 1;
//     let fc = () => {
//         r *= n;
//         n--;
//         if(n == 1) {
//             clearTimeout(timer);
//             IAsyncResult.push(r);
//             return;
//         }
//         timer = setTimeout(fc);
//     }
//     let timer = setTimeout(fc);
// }

// let ir = [];
// fact(160, ir);
// fact(140, ir);
// fact(20, ir);
// check(ir, r => console.log(r));

// function fact(n, callback) {
//     let r = 1;
//     let fc = () => {
//         r *= n;
//         n--;
//         if(n == 1) {
//             clearTimeout(timer);
//             callback(r);
//             return;
//         }
//         timer = setTimeout(fc);
//     }
//     let timer = setTimeout(fc);
// }

// fact(150, r => console.log(`fact 150: ${r}`));
// fact(170, r => console.log(`fact 170: ${r}`));
// fact(14, r => console.log(`fact 14: ${r}`));


function fact(n, callback) {
    let r = 1;
    let fc = () => {
        r *= n;
        n--;
        if (n == 1) {
            clearTimeout(timer);
            callback(r);
            return;
        }
        timer = setTimeout(fc);
    }
    let timer = setTimeout(fc);
}

function factAsync(n) {
    return new Promise((resolve, reject) => fact(n, resolve));
}

factAsync(150).then(r => console.log(`fact 150: ${r}`));
factAsync(170).then(r => console.log(`fact 170: ${r}`));
factAsync(14).then(r => console.log(`fact 14: ${r}`));