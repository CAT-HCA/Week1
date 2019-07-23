"use strict";

var floorLength = 3;
var floorWidth = 8;
var tiles = floorLength * floorWidth;
var extraTiles = Math.ceil(tiles * 1.1)

console.log(extraTiles)

var boxes = Math.ceil(extraTiles/12)

console.log("You would need " + boxes + " boxes to have 10% extra.")
