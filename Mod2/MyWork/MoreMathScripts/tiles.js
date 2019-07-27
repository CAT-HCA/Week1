// Description: This script calculates the number of tiles needed to tile a room
// with user input of floor dimensions, it will calculate number of tiles needed including an extra 10%
//for in case of damage, and ultimately the number of boxes of tiles needed.
//Author: Corinne Trudeau
"use strict";

//User Input
var floorLength = 3;
var floorWidth = 8;

//Variables
var tiles = floorLength * floorWidth;

//Calculations
var extraTiles = Math.ceil(tiles * 1.1);
var boxes = Math.ceil(extraTiles/12);

//Output
console.log("To tile a room with dimensions " + floorLength + " feet by " + floorWidth + " feet, you would need exactly " + tiles + " tiles.  To add an extra 10% in case of damage, you would need a total of " + extraTiles + " tiles, which would require " + boxes + " boxes." );


