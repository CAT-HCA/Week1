// Description: calculating taxes owed using functions
//
//Author: Corinne Trudeau
"use strict";

//getSocSecTax function calculates the percentage of Social security tax you would pay based on your income
function getSocSecTax(grossPay)
{
    var socSecTax = grossPay*.062;
    return socSecTax;
}
//END getSocSecTax function


//getMedicareTax function calculates the percentage of medicare tax you would pay based on your income
function getMedicareTax(grossPay)
{
    var medicareTax = grossPay*.0145;
    return medicareTax;
}
//END getMedicareTax function

//getFederalTax function calculates the percentage of Federal tax you would pay based on your income
function getFederalTax(withHolding)
{
    var FederalTaxPerc;
    if (withHolding == 0)
    {
        FederalTaxPerc = .23;
    }
    else if (withHolding == 1)
    {
        FederalTaxPerc = .21;
    }
    else if (withHolding == 2)
    {
        FederalTaxPerc = .195;
    }
    else if (withHolding == 3)
    {
        FederalTaxPerc = .185;
    }
    else
    {
        FederalTaxPerc = .18-((withHolding-4)*.005);
    }
    return FederalTaxPerc;   
}

//END getFederalTax function

//Elswhere in Code - defining the varaiable and calling the function
//user input or determined based on other information

var totalIncome = 750;
var withHoldingCode = 12;
//calculation
var ssTaxOwed = getSocSecTax(totalIncome);
var fedTaxOwed = getFederalTax(withHoldingCode)*totalIncome;
var medTaxOwed = getMedicareTax(totalIncome);
var takeHomePay = totalIncome - (ssTaxOwed+medTaxOwed+fedTaxOwed);
//output
console.log("Gross Pay: $" + totalIncome);
console.log("Social Security Tax Withholding: $" + ssTaxOwed);
console.log("Medicare Tax Withholding: $" + medTaxOwed);
console.log("Federal Tax Withholding: $" + fedTaxOwed);
console.log("Take Home Pay: $" + takeHomePay);


