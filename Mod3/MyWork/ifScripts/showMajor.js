// Description: This script will use switch statements to display the student's
//major and advising location
//taxable income and filing status
//Author: Corinne Trudeau
"use strict";
//User input
var studentName = "Scout";
var studentMajor = "PSY";
//calculations
var nameMajor;
var advLocation;

switch (studentMajor)
{
    case "BIOL":
        nameMajor = "Biology";
        advLocation = "Science Bldg, Room 310";
        break;
    case "CSCI":
        nameMajor = "Computer Science";
        advLocation = "Sheppard Hall, Room 314";
        break;
    case "ENG":
        nameMajor = "English";
        advLocation = "Kerr Hall, Room 201";
        break;
    case "HIST":
        nameMajor = "History";
        advLocation = "Kerr Hall, Room 114";
        break;
    case "MKT":
        nameMajor = "Marketing";
        advLocation = "Westly Hall, Room 310";
        break;
    default:
        nameMajor = "Unknown";
        advLocation = "";
        break; 
}

//Output
console.log("Student: " + studentName + "\nMajor: " + nameMajor + "\nAdvising Location: " + advLocation)