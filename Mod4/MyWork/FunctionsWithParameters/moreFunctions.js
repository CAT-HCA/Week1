// Description: This script will be using functions with parameters to return a mailing address label
//Author: Corinne Trudeau
"use strict";

//displayMailingLabel function, will display the name and address
function displayMailingLabel(name,address,city,state,zip)
{
    var message =name + "\n" + address + "\n" + city + ", " + state + " " + zip;
    console.log(message);
}
//User Input
var myName = "Cori Ader";
var myAddress = "123 Main Street";
var myCity = "Bristol";
var myState = "CT";
var myZip = "06010";
//end of displayMaillingLabel function


//addNumbers function, will add 2 numbers together and display the addition equation
function addNumbers(num1,num2)
{
    var sumOfNums = num1+num2;
    var message = num1 + "+" + num2 + "=" + sumOfNums;
    console.log(message);
}
//end of addNumbers function

//subtractNumbers function, will subtract one number from another and display equation and answer
function subtractNumbers(num1,num2)
{
    var answer = num1-num2;
    var message = num1 + "-" + num2 + "=" + answer;
    console.log(message);
}
//end of subtractNumbers function

//multiplyNumbers function, will multiply one number by another and display equation and answer
function multiplyNumbers(num1,num2)
{
    var answer = num1*num2;
    var message = num1 + "x" + num2 + "=" + answer;
    console.log(message);
}
//end of multiplyNumbers function

//divideNumbers function, will subtract one number from another and display equation and answer
function divideNumbers(num1,num2)
{
    var answer = num1/num2;
    var message = num1 + "/" + num2 + "=" + answer;
    console.log(message);
}
//end of divideNumbers function


//displayReceipt function, calculate change owed on a bill or remaining balance
function displayReceipt(totalDue,amountPaid) 
{
    var changeDue = totalDue-amountPaid;
    
    if ((totalDue-amountPaid)<0)
    {
        var message ="Total Due: $" + totalDue + "\nAmount Paid: $" + amountPaid + "\n\nChange Due: $" + Math.abs(changeDue).toFixed(2);
        console.log(message);
    }
    else{
        var message ="You're remaining owed balance is $" + Math.abs(changeDue).toFixed(2);
        console.log(message);
    }
}
//end of displayReceipt function


//Calling each function
//calling the displayMailingLabel function
displayMailingLabel(myName, myAddress, myCity, myState, myZip);

//calling the addNumbers function
addNumbers(30, 100);

//calling the addNumbers function
subtractNumbers(20,15);

//calling the multiplyNumbers function
multiplyNumbers(20,15);

//calling the divideNumbers function
divideNumbers(20,15);

//calling the displayReceipt function
displayReceipt(20.56741,15);

