// let user1 = {
//     id: 0,
//     name: 'Harley',
//     surname: 'Muller',
//     username: 'Clinton9',
//     email: 'Emmie_Conn@yahoo.com',
//     sayHello() {
//         return 'hello world';
//     }
// }

// let user2 = {
//     id: 1,
//     name: 'Emma',
//     surname: 'Rempel',
//     username: 'Eden9@yahoo.com',
//    // __proto__: user1
// }

// Object.assign(user2.__proto__, user1);

// user1.email = '123';

// console.log(user2.name);


// function sayHello() {
//     return `hello world, My name is ${this.name}`;
// }

let sayHello = () => {}
// let user1 = {
//     id: 0,
//     name: 'Harley',
//     surname: 'Muller',
//     username: 'Clinton9',
//     email: 'Emmie_Conn@yahoo.com',
// }

// let user2 = {
//     id: 1,
//     name: 'Emma',
//     surname: 'Rempel',
//     username: 'Eden9@yahoo.com',
//     sayHello: function() {
//         console.log(this.id);
//     }
// }

// user2.sayHello();

// user1.hello = sayHello;
// user2.helloWorld = sayHello;

// console.log(sayHello());


// function User(name, surname, username, email) {
//     this.name = name;
//     this.surname = surname;
//     this.username = username;
//     this.email = email;
// }

// User.prototype.sayHello = function() {
//     return `hello world, my name is ${this.name}`;
// }
// /* -------------------------------------------------------------------------- */
// function Employee(name, surname, username, email, company) {
//     Employee.prototype.__proto__.constructor.call(this, name, surname, username, email, company);
//     this.company = company;
// }

// Employee.prototype.__proto__ = User.prototype;

// let user1 = new Employee("Ramona", "Schneider", "Lauryn98", "Alphonso_Wiegand24@hotmail.com", "Fritsch");

// console.log(user1 instanceof User);


// function decCount(fn) {
//     Counter.count = 0;
//     function Counter() {
//         Counter.count++;
//         return fn.apply(this, arguments);
//     }
//     return Counter;
// }

class User {
    constructor(name, surname, username, email) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.email = email;
    }

    sayHello() {
        return `hello world, my name is ${this.name}`;
    }

    set name(value) {
        this.name = value;
    }

    get name() {
        return this.name;
    }
}

class Employee extends User {
    constructor(name, surname, username, email, company) {
        super(name, surname, username, email);
        this.company = company;
    }
    get company() { return this.company; }
}