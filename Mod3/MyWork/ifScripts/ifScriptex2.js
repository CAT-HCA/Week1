// Description: This script utilizes if scripts
//Author: Corinne Trudeau
"use strict";

var year = 2100;
var leapYear;
if (year % 4 == 0)
{
    if (year % 100 == 0)
    {
        if (year % 400 == 0)
        {
            leapYear="true";
        }
        else         
        {
            leapYear="false";
        }
    }
    else
    {
        leapYear="true";
    }
}
else
{
    leapYear="false";
}
console.log("If the year is " + year + ", it " + leapYear + " a leap year.")