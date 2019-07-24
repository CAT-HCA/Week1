// Description: Pay check calculator
//this script will use switch statements to determine and print dept name based on dept code.
//Author: Corinne Trudeau
"use strict";
//User input
var deptCode = 12;

//calculations
var deptName;

switch (deptCode)
{
    case 1:
        deptName = "Marketing";
        break;
    case 5:
        deptName = "Human Resources";
        break;
    case 10:
        deptName = "Accounting";
        break;
    case 12:
        deptName = "Legal";
        break; 
    case 18:
        deptName = "IT";
        break;   
    case 20:
        deptName = "Customer Relations";
        break;  
    default:
        deptName = "Unknown";
        break; 
}

//Output
console.log("Department code: " + deptCode + "\nDepartment name: " + deptName)