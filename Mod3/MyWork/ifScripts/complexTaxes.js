// Description: This script will calculate tax rates based on
//taxable income and filing status
//Author: Corinne Trudeau
"use strict";

//User Inputs
var payRate = 30;
var hoursWorked = 600;
var filingStatus = "Single";
//Calculations
var taxableIncome;
var ssTaxRate = .065;
var medTaxRate = .0145;
var fedTaxRate;
var taxesOwed;
var takeHomePay;

taxableIncome = hoursWorked * payRate;

if (filingStatus == "Single")
{
    if (taxableIncome<12000)
    {fedTaxRate = .05;
    }
    else if (taxableIncome<25000)
    {fedTaxRate = .1;
    }
    else if (taxableIncome<75000)
    {fedTaxRate = .15;
    }
    else if (taxableIncome>=75000)
    {fedTaxRate = .2;
    }

}
else  //(filing status=Joint)
{
    if (taxableIncome<12000)
    {fedTaxRate = 0;
    }
    else if (taxableIncome<25000)
    {fedTaxRate = .06;
    }
    else if (taxableIncome<75000)
    {fedTaxRate = .11;
    }
    else if (taxableIncome>=75000)
    {fedTaxRate = .2;
    }
}

taxesOwed=(taxableIncome*fedTaxRate)+(taxableIncome*ssTaxRate)+(taxableIncome*medTaxRate)
takeHomePay = taxableIncome - taxesOwed

console.log("If you made $" + taxableIncome + " and your filing status is " + filingStatus + " you owe $" + taxesOwed + " and your take-home pay will be $" + takeHomePay)