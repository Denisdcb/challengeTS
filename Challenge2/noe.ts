class Animaux {
    name: string;
    nbPattes: number;
    color: string;

    constructor(name: string, nbPattes: number, color: string) {
        this.name = name;
        this.nbPattes = nbPattes;
        this.color = color;
    }
}

interface Caressable {
    caresser(): void
}

interface Nourissable {
    nourir():void
}

class Chat extends Animaux implements Caressable, Nourissable  {
    type: string;

    constructor(name: string, color: string, type: string) {
        super(name, 4, color);
        this.type = type;
    }

    caresser(): void {
    }

    nourir(): void {
    }

}

class Chien extends Animaux implements Nourissable {
    type: string;

    constructor(name: string, color: string, type: string) {
        super(name, 4, color);
        this.type = type;
    }

    nourir(): void {
    }
}

class Oiseau extends Animaux implements Nourissable {
    type: string;

    constructor(name: string, color: string, type: string) {
        super(name, 2, color);
        this.type = type;
    }

    nourir(): void {
    }
}

class Poisson extends Animaux implements Nourissable{
    type: string;

    constructor(name: string, color: string, type: string) {
        super(name, 0, color);
        this.type = type;
    }

    nourir(): void {
    }
}

class Insecte extends Animaux implements Nourissable {
    type: string;

    constructor(name: string, nbPattes: number, color: string, type: string) {
        super(name, nbPattes, color);
        this.type = type;
    }

    nourir(): void {
    }
}

function photographier(animal: Animaux): void {
    console.log(`Vous avez photographier l'animal : ${animal.name}`)
}

function miauler(animal: Chat): void {
    console.log(`${animal.name} dit MIAOUUUU`)
}

function aboyer(animal: Chien): void {
    console.log(`${animal.name} dit WAOUFFF`)
}

function voler(animal: Oiseau): void {
    console.log(`${animal.name} s'est envolé`)
}

function nager(animal: Poisson): void {
    console.log(`${animal.name} nage`)
}

function caresser(animal: Animaux & Caressable): void {
    console.log(`Vous caresser : ${animal.name}`)
}

function nourir(animal: Animaux & Nourissable): void {
    if(animal.color === "black") {
        console.log(`Vous avez nourit : ${animal.name}`)
    } else {
        console.log(`Vous ne pouvez pas nourir ${animal.name} car il n'est pas noir`)
    }
}

const chat1 = new Chat("mimi","black", "européen");
const chat2 = new Chat("momo", "white", "européen");
const chien1 = new Chien("summer", "black", "terre-neuve");
const chien2 = new Chat("phantom", "white", "moon-moon");
const oiseau1 = new Oiseau("cuit-cuit", "red", "mésange");
const oiseau2 = new Oiseau("piou-piou", "black", "merle");
const poisson1 = new Poisson("mayo-thon", "black", "thon");
const poisson2 = new Poisson("baby-shark", "black", "requin");
const insecte1 = new Insecte("rico", 1000, "black", "requin");