// import the classes
import {Truck}  from "../classes/Truck.js";
import Motorbike from "../classes/Motorbike.js";
import Car from "../classes/Car.js";

// define the interface
interface AbleToTow {
    // declare the properties
    tow(vehicle: Truck | Motorbike | Car): void;
    towingCapacity: number;
    // tow method takes a truck or a motorbike or a car as an argument
    // and returns void
}

// export the interface
export default AbleToTow;
