// Clothing
// Define a Clothing class with properties name, color, material, and isDirty.
// isDirty should always be false at instantiation of an object.
// Add a describe() method that prints a statement using the values stored in the object's other properties. The statement should read differently depending on whether the clothing item is dirty or not.
// Add a wear() method outside the constructor that changes the value of isDirty and prints a notification.
// Add a launder() method outside the constructor that changes the value of isDirty and prints a notification.
// Instantiate at least 3 different kinds of clothing with unique properties.
// Use the describe() method to print descriptions of each clothing item.
// Use the wear() method on two of the clothing items.
// Use the launder() method on one of the dirty clothing items and describe() it again.


// Define a Clothing class with properties name, color, material, and isDirty.
class Clothing {

	constructor(name, color, material) {
		this.name = name;
		this.color = color;
		this.material = material;
		this.isDirty = false; // isDirty should always be false at instantiation of an object.
        this.describe = function() { // Add a describe() method that prints a statement using the values stored in the object's other properties.
            if (!this.isDirty) { // The statement should read differently depending on whether the clothing item is dirty or not.
                console.log(`This ${this.color} ${this.name} is made from ${this.material} and it is dirty.`)
            }
            else {
                console.log(`This ${this.color} ${this.name} is made from ${this.material} and it is clean.`)
            }
        };
	}

    // Add a wear() method outside the constructor that changes the value of isDirty and prints a notification.
    wear() {
        this.isDirty = true;
        console.log(`This ${this.color} ${this.name} is dirty.`);
        // this.describe();
    }
    
    // Add a launder() method outside the constructor that changes the value of isDirty and prints a notification.
    launder() {
        this.isDirty = false;
        console.log(`This ${this.color} ${this.name} is clean.`)
    }

}

// Instantiate at least 3 different kinds of clothing with unique properties.
let shirt = new Clothing("t-shirt", "gray", "cotton");
let socks = new Clothing("pair of socks", "black", "leather");
let jeans = new Clothing("jeans", "dark blue", "cotton");

// Use the describe() method to print descriptions of each clothing item.
shirt.describe();
socks.describe();
jeans.describe();

// Use the wear() method on two of the clothing items.
shirt.wear();
jeans.wear();

// Use the launder() method on one of the dirty clothing items and describe() it again.
shirt.launder();

// ... and describe() it again.
shirt.describe();


//Team: Eric Spaeth, Charlie Davidson