// Description: Van Rentals
// This script calculates how man vans would be needed and cost (total and per person)
//Author: Corinne Trudeau
"use strict";

//User Input
var people = 93;
var vanPrice = 250;

//Calculations
var vans = Math.ceil(people/15);
var vanCost = vans * vanPrice;
var indCost = parseFloat(vanCost / people).toFixed(2);

//Output
console.log("For " + people + " passengers, you would need to rent " + vans + " vans." );
console.log("To rent " + vans + " van, it would cost a total of $" + vanCost + ".");
console.log("Given " + people + " passengers, each person would owe $" + indCost);

