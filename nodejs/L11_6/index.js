const Emitter = require("events");
let emitter = new Emitter();

emitter.on("hello", function () {
    console.log("Hello world!");
});

emitter.emit("hello");

class User {
    constructor() {
        this.walkEvents = new Emitter();
    }
    walk() {
        this.walkEvents.emit('start walking', { speed: 12 });
        console.log("walking...");
        this.walkEvents.emit('end walking', { speed: 2 });
    }
}

let user = new User();
user.walkEvents.on('start walking', data => console.log(`speed: ${data.speed}`));
user.walk();