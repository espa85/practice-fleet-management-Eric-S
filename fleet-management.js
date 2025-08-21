/*
**********************************
Practice: Fleet Management
**********************************

Instructions
--------------------
Scenario

You’ve been hired to help a logistics company build a system to manage its fleet of
vehicles. The system should be able to:
    1. Create individual vehicles with properties like type, make, model, year, and
mileage.
    2. Add a method to update the mileage of a vehicle when it is used.
    3. Add a method to display the details of the vehicle in a user-friendly format.
    4. Instantiate multiple vehicles from the class and test your methods.

Tasks

1. Define the Vehicle Class:
    ○ The constructor should include properties: type, make, model, year, and mileage.
    ○ Use default values for mileage (e.g., 0).
2. Add Methods:
    ○ drive(distance): Increases the vehicle’s mileage by the given
distance (in kilometers or miles).
    ○ getDetails(): Returns a formatted string describing the vehicle’s details.
3. Create and Use Vehicle Objects:
    ○ Instantiate at least three vehicle objects with different properties (e.g., a car, a truck, and a motorcycle).
    ○ Use the drive method to simulate trips and update mileage.
    ○ Use the getDetails method to print each vehicle’s updated information.
*/

// Create individual vehicles with properties like type, make, model, year, and mileage.

class Vehicle{

    constructor(type,make,model,year,mileage) {
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = 0;
    }

    //Add method: drive(distance): Increases the vehicle’s mileage by the given distance
    drive(distance){
        this.mileage += distance;
    }

    //Add method: getDetails(): Returns a formatted string describing the vehicle’s details.
    getDetails(){
        console.log(`
            Type:  \t${this.type}
            Make:  \t${this.make}
            Model:  \t${this.model}
            Year:  \t${this.year}
            Mileage: \t${this.mileage}`);
    }

}

/*Create and Use Vehicle Objects:
    ○ Instantiate at least three vehicle objects with different properties (e.g., a car, a truck, and a motorcycle).
    ○ Use the drive method to simulate trips and update mileage.
    ○ Use the getDetails method to print each vehicle’s updated information.
*/

let car = new Vehicle("car","Ford","Mustang GT",2025,15000);
let truck = new Vehicle("truck","Chevy","Silverado",2024,23000);
let motorcycle = new Vehicle("motorcycle","Harley Davidson","Sportster S", 2025,6000);

car.drive(350);
truck.drive(1253);
motorcycle.drive(224);

car.getDetails();
truck.getDetails();
motorcycle.getDetails();


//Practice on Classes