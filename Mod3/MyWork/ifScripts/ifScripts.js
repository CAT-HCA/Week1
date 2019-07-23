// Description: This script utilizes if scripts
//Author: Corinne Trudeau
"use strict";

var payRate = 23;
var hoursWorked = 39;

if (hoursWorked <= 40)
{
    var grossPay = hoursWorked * payRate
}
else
{
    grossPay = (40 * payRate) + (hoursWorked - 40) * (payRate * 1.5)
}

console.log("If you work " + hoursWorked + " hours, your gross pay will be $" + grossPay)