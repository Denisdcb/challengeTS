"use strict";
class Animaux {
    constructor(name, nbPattes, color) {
        this.name = name;
        this.nbPattes = nbPattes;
        this.color = color;
    }
}
class Chat extends Animaux {
    constructor(name, color, type) {
        super(name, 4, color);
        this.type = type;
    }
    caresser() {
    }
    nourir() {
    }
}
class Chien extends Animaux {
    constructor(name, color, type) {
        super(name, 4, color);
        this.type = type;
    }
    nourir() {
    }
}
class Oiseau extends Animaux {
    constructor(name, color, type) {
        super(name, 2, color);
        this.type = type;
    }
    nourir() {
    }
}
class Poisson extends Animaux {
    constructor(name, color, type) {
        super(name, 0, color);
        this.type = type;
    }
    nourir() {
    }
}
class Insecte extends Animaux {
    constructor(name, nbPattes, color, type) {
        super(name, nbPattes, color);
        this.type = type;
    }
    nourir() {
    }
}
function photographier(animal) {
    console.log(`Vous avez photographier l'animal : ${animal.name}`);
}
function miauler(animal) {
    if (animal instanceof Chat) {
        console.log(`${animal.name} dit MIAOUUUU`);
    }
    else {
        console.log(`${animal.name} ne peut pas miauler`);
    }
}
function aboyer(animal) {
    if (animal instanceof Chien) {
        console.log(`${animal.name} dit waoufffff`);
    }
    else {
        console.log(`${animal.name} ne peut pas aboyer`);
    }
}
function voler(animal) {
    console.log(`${animal.name} s'est envolé`);
}
function nager(animal) {
    console.log(`${animal.name} nage`);
}
function caresser(animal) {
    console.log(`Vous caresser : ${animal.name}`);
}
function nourir(animal) {
    if (animal.color === "black") {
        console.log(`Vous avez nourit : ${animal.name}`);
    }
    else {
        console.log(`Vous ne pouvez pas nourir ${animal.name} car il n'est pas noir`);
    }
}
const chat1 = new Chat("mimi", "black", "européen");
const chat2 = new Chat("momo", "white", "européen");
const chien1 = new Chien("summer", "black", "terre-neuve");
const chien2 = new Chien("phantom", "white", "moon-moon");
const oiseau1 = new Oiseau("cuit-cuit", "red", "mésange");
const oiseau2 = new Oiseau("piou-piou", "black", "merle");
const poisson1 = new Poisson("mayo-thon", "black", "thon");
const poisson2 = new Poisson("baby-shark", "black", "requin");
const insecte1 = new Insecte("rico", 1000, "black", "requin");
photographier(chat1);
miauler(chat1);
nourir(chat1);
nourir(chat2);
caresser(chat2);
aboyer(chat1);
aboyer(chien2);
nager(chien1);
aboyer(chat2);
