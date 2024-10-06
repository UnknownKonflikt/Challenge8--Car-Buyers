// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // TODO: Declare properties of the Motorbike class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    // Call the constructor of the parent class, Vehicle
    super(); //Pass any necessary parameters if needed

    // Initialize properties of the Motorbike class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    // Check if the wheels array has 2 elements
    // If not, create 2 new Wheel objects
    // Otherwise, use the provided wheels array
    this.wheels = wheels.length !== 2 ? [new Wheel(), new Wheel()] : wheels;
  }

  // TODO: Implement the wheelie method
  wheelie(): void {
    console.log(`${this.make} ${this.model} is doing a wheelie!`);
  }
  // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
  override printDetails(): void {
    // TODO: Override the printDetails method from the Vehicle class
    super.printDetails();
    // TODO: The method should log the details of the Motorbike
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Color: ${this.color}`);
    console.log(`Wheels: ${this.wheels}`);
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
}
// Export the Motorbike class as the default export
export default Motorbike;




