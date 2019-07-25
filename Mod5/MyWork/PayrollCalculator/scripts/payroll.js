"use strict";
var grossPay;

function doPayRollCalc ()
{
    //Get Data from UI
    let hoursWorked = Number(hoursWorkedField.value);
    let payRate = Number(payRateField.value);
    let taxCode = Number(withHoldingsField.value);

    //Process Data
    let grossPay = getGrossPay(hoursWorked, payRate);
    let socSecTax = getSocSecTax(grossPay);
    let medicareTax = getMedicareTax(grossPay);
    let federalTax = getFederalTax(grossPay, taxCode);
    let takeHomePay = grossPay - socSecTax - medicareTax - federalTax;

    
    //Display results
    let message = "Gross Pay: $" + grossPay.toFixed(2);
    document.getElementById("grossPayField").innerHTML = message;

    message = "Social Security Tax: $" + socSecTax.toFixed(2);
    document.getElementById("socialSecurityField").innerHTML = message;

    message = "Medicare Tax: $" + medicareTax.toFixed(2);
    document.getElementById("medicareField").innerHTML = message;


    message = "Federal Tax: $" + federalTax.toFixed(2);
    document.getElementById("federalField").innerHTML = message;

    message = "Take Home Pay: $" + takeHomePay.toFixed(2);
    document.getElementById("takeHomePay").innerHTML = message;

}

function getGrossPay(hoursWorked, payRate)
{
    let grossPay;
    if (hoursWorked <= 40)
    {
        grossPay = hoursWorked*payRate;
    }
    else 
    {
        grossPay = (40 * payRate) + (hoursWorked - 40) * (payRate * 1.5);
    }
    return grossPay;
}

function getSocSecTax(grossPay)
{
    const socSecTaxRate = .062;
    let socSecTax = grossPay * socSecTaxRate;
    return socSecTax;
}

function getMedicareTax(grossPay)
{
    const medicareTaxRate = .0145;
    let medicareTax = grossPay * medicareTaxRate;
    return medicareTax;

}

function getFederalTax(grossPay,taxCode)
{

    var FederalTaxPerc;
    if (taxCode == 0)
    {
        FederalTaxPerc = .23;
    }
    else if (taxCode == 1)
    {
        FederalTaxPerc = .21;
    }
    else if (taxCode == 2)
    {
        FederalTaxPerc = .195;
    }
    else if (taxCode == 3)
    {
        FederalTaxPerc = .185;
    }
    else
    {
        FederalTaxPerc = .18-((taxCode-4)*.005);
    }
    let federalTax = grossPay * FederalTaxPerc;
    return federalTax;

}


