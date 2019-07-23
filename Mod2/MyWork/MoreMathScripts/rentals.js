"use strict";

var vanPrice = 250;
var people = 38;
var vans = Math.ceil(people/15)
var vanCost = vans * vanPrice

console.log("You would need " + vans + " vans for " + people +" passengers.")

var indCost = vanCost / people;
indCost = parseFloat(indCost.toFixed(2));

console.log("If there are " + people + " passengers, each person would owe $" + indCost) 

var cashRec = indCost * people; 
cashRec = parseFloat(cashRec.toFixed(2));

console.log("If each passenger pays $" + indCost + ", you would collect a total of $" + cashRec)

var extraMoney = cashRec - vanCost;
extraMoney = parseFloat(extraMoney.toFixed(2));

console.log("You received an extra $" + extraMoney + " by collecting " + indCost + " per person.")