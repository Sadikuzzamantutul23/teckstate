function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback(); // Call the function passed as a parameter
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Sadikuzzaman", sayGoodbye);
function twosum(a, b, callback) {
    const sum = a + b;
    callback(sum); // Call the function passed as a parameter with the sum
}   