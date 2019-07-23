"use strict";
var numUsDolls = 200;
var currencyType = "krone"

if (currencyType=="euro") {
    var exchangeDolls = numUsDolls * .89;
    console.log("$" + numUsDolls + " equals " + exchangeDolls + " in " + currencyType)
 }
 else if (currencyType=="kuna") {
    var exchangeDolls = numUsDolls * 6.59;
    console.log("$" + numUsDolls + " equals " + exchangeDolls + " in " + currencyType)
} 
else if (currencyType=="peso") {
   var exchangeDolls = numUsDolls * 19.06;
   console.log("$" + numUsDolls + " equals " + exchangeDolls + " in " + currencyType)
} 
else if (currencyType=="krone") {
   var exchangeDolls = numUsDolls * 8.61;
   console.log("$" + numUsDolls + " equals " + exchangeDolls + " in " + currencyType)
} 
