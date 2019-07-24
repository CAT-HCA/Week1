// Description: convertCtoF function will convert temperature in Fahrenheit to Celsius
//
//Author: Corinne Trudeau
"use strict";

//convertCtoF function will convert temperature in Celsius to Fahrenheit
function convertCtoF(cTemp)
{
    var fTemp = cTemp * 1.8 + 32;
    return fTemp;
}

//Elswhere in Code - defining the varaiable and calling the function
//user input or determined based on other information
var currentTemp = -40;
//calculation
var FahrenheitTemp = convertCtoF(currentTemp);
//output
console.log(FahrenheitTemp);
