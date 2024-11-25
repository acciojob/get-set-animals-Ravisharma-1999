// Animal Class
class Animal {
    constructor(species) {
        this._species = species;
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to log a generic sound
    makeSound() {
        console.log(`The ${this._species} makes a sound`);
    }
}

// Cat Class
class Cat extends Animal {
    constructor(species) {
        super(species);
    }

    // Method specific to Cat
    purr() {
        console.log("purr");
    }
}

// Dog Class
class Dog extends Animal {
    constructor(species) {
        super(species);
    }

    // Method specific to Dog
    bark() {
        console.log("woof");
    }
}

// Attach classes to the global window object for Cypress testing
window.Animal = Animal;
window.Cat = Cat;
window.Dog = Dog;
