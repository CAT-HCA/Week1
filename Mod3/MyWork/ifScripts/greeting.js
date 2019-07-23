// Description: This script will calculate which greeting to display to user based on hour of day
//Author: Corinne Trudeau
"use strict";

//User Inputs
var currentHour = 22;

//Calculations
var greeting;

if (currentHour <10)
{
    greeting = "Good morning!";
}
else if (currentHour <17)
{
    greeting = "Good day!";
}
else
{
    greeting = "Good evening!";
}

console.log(greeting)