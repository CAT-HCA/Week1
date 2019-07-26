// Description: Van Rentals
// This script can be used to calculate how man vans would be needed and cost (total and per person)
//Author: Corinne Trudeau
"use strict";

//User Input
var vanPrice = 250;
var people = 38;

//Calculations
var vans = Math.ceil(people/15)
var vanCost = vans * vanPrice
var indCost = vanCost / people;
var cashRec = indCost * people; 
var extraMoney = cashRec - vanCost;

//Variables
indCost = parseFloat(indCost.toFixed(2));
cashRec = parseFloat(cashRec.toFixed(2));
extraMoney = parseFloat(extraMoney.toFixed(2));

//Output
console.log("You would need " + vans + " vans for " + people +" passengers.")
console.log("If there are " + people + " passengers, each person would owe $" + indCost) 
console.log("If each passenger pays $" + indCost + ", you would collect a total of $" + cashRec)
console.log("You received an extra $" + extraMoney + " by collecting " + indCost + " per person.")