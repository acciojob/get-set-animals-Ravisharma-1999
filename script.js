// Animal Class
class Animal {
    constructor(species) {
        this._species = species; // Private property convention
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to log a generic sound
    makeSound() {
        console.log("Some generic animal sound!");
    }
}

// Cat Class (Subclass of Animal)
class Cat extends Animal {
    constructor() {
        super("Cat"); // Pass "Cat" as the species to the Animal constructor
    }

    // Method specific to Cat
    purr() {
        console.log("purr");
    }
}

// Dog Class (Subclass of Animal)
class Dog extends Animal {
    constructor() {
        super("Dog"); // Pass "Dog" as the species to the Animal constructor
    }

    // Method specific to Dog
    bark() {
        console.log("woof");
    }
}

// Example Usage
const genericAnimal = new Animal("Generic Animal");
console.log(genericAnimal.species); // "Generic Animal"
genericAnimal.makeSound();          // "Some generic animal sound!"

const cat = new Cat();
console.log(cat.species);           // "Cat"
cat.makeSound();                    // "Some generic animal sound!"
cat.purr();                         // "purr"

const dog = new Dog();
console.log(dog.species);           // "Dog"
dog.makeSound();                    // "Some generic animal sound!"
dog.bark();                         // "woof"
