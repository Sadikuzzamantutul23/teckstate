function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback(); // Call the function passed as a parameter
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Sadikuzzaman", sayGoodbye);