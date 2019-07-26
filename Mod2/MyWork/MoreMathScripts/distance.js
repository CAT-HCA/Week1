// Description: Distance Formula
// This script will calculate the distance between 2 points
//Author: Corinne Trudeau
"use strict";
//User Input
var X1 = 4;
var X2 = 9;
var Y1 = 6;
var Y2 = 15;
//Variables
var xDif = X2 - X1;
var yDif = Y2 - Y1;
//Calculations
var distance = Math.sqrt((Math.pow(xDif,2)) + (Math.pow(yDif,2)))
//Output
console.log("The distance from (" + X1 + "," + Y1 + ") to (" + X2 + "," + Y2 + ") is " + distance)
