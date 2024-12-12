"use strict";
function hello(name) {
    console.log("Hello " + name);
}
const firstName = "bob";
hello(firstName);
hello(firstName + " marley");
function concat(a, b) {
    return a + b;
}
const ds = concat("Donkey", concat("School", ""));
console.log(ds);
const x = 5;
