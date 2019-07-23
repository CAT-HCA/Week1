"use strict";

var X1 = 4;
var X2 = 9;
var Y1 = 6;
var Y2 = 15;
var xDif = X2 - X1;
var yDif = Y2 - Y1;

var distance = Math.sqrt((Math.pow(xDif,2)) + (Math.pow(yDif,2)))

console.log("The distance is " + distance)