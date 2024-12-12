"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    tellMyName() {
        console.log(`I am ${this.name}`);
    }
    tellMyAge() {
        console.log(`I am ${this.age} years`);
    }
}
const pers1 = new Person("John", 40);
const pers2 = new Person("Mary", 35);
pers1.tellMyName();
pers1.tellMyAge();
pers2.tellMyName();
pers2.tellMyAge();
