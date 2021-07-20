let a = 1;

let user1 = {
    name: 'aaa',
    'sur name': 'bbb',
    birthday: new Date('1/1/2001'),
    showInfo() {
        console.log(this.name);
        console.log(this.surname);
        console.log(this.birthday);
    },
    [a]: a
};

let arr = [5,6,7,8,9]

//for(const el of arr) console.log(el)
arr.map(x => x**4).filter(x => x%2 == 0).forEach(x => console.log(x))

let a1, b,c,d;
a1 = b = c = d = 12;

let purchaseList = [
    {name:'milk',  price: 12.2, buy:true},
    {name:'bread', price:2},
]

function sort(purchaseList) {

}

sort(purchaseList);
