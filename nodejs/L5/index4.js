let arr = [1,2,3,4,5];
// let first = arr[0];
// let second = arr[1];
// let third = arr[2];
// let [, , third = 14, ...rest] = arr;
// console.log(third);

// let matrix = [
//     [1,2,3],
//     [4,5,6]
// ];

// let [,[,five,]] = matrix;
// console.log(five);

let user = {
    name: "Arno",
    surname: "Wehner",
    gender: "Gender Variant",
    email: "Carli_Orn70@hotmail.com",
    //age: 55
}

let {gender: g, name, age = 99, ...rest} = user;
console.log(g);