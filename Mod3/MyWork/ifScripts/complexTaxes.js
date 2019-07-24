// Description: Pay check calculator
//this script will calculate federal tax rates, gross pay, and take home pay
//Author: Corinne Trudeau
"use strict";

//User Inputs
var payRate = 60;
var hoursWorked = 40;
var filingStatus = "Joint";
//Calculations
var taxableIncome;
var ssTaxRate = .062;
var medTaxRate = .0145;
var fedTaxRate;
var taxesOwed;
var takeHomePay;


//calculating regular pay vs OT pay
if (hoursWorked <= 40)
{
    taxableIncome = hoursWorked * payRate
}
else
{
    taxableIncome = (40 * payRate) + (hoursWorked - 40) * (payRate * 1.5)
}

//converting weekly gross pay to annual gross pay
taxableIncome=taxableIncome*52

//determining federal tax rate
if (filingStatus == "Single")
{
    if (taxableIncome<12000)
    {
        fedTaxRate = .05;
    }
    else if (taxableIncome<25000)
    {
        fedTaxRate = .1;
    }
    else if (taxableIncome<75000)
    {
        fedTaxRate = .15;
    }
    else if (taxableIncome>=75000)
    {
        fedTaxRate = .2;
    }

}
else  //(if filing status=Joint)
{
    if (taxableIncome<12000)
    {
        fedTaxRate = 0;
    }
    else if (taxableIncome<25000)
    {
        fedTaxRate = .06;
    }
    else if (taxableIncome<75000)
    {
        fedTaxRate = .11;
    }
    else if (taxableIncome>=75000)
    {
        fedTaxRate = .2;
    }
}

//calculate all (federal, social security, medicare) taxes owed
taxesOwed=(taxableIncome*fedTaxRate)+(taxableIncome*ssTaxRate)+(taxableIncome*medTaxRate)
//calculates annual take home pay
takeHomePay = taxableIncome - taxesOwed

console.log("If you made $" + taxableIncome + " and your filing status is " + filingStatus + " you owe $" + taxesOwed + " and your take-home pay will be $" + takeHomePay)