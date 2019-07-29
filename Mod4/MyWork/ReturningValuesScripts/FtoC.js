// Description:  This function will convert temperature in Fahrenheit to Celsius
//Author: Corinne Trudeau
"use strict";

//convertFtoC
function convertFtoC(fTemp)
{
    var cTemp = (fTemp -32)/1.8;
    return cTemp;
}

//Elswhere in Code - defining the varaiable and calling the function
//user input or determined based on other information
var currentTemp = -40;
//calculation
var celsiusTemp = convertFtoC(currentTemp);
//output
console.log(celsiusTemp);
