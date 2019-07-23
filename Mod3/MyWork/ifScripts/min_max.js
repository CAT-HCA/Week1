// Description: This script will identify the smallest of 3 numbers and largest of 3 numbers
//Author: Corinne Trudeau
"use strict";

//User Input
var a= 487;
var b= 32;
var c= 1234;

//Calculations
var answer

if ((a<b) && (a<c))
{
    answer = a
}
else if ((b<a) && (b<c))
{
    answer = b
}
else 
{
    answer = c
}
//displaying smallest number
console.log("The smallest number is " + answer)

if ((a>b) && (a>c))
{
    answer = a
}
else if ((b>a) && (b>c))
{
    answer = b
}
else 
{
    answer = c
}
//displaying largest
console.log("The smallest number is " + answer)