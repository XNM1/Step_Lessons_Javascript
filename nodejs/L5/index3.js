class User {
    #age;
    set age(value) {
        if (value < 0 || value > 140) throw new AgeError('incorrect age');
        this.#age = value;
    }
    get age() {return this.#age; }
    constructor(age) {
        this.age = age;
    }
}

class UserError extends Error {}
class AgeError extends UserError {}
class NameError extends UserError {}

try {
    let user = new User(-2);
}
catch(e) {
    if (e instanceof AgeError) {
        console.error('[AGE ERROR]: ' + e.message);
    }
    else if (e instanceof NameError) {
        console.error('[NAME ERROR]: ' + e.message);
    }
}
finally {
    //
}