let mixinSayHello = {
    sayHello() {
        return `hello world, my name is ${this.name}`;
    },
    screamHello() {
        return `HELLO WORLD, MY NAME IS ${this.name.toUpperCase()}`;
    }
};

class User {
    constructor(name, surname, email, age) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.age = age;
    }
}

Object.assign(User.prototype, mixinSayHello);

class Employee extends User {
    constructor(name, surname, email, age, company) {
        super(name, surname, email, age);
        this.company = company;
    }
}

let user = new Employee('Danielle', 'Becker', 'Edison75@yahoo.com', 23, 'Dare');

console.log(user.screamHello());

console.log(Object.entries(user));

for(let [k, v] of Object.entries(user)) {
    console.log(`${k}=${v}`);
}

class UserCollection extends Array {
    getUserUpper21() {
        return this.filter(u => u.age > 21);
    }
}

let users = new UserCollection(
    new User('Ursula', "Hansen", 'Enrique_Huels14@gmail.com', 18),
    new User('Monserrat', "Fisher", 'Leon19@hotmail.com', 24)
);

console.log(users.getUserUpper21());