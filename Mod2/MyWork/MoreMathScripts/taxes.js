"use strict";

var salary = 120000;
var taxPercent = .23;
var taxAmount = salary * taxPercent

taxAmount = parseFloat(taxAmount.toFixed(2))

console.log("The monthly federal income tax on a $" + salary + " is $" + taxAmount)