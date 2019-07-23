// Description: This script will calculate tax rates based on
//taxable income and filing status
//Author: Corinne Trudeau
"use strict";

//User Inputs
var taxableIncome = 10000;
var filingStatus = "Single";
//Calculations
var taxRate;
var taxesOwed;


if (filingStatus == "Single")
{
    if (taxableIncome<12000)
    {taxRate = .05;
    }
    else if (taxableIncome<25000)
    {taxRate = .1;
    }
    else if (taxableIncome<75000)
    {taxRate = .15;
    }
    else if (taxableIncome>=75000)
    {taxRate = .2;
    }

}
else  //(filing status=Joint)
{
    if (taxableIncome<12000)
    {taxRate = 0;
    }
    else if (taxableIncome<25000)
    {taxRate = .06;
    }
    else if (taxableIncome<75000)
    {taxRate = .11;
    }
    else if (taxableIncome>=75000)
    {taxRate = .2;
    }
}


taxesOwed=taxableIncome*taxRate

console.log("If you made $" + taxableIncome + " and your filing status is " + filingStatus + " you owe $" + taxesOwed + ".")